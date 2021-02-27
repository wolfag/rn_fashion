import { useFormik } from "formik";
import React from "react";
import { Linking } from "react-native";
import * as yup from "yup";

import { Box, Button, Container, Text, TextInput } from "../components";
import { AuthNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";

const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
});

export default function ForgotPassword({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      console.log(values);
      navigation.navigate("PasswordChanged");
    },
    validationSchema: ForgotPasswordSchema,
  });

  const footer = (
    <Footer
      title="Don`t work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom={"l"}>
          Enter the email address associated with your account
        </Text>

        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginBottom="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Reset password"
              disabled={!isValid}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
