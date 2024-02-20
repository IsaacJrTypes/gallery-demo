

export default function Card({ingredients,image,title}) {
    
    return (
        <div style={{border:'2px solid black', width:200, margin:'0 auto'}}>
            <img src={image} alt={'image of a '+title}></img>
            <h1>{title}</h1>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    )
}