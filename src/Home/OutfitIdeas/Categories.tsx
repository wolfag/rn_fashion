import React from "react";
import { ScrollView } from "react-native";

import { Box } from "../../components";

import Category, { CategoryProps } from "./Category";

const categories: CategoryProps[] = [
  {
    id: "newin",
    title: "New In",
    color: "#ffdddd",
  },
  {
    id: "summer",
    title: "Summer",
    color: "#beecc4",
  },
  {
    id: "activewear",
    title: "Active Wear",
    color: "#bfeaf5",
  },
  {
    id: "outlet",
    title: "Outlet",
    color: "#f1e0ff",
  },
  {
    id: "accessories",
    title: "Accessories",
    color: "#ffe8e9",
  },
];

export default function Categories() {
  return (
    <Box>
      <ScrollView
        horizontal
        style={{ flexShrink: 1 }}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category) => (
          <Category key={category.id} {...{ category }} />
        ))}
      </ScrollView>
    </Box>
  );
}
