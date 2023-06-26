// import Card from '../UI/Card';
// import React,{useState} from 'react';
// import MealItem from './MealItem/MealItem';
// import classes from './AvailableMeals.module.css';
// // const [restaurants, setRestaurants] = useState([
// //   { id: 1, name: "Restaurant 1", menu: ["Plat 1", "Plat 2", "Plat 3"] },
// //   { id: 2, name: "Restaurant 2", menu: ["Plat 4", "Plat 5", "Plat 6"] },
// //   { id: 3, name: "Restaurant 3", menu: ["Plat 7", "Plat 8", "Plat 9"] }
// // ]);
// // const [DUMMY_MEALS,setDummyFood] = useState([
// //   {id:1,name:"pap",menu:[  {
// //     id: 'm1',
// //     name: 'Nuggets',
// //     description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
// //     price: 14,
// //   },
// //   {
// //     id: 'm2',
// //     name: 'Chich taouk',
// //     description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
// //     price: 16.5,
// //   },
// //   {
// //     id: 'm3',
// //     name: 'Mixte',
// //     description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
// //     price: 17,
// //   },
// //   {
// //     id: 'm4',
// //     name: 'Naan escalope pané',
// //     description: 'Naan',
// //     price: 6.5,
// //   },
// //   {
// //     id: 'm5',
// //     name: 'Cheese naan escalope pané',
// //     description: 'Cheese Naan',
// //     price: 7.5,
// //   },
// //   {
// //     id: 'm9',
// //     name: 'Naan chich taouk',
// //     description: 'Naan',
// //     price: 7,
// //   },
// //   {
// //     id: 'm9',
// //     name: 'Cheese naan chich taouk',
// //     description: 'Cheese Naan',
// //     price: 8,
// //   },
// //   {
// //     id: 'm9',
// //     name: 'Cheese naan chich taouk',
// //     description: 'Cheese Naan',
// //     price: 8,
// //   },
// // ]}
// // ])
// //   {
// //     id: 'm1',
// //     name: 'Nuggets',
// //     description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
// //     price: 14,
// //   },
// //   {
// //     id: 'm2',
// //     name: 'Chich taouk',
// //     description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
// //     price: 16.5,
// //   },
// //   {
// //     id: 'm3',
// //     name: 'Mixte',
// //     description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
// //     price: 17,
// //   },
// //   {
// //     id: 'm4',
// //     name: 'Naan escalope pané',
// //     description: 'Naan',
// //     price: 6.5,
// //   },
// //   {
// //     id: 'm5',
// //     name: 'Cheese naan escalope pané',
// //     description: 'Cheese Naan',
// //     price: 7.5,
// //   },
// //   {
// //     id: 'm9',
// //     name: 'Naan chich taouk',
// //     description: 'Naan',
// //     price: 7,
// //   },
// //   {
// //     id: 'm9',
// //     name: 'Cheese naan chich taouk',
// //     description: 'Cheese Naan',
// //     price: 8,
// //   },
// //   {
// //     id: 'm9',
// //     name: 'Cheese naan chich taouk',
// //     description: 'Cheese Naan',
// //     price: 8,
// //   },
// // ];

// const AvailableMeals = () => {
//   const [DUMMY_MEALS,setDummyFood] = useState([
//     {id:1,name:"pap",menu:[  {
//       id: 'm1',
//       name: 'Nuggets',
//       description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
//       price: 14,
//     },
//     {
//       id: 'm2',
//       name: 'Chich taouk',
//       description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Mixte',
//       description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
//       price: 17,
//     },
//     {
//       id: 'm4',
//       name: 'Naan escalope pané',
//       description: 'Naan',
//       price: 6.5,
//     },
//     {
//       id: 'm5',
//       name: 'Cheese naan escalope pané',
//       description: 'Cheese Naan',
//       price: 7.5,
//     },
//     {
//       id: 'm9',
//       name: 'Naan chich taouk',
//       description: 'Naan',
//       price: 7,
//     },
//     {
//       id: 'm9',
//       name: 'Cheese naan chich taouk',
//       description: 'Cheese Naan',
//       price: 8,
//     },
//     {
//       id: 'm9',
//       name: 'Cheese naan chich taouk',
//       description: 'Cheese Naan',
//       price: 8,
//     },
//   ]}
//   ])
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const handleClick = (id) => {
//     const restaurant = DUMMY_MEALS.find((r) => r.id === id);
//     setSelectedRestaurant(restaurant);
//   };
 
//   // const mealsList = DUMMY_MEALS.map((meal) => (
//   //   <MealItem
//   //     key={meal.id}
//   //     id={meal.id}
//   //     name={meal.name}
//   //     description={meal.description}
//   //     price={meal.price}
//   //   />
//   // ));

//   return (
//     <section className={classes.meals}>
//       <Card>
//         {/* <ul>{mealsList}</ul> */}
//         <ul>
//   {DUMMY_MEALS.map((restaurant) => (
//     <li key={restaurant.id} onClick={() => handleClick(restaurant.id)}>
//       {restaurant.name}   
//     </li>
//   ))}
// </ul>
// {selectedRestaurant && (
//         <div>
//           <h3>Menu de {selectedRestaurant.name} :</h3>
//           <ul>
//             {selectedRestaurant.menu.map((meal) => (
//     <MealItem
//       key={meal.id}
//       id={meal.id}
//       name={meal.name}
//       description={meal.description}
//       price={meal.price}
//     />
//   ))};
//           </ul>
//         </div>
//       )}
//       </Card>
//     </section>
//   );
// };

// export default AvailableMeals;

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Most popular Food',
    price: 16.99,
  },
  {
    id: 'm5',
    name: 'Pizza',
    description: 'Italian speciality',
    price: 12.99,
  },
  {
    id: 'm9',
    name: 'Spaghetti',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm9',
    name: 'BBQ SANDWICHES',
    description: 'Pork BBQ or chicken BBQ with coleslaw.',
    price: 10,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
