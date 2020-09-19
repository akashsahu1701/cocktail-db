import React from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");
  React.useEffect(()=>{
    searchValue.current.focus();
  })
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section">
      <h3 className="section-title">Search Your Cocktails</h3>
      <form className="form search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Your Drinks</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={searchCocktails}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
}
