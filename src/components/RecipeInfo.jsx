import React from 'react'

export default function RecipeInfo({Title,Description,Img,IsVegan,IsVegeterian,IsCheap,IsDairyFree,IsGlutenFree,ReadyTime,Diets}) {
  return (
	<div>
		<h1>{Title}</h1>
			<p>{Description}</p>
			<div className="row">
				<div className="col s6">
					<img src={Img} alt="" />
				</div>
				<div className="col s6">
				<div className="card" style={{padding:'20px'}}>
				<table>
					<tbody>
					<tr>
						<td><strong>Vegan : </strong></td>
						<td>{IsVegan ? 'true' : 'false'}</td>
					</tr>
					<tr>
						<td><strong>Vegeterian : </strong></td>
						<td>{IsVegeterian ? 'true' : 'false'}</td>
					</tr>
					<tr>
						<td><strong>Cheap : </strong></td>
						<td>{IsCheap ? 'true' : 'false'}</td>
					</tr>
					<tr>
						<td><strong>Dairy Free : </strong></td>
						<td>{IsDairyFree ? 'true' : 'false'}</td>
					</tr>
					<tr>
						<td><strong>Gluten Free : </strong></td>
						<td>{IsGlutenFree ? 'true' : 'false'}</td>
					</tr>
					<tr>
						<td><strong>Ready time : </strong></td>
						<td>{ReadyTime} MIN</td>
					</tr>
					<tr>
						<td><strong>Diets : </strong></td>
						<td>{Diets.map(diet=>', '+diet)}</td>
					</tr>
					</tbody>
				</table>
				</div>
				</div>
			</div>
	</div>
  )
}
