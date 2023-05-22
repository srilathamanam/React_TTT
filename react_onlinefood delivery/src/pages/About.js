import React from 'react';
import Layout from '../component/Layout';
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Online Food Order</Typography>
        <p>
        Delicious delights, delivered to your doorstep. Experience the convenience and joy of indulging in your favorite dishes from the comfort of your home. With our seamless online food delivery service, culinary satisfaction is just a few clicks away. Treat yourself to a world of flavors, delivered right to you.
        </p>
      
       
      </Box>
    </Layout>
  );
};


export default About;
