import { useState, useEffect } from "react";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/product2");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <div>
      {items.map((item, index) => (
        <Box key={index} width="200px">
          <Box position="relative">
            <img
              alt={item.title}
              width="300px"
              height="400px"
              src={item.productImage}
              style={{ cursor: "pointer" }}
            />
            <Box position="absolute" bottom="10%" left="0" width="100%" padding="0 5%">
              <Box display="flex" justifyContent="space-between">
                <Box
                  display="flex"
                  alignItems="center"
                  backgroundColor={shades.neutral[100]}
                  borderRadius="3px"
                >
                  <IconButton>
                    <RemoveIcon />
                  </IconButton>
                  <Typography color={shades.primary[300]}>count</Typography>
                  <IconButton>
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button sx={{ backgroundColor: shades.primary[300], color: "white" }}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>

          <Box mt="3px">
            <Typography variant="subtitle2" color="black">
              {item.categories}
            </Typography>
            <Typography>{item.title}</Typography>
            <Typography fontWeight="bold">{item.price}</Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Item;
