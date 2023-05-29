import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Items";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const ShoppingList = () => {
  const [value, setValue] = useState("all");
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const breakPoint = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5004/api/product1");
      const data = await response.json();
      setItems(data);
      setCategories(getUniqueCategories(data));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const getUniqueCategories = (items) => {
    const categories = items.reduce((uniqueCategories, item) => {
      item.categories.forEach((category) => {
        if (!uniqueCategories.includes(category)) {
          uniqueCategories.push(category);
        }
      });
      return uniqueCategories;
    }, []);
    return categories;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredItems =
    value === "all"
      ? items
      : items.filter((item) => item.categories.includes(value));

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "-ms-grid" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        {categories.map((category) => (
          <Tab label={category} value={category} key={category} />
        ))}
      </Tabs>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {filteredItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
