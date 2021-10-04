import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import axios from "axios";
import { Dimmer, Loader, Message } from "semantic-ui-react";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const resposne = await axios.get(
          `https://reactmeals-84c78-default-rtdb.firebaseio.com/meals.json`
        );
        setMeals(resposne.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <Card>
        <Message negative textAlign="center">
          <Message.Header>Network error</Message.Header>
          <p>Please try again</p>
        </Message>
      </Card>
    );
  }
  return (
    <section className={classes.meals}>
      <Card>
        {loading && (
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>
        )}
        <ul>
          {Object.values(meals).map((meal) => {
            return <MealItem key={meal.id} meal={meal}></MealItem>;
          })}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
