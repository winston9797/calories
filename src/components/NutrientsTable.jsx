import React from 'react'

export default function NutrientsTable({data,title}) {
  return (
	<div>
		<h3>{title}</h3>
		<table>
        <thead>
          <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Daily need in %</th>
          </tr>
        </thead>

        <tbody>
		{data.map((nutt)=>{
			return 	<tr>
						<td>{nutt.name}</td>
						<td>{nutt.amount}</td>
						<td>{nutt.percentOfDailyNeeds}</td>
					</tr>
		})}
        </tbody>
      </table>
	</div>
  )
}
