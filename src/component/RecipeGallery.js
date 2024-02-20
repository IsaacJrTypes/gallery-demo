import Card from "./Card";

/*
Use the map() function to iterate over the recipes array and return a JSX structure for each recipe. Consider using a card layout to display each recipe's title, a list of ingredients, and an image.

Ensure each recipe card in the gallery has a unique key prop, ideally using the recipe's id.

*/

export default function RecipeGallery({data}) {
    return (
        <div>
            {data.map((item) => {
               return <Card key={item.id} title={item.title} image={item.image} ingredients={item.ingredients}/>
            })}
        </div>
    );
}