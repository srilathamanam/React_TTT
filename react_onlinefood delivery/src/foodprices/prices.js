import React from 'react'
import dosa from '../images/dosa.jpg';
import idly from '../images/idly.jpg';
import biryani from '../images/biryani.jpg';
import meals from '../images/meals.jpg';
import vada from '../images/vada.jpg';

const prices = [
    {
        name: "Dosa",
        description:"Plain Dosa",
        image: dosa,
        price: 40,
      },
      {
        name: "Idly",
        description:"4 idlies",
        image: idly,
        price: 35,
      },
      {
        name: "Biryani",
        description: "Biryani with Curries",
        image: biryani,
        price: 300,
      },
      {
        name: "Meals",
        description:"Meals with 3 curries and Curd",
        image: meals,
        price: 100,
      },
      {
        name: "Vada",
        description:
          "3 vadas",
        image: vada,
        price: 50,
      },
];

export default prices;