import React, { useState } from "react";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Restaurant 1", menu: ["Plat 1", "Plat 2", "Plat 3"] },
    { id: 2, name: "Restaurant 2", menu: ["Plat 4", "Plat 5", "Plat 6"] },
    { id: 3, name: "Restaurant 3", menu: ["Plat 7", "Plat 8", "Plat 9"] }
  ]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleClick = (id) => {
    const restaurant = restaurants.find((r) => r.id === id);
    setSelectedRestaurant(restaurant);
  };

  return (
    <div>
      <h2>Liste des restaurants :</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} onClick={() => handleClick(restaurant.id)}>
            {restaurant.name}
            
          </li>
        ))}
      </ul>
      {selectedRestaurant && (
        <div>
          <h3>Menu de {selectedRestaurant.name} :</h3>
          <ul>
            {selectedRestaurant.menu.map((plat, index) => (
              <li key={index}>{plat}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
