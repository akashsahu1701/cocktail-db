import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktails, setCocktails] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strAlcoholic: info,
            strDrinkThumb: img,
            strCategory: category,
            strGlass: glass,
            strInstructions: inst,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredient = {
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          };

          const newCocktails = {
            name,
            info,
            img,
            category,
            glass,
            inst,
            ingredient,
          };
          setCocktails(newCocktails);
        } else {
          setCocktails(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  if (loading) {
    return <h3 className="section-title">Loading. . . </h3>;
  }
  if (!cocktails) {
    return <h1 className="section-title"> No Info Available</h1>;
  } else {
    const { name, info, img, category, glass, inst, ingredient } = cocktails;
    return (
      <section className=" section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
        <h3 className="section-title">{name}</h3>
        <div className="drink">
          <img src={img} alt={name} />
          <div className="drink-info">
            <p>Name:{name}</p>
            <p>Type:{info}</p>
            <p>Category:{category}</p>
            <p>Glass:{glass}</p>
            <p>Instructions:{inst}</p>
          </div>
        </div>
      </section>
    );
  }
}
