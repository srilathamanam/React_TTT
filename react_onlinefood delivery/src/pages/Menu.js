
import React from 'react';
import prices from '../foodprices/prices.js';
import Layout from '../component/Layout.js';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {prices.map((item) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

/*
import React, { useEffect, useState } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Layout from '../component/Layout.js';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase database using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://prices-4fc1a-default-rtdb.firebaseio.com/prices.json');
        const menuData = response.data;

        if (menuData) {
          const menuItemsArray = Object.values(menuData);
          setMenuItems(menuItemsArray);
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menuItems.map((item) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={item.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={item.image}
                alt={item.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};
*/
export default Menu;


