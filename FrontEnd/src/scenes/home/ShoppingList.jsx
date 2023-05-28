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
      fetchCategories();
    }, []);

    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:5004/api/product1");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5004/api/product1");
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const filteredItems =
      value === "all"
        ? items
        : items.filter((item) => item.category === value);

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
          <Tab label="New Arrivals" value="newArrival" />
          <Tab label="Best Sellers" value="bestSeller" />
          <Tab label="Top Rated" value="topRated" />
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
