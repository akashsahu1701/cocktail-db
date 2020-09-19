import React from "react";
import Cocktails from "./Cocktail";

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h1 className="section-title">Loading . . . </h1>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">Nothing Found ,Try Other keywords !!!</h2>
    );
  }
  return (
    <section className="section">
      <h1 className="section-title"> Cocktails</h1>
      <div className="cocktails-center">
        {cocktails.map(item => {
          return <Cocktails key={item.id} {...item} />
        })}
      </div>
    </section>
  );
}
