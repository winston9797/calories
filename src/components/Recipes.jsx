import axios from 'axios';
import React, { useEffect,useState,useRef } from 'react'
import Card from './Card';
import SearchForm from './SearchForm';

export default function Recipes() {

	const [randomRecipes, setrandomRecipes] = useState({});
	const [SearchQuery, setSearchQuery] = useState('');
	const inputRef = useRef();

	const getRecipes = ()=>{
		//fetch random recipes
		const res = axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=24`)
		.then(res=>setrandomRecipes(res.data.recipes)).catch(err=>{
			console.log(err)
		})
	}

	const searchRecipes = ()=>{
		//search recipes
		const res = axios.get(`https://api.spoonacular.com/recipes/autocomplete?query=${SearchQuery}&apiKey=${import.meta.env.VITE_API_KEY}&&number=24`)
		.then(res=>{
			setrandomRecipes(res.data)
		}).catch(err=>{
			console.log(err)
		})
	}

	useEffect(() => {
		getRecipes();
	}, []);

	useEffect(() => {
		searchRecipes();
	}, [SearchQuery]);

		
	const handleSubmit = e=>{
		e.preventDefault()
		setSearchQuery(inputRef.current.value)
		inputRef.current.value = ''
	}

  return (
	<div>
		<div className="container">
			<SearchForm handleSubmit={handleSubmit} inputRef={inputRef} />
			<div className="row">
			{Object.entries(randomRecipes).map((recipe)=>{
					const slicedTitle = recipe[1].title.slice(0,20)
					return <Card type={'recipe'} key={recipe[1].id}  id={recipe[1].id}  image={`https://spoonacular.com/recipeImages/${recipe[1].id}-556x370.jpg`} name={slicedTitle} />
			})}
			</div>
		</div>
	</div>
  )
}
