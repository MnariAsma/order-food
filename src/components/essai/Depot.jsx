import React from 'react';
import './Depot.css'
import { Link } from 'react-router-dom';
function Depot() {
  const restaurants = [
    {
      id: 1,
      name: "Domino Pizza",
      image: "https://express.yassir.io/uploads/images/others/data[food_img]-1675168709398.jpeg",
      description: "A cozy cafe with Parisian vibes.",
      menu: ["Pizza Margherita", "Pizza Pepperoni", "Pizza Vegetariana", "Spaghetti Carbonara", "Lasagna"]
    },
    {
      id: 2,
      name: "4 Goûts Monastir",
      image: "https://express.yassir.io/uploads/images/others/data[food_img]-1672228203638.jpeg",
      description: "A sushi restaurant with all-you-can-eat specials."
    },
    {
      id: 3,
      name: "Bizz'Art Monastir",
      image: "https://express.yassir.io/uploads/images/others/data[food_img]-1660517379118.jpeg",
      description: "A family-owned pizzeria with authentic Italian pizza."
    },
    {
        id: 4,
        name: "Crêperie Brothers",
        image: "https://express.yassir.io/uploads/images/others/data[food_img]-1660290744770.jpeg",
        description: "A cozy cafe with Parisian vibes."
      },
      {
        id: 6,
        name: "Mama Chami",
        image: "https://express.yassir.io/uploads/images/others/data[food_img]-1651678930498.jpeg",
        description: "A family-owned pizzeria with authentic Italian pizza."
      },
      {
        id: 8,
        name: "Taxi Pizza",
        image: "https://express.yassir.io/uploads/images/others/data[food_img]-1651678877776.jpeg",
        description: "A family-owned pizzeria with authentic Italian pizza."
      },
      {
        id: 9,
        name: "La Vida Loca",
        image: "https://express.yassir.io/uploads/images/others/data[food_img]-1673210492620.jpeg",
        description: "A sushi restaurant with all-you-can-eat specials."
      },
      {
        id: 10,
        name: "Tarantino",
        image: "https://express.yassir.io/uploads/images/others/data[food_img]-1674508645226.jpeg",
        description: "A family-owned pizzeria with authentic Italian pizza."
      },
  ];

  return (
    <div className="restaurant-depot">
      <Link to='/Pappadam' >
      <div className="restaurant" >
          <img src='https://express.yassir.io/uploads/images/others/data[food_img]-1651678802671.jpeg' alt='ing' />
          <h2>PAPADAM Food</h2>
          <p>A sushi restaurant with all-you-can-eat specials.</p>
        </div>
      </Link>
      <Link to='/PlanB '><div className="restaurant">
          <img src='https://express.yassir.io/uploads/images/others/data[food_img]-1652878551296.jpeg' alt='PlanB' />
          <h2>Plan B</h2>
          <p>Very delicious food </p>
        </div>
        </Link>
       
      {restaurants.map((restaurant) => (
        <Link to='/MENU'><div className="restaurant" key={restaurant.id}>
          <img src={restaurant.image} alt={restaurant.name} />
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
        </div>
        </Link>
      ))} 
    </div>
  );
}

export default Depot;