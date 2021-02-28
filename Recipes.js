/*global AddToRecipes, Recipe*/

try {
   
   AddToRecipes(new Recipe({
    name: "Kronyxium Core",
    components: [],
    requirements: [],
    craftedAt: "Frost Temple Smithy"
  }));
   
} catch {
   console.log("Caught");
}
