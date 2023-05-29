/* import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";

const Item = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5004/api/product1");
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      const productImage = {
        _id: data._id,
        productImage: data.productImage,
        categories: data.categories,
        title: data.title,
        price: data.price,
        shortdesc: data.shortdesc
      };
      setItems([productImage]);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <Box key={`${item._id}-${index}`} width="200px">
          <Box position="relative">
            <img
              alt={item.productImage}
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
 */



import React, { useState, useEffect } from "react";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";

const Item = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5004/api/product1");
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {items.map((item, index) => (
        <Box key={item._id} width="200px">
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
            <Typography>{item.shortdesc}</Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Item;
