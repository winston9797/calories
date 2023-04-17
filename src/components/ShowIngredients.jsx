import React from 'react'
import {Link } from 'react-router-dom'

export default function ShowIngredients({ingredients}) {
  return (
	<div>
		<h3>Ingredients : </h3>
		<ul className="collection">
		{ingredients.map(ing=>{
			return 	<li className="collection-item">
						<img style={{minWidth:'100px'}} src={'https://spoonacular.com/cdn/ingredients_100x100/'+ ing.image} alt="" />
						<Link to={'/food/'+ing.id}>{ing.name}</Link>
					</li>
		})}
		</ul>
	</div>
  )
}
