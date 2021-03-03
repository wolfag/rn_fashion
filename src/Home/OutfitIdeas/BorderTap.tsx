import React from "react";
import { State, TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  and,
  call,
  clockRunning,
  cond,
  eq,
  greaterThan,
  neq,
  not,
  set,
  startClock,
  stopClock,
  useCode,
} from "react-native-reanimated";
import { useClock, useTapGestureHandler, useValue } from "react-native-redash";

interface Props {
  onPress: () => void;
  children: React.ReactNode;
}

export default function BorderTap({ onPress, children }: Props) {
  const clock = useClock();
  const start = useValue(0);
  const opacity = useValue(0);
  const { gestureHandler, state } = useTapGestureHandler();
  useCode(
    () => [
      cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [
        startClock(clock),
        set(start, clock),
      ]),
      cond(neq(state, State.BEGAN), stopClock(clock)),
      cond(eq(state, State.END), [stopClock(clock), call([], onPress)]),
      set(
        opacity,
        cond(
          and(greaterThan(clock, add(start, 100)), clockRunning(clock)),
          0.5,
          1
        )
      ),
    ],
    []
  );

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>{children}</Animated.View>
    </TapGestureHandler>
  );
}
