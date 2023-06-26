import Card from '../../UI/Card';
import MealItem from '../MealItem/MealItem';
import classes from '../AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
        id: 'm1',
        name: 'ciabatta Thon',
        description: 'our speciality',
        price: 3,
      },
      {
        id: 'm2',
        name: 'Ciabatta Jambon',
        description: 'Our speciality',
        price: 9,
      },
      {
        id: 'm3',
        name: 'Poulet pané aux amande',
        description: 'Ciabatta, 3 sauces, frites',
        price: 17,
      },
      {
        id: 'm4',
        name: 'Baquette Kabeb',
        description: 'Naan',
        price: 10,
      },
      {
        id: 'm5',
        name: 'Salade maison',
        description: 'poulet, jombon, laitue , tomate cerise , roquette',
        price: 12,
      },
      {
        id: 'm6',
        name: 'Salade signature',
        description: 'poulet, bacon, mais, creme, jombon, laitue , tomate cerise , roquette',
        price: 14,
      },
      {
        id: 'm7',
        name: 'Poulet pané aux amandeBurger crispy',
        description: 'poulet, 3 sauces, frites',
        price: 11,
      },
      {
        id: 'm8',
        name: 'Baquette Kabeb',
        description: 'Naan',
        price: 10,
      },
    ];

export default function PlanB(){
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

