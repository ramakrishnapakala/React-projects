import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
function Meal() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal} />
      <section className="content">
        <p>{strMeal}</p>
        <p>id: {idMeal}</p>
      </section>
    </section>
  ));

  return <div className="items-container">{itemsList}</div>;
}

export default Meal;
