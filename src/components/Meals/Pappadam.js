import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
        id: 'm1',
        name: 'Nuggets',
        description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
        price: 14,
      },
      {
        id: 'm2',
        name: 'Chich taouk',
        description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
        price: 16.5,
      },
      {
        id: 'm3',
        name: 'Mixte',
        description: 'Riz, salade, 3 sauces, frites, pain naan à volonté',
        price: 17,
      },
      {
        id: 'm4',
        name: 'Naan escalope pané',
        description: 'Naan',
        price: 6.5,
      },
      {
              id: 'm5',
              name: 'Cheese naan escalope pané',
              description: 'Cheese Naan',
              price: 7.5,
            },
            {
              id: 'm9',
              name: 'Naan chich taouk',
              description: 'Naan',
              price: 7,
            },
            {
              id: 'm9',
              name: 'Cheese naan chich taouk',
              description: 'Cheese Naan',
              price: 8,
            },
            {
              id: 'm9',
              name: 'Cheese naan chich taouk',
              description: 'Cheese Naan',
              price: 8,
            },

    ];

export default function Pappadam(){
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

