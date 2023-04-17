import {useState,useEffect} from 'react'

export default function Breakdown({calories}) {
	const [Carbs, setCarbs] = useState(0);
	const [Protien, setProtien] = useState(0);
	const [Fats, setFats] = useState(0);
	const color1 = 'rgb(153, 102, 255)'
	const color2 ='rgb(255, 206, 86)'
	const color3 = 'rgb(255, 99, 132)'
	const style = {
		display:'flex',
		justifyContent:'space-around'
	}
	useEffect(() => {
		setTimeout(() => {
			setCarbs(calories.percentCarbs)
			setFats(calories.percentFat)
			setProtien(calories.percentProtein)
		}, 1000);
		
	},[calories]);
  return (
	<div className='center-align' style={style}>
		<h3 style={{color:color1}}>Carbs : {Carbs} %</h3>
		<h3 style={{color:color3}}>Protien : {Protien} %</h3>
		<h3 style={{color:color2}}>Fats : {Fats} %</h3>
	</div>
  )
}
