import axios from 'axios'
import React, {useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import Loader from './Loader';
import RecipeInfo from './RecipeInfo';
import ShowIngredients from './ShowIngredients';

export default function SingleRecipe() {
	const id = useParams()

	const [Title, setTitle] = useState('');
	const [Description, SetDescription] = useState('');
	const [Img, SetImg] = useState('');
	const [IsCheap, SetIsCheap] = useState(false);
	const [IsVegan, SetIsVegan] = useState(false);
	const [IsVegeterian, SetIsVegeterian] = useState('');
	const [IsDairyFree, SetIsDairyFree] = useState(false);
	const [IsGlutenFree, SetIsGlutenFree] = useState(true);
	const [ReadyTime, SetReadyTime] = useState(0);
	const [Diets, SetDiets] = useState([]);
	const [isLoaded, setisLoaded] = useState(false);
	const [Steps, setSteps] = useState('');

	const [Ingredients, SetIngredients] = useState([]);

	const getRecipeInfo = async ()=>{
		const res = await axios.get(`https://api.spoonacular.com/recipes/${id.id}/information?apiKey=${import.meta.env.VITE_API_KEY}`)
		.then(res=>{
			setTitle(res.data.title)
			SetDescription(res.data.summary)
			SetImg(res.data.image)
			SetIsVegan(res.data.vegan)
			SetIsVegeterian(res.data.vegetarian)
			SetIsCheap(res.data.cheap)
			SetIsDairyFree(res.data.cheap)
			SetIsGlutenFree(res.data.glutenFree)
			SetReadyTime(res.data.readyInMinutes)
			SetDiets(res.data.diets)
			SetIngredients(res.data.extendedIngredients)
			setSteps(res.data.instructions)
			if(res.status <= 300){
				setisLoaded(true)
			}
		}).catch(err=>console.log(err))
	}

	useEffect(() => {
		getRecipeInfo()
	}, []);
  return (
	  <div className='container'>
		<Loader Isloaded={isLoaded}>
			<RecipeInfo 
			Title={Title} 
			Img={Img}
			IsVegan={IsVegan}
			IsVegeterian={IsVegeterian}
			IsCheap={IsCheap}
			IsDairyFree={IsDairyFree}
			IsGlutenFree={IsGlutenFree}
			ReadyTime={ReadyTime}
			Diets={Diets}
		   />
		   <div className="row">
			<div className="col s6">
				<ShowIngredients ingredients={Ingredients} />
			</div>
			<div className="col s6">
					<h3>Steps : </h3>
				<div className="card" style={{padding:'20px'}}>
					<p>{Steps}</p>
				</div>
			</div>
		   </div>
		</Loader>
		</div>
  )
}
