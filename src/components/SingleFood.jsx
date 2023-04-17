import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import Chart from './Chart'
import Breakdown from './Breakdown'
import loader from '../assets/loader.gif'
import NutrientsTable from './NutrientsTable'


export default function SingleFood() {

	//states
	const [Consistency,setConsistency] = useState('')
	const [Img,setImg] = useState('')
	const [Name,setName] = useState('')
	const [Amount, setAmount] = useState(100);
	const [Cost,setCost] = useState({})
	const [Aisle,setAisle] = useState('')
	const [Type,setType] = useState('')
	//inside this caloricbreakdown percentage / nutirents / properties
	const [Nutrition,setNutrition] = useState({})
	const [isLoading, setisLoading] = useState(true);
	
	const id = useParams()
	const getFoodInfo = async ()=>{
		const res = await axios.get(`https://api.spoonacular.com/food/ingredients/${id.id}/information?apiKey=${import.meta.env.VITE_API_KEY}&amount=100`)
		.then(res=>{
			setAmount(res.data.amount)
			setImg(res.data.image)
			setName(res.data.name)
			setConsistency(res.data.consistency)
			setNutrition(res.data.nutrition)
			setCost(res.data.estimatedCost)
			setAisle(res.data.aisle)
			setType(res.data.categoryPath[0])
			setisLoading(false)
		}).catch(err=>{
			console.log(err)
		})
	}
	useEffect(() => {
		getFoodInfo()
	},[]);
	if(isLoading){
		return (
			<div style={{textAlign:'center'}}>
				<img src={loader} />
			</div>
		)
	}else{
		return (
		<div className='container'>
		<Link className='text-red backButton' to='/search'>
		<i class="material-icons text-red">arrow_back</i>
		</Link>
		<div className="row">
			<div className="col s12">
				<div className="card horizontall">
					<Breakdown calories={Nutrition.caloricBreakdown} />	
				</div>
			</div>
			<div className="col s6">
				<div className="card large-card">
					<Chart calories={Nutrition.caloricBreakdown} />
				</div>
			</div>
			<div className="col s6">
				<div className="card large-card">
					<div className="row">
						<div className="col s6">
							<img src={`https://spoonacular.com/cdn/ingredients_500x500/${Img}`} />
						</div>
						<div style={{margin:'0 auto'}} className='col s12'>
							<ul class="collection">
								<li class="collection-item">Name : {Name}</li>
								<li class="collection-item">Type : {Type}</li>
								<li class="collection-item">Amount : {Amount}</li>
								<li class="collection-item">Estimated Cost : {Cost.value} <span className='text-green'>¢</span></li>
								<li class="collection-item">Consistency : {Consistency}</li>
								<li class="collection-item">SuperMarket Aisle : {Aisle}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<br/>
			
		</div>
		<div className="row">
			<div className="col s6">
					<NutrientsTable title={'Nutrients'} data={Nutrition.nutrients} />
			</div>
			<div className="col s6">
				<NutrientsTable  title={'Flavonoids'} data={Nutrition.flavonoids} />
			</div>
			<div className="col s6">
				<NutrientsTable  title={'Properties'} data={Nutrition.properties} />
			</div>
		</div>
	</div>
		)
	}

}
