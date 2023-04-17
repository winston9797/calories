import {useEffect,useState} from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


export default function Chart({calories}) {
	const [Carbs, setCarbs] = useState(0);
	const [Protien, setProtien] = useState(0);
	const [Fats, setFats] = useState(0);
	useEffect(() => {
		setTimeout(() => {
			setCarbs(calories.percentCarbs)
			setFats(calories.percentFat)
			setProtien(calories.percentProtein)
		}, 1000);
		
	},[calories]);
	ChartJS.register(ArcElement, Tooltip, Legend);
	const data = {
		labels: ['Carbs %', 'Fat %', 'Protein %'],
		datasets: [
		  {
			label: '# of Votes',
			data: [Carbs,Fats,Protien],
			backgroundColor: [
				'rgb(153, 102, 255)',
				'rgb(255, 206, 86)',
				'rgb(255, 99, 132)',
			],
			borderWidth: 1,
		  },
		],
	  };
		return <Doughnut data={data} />
}
