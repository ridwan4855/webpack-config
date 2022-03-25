import { useState } from "react";

const elevenShieldRecipe = {
  letherStrips: 2,
  ironIngot: 1,
  refineMoonstone: 4,
};

const elvanGauntLetsRecipe = {
  ...elevenShieldRecipe,
  leather: 1,
  refinedmoonstone: 4,
};

console.log(elevenShieldRecipe);
console.log(elvanGauntLetsRecipe);

const Recipes = (props) => {
  const [recipe, setRecipe] = useState({});
  return (
    <div className={props.className}>
      <h3>Current Recipe : </h3>
      <button onClick={() => setRecipe(elevenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvanGauntLetsRecipe)}>
        Elven Gauntlet Recipe
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
