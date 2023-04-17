import React from 'react'
import {Link } from 'react-router-dom'

export default function Card({name,image,id,type}) {
  return (
	<div className="col m3">
		<div className="card">
			<div className="card-image ">
				<img style={{height:'200px'}} src={image} />
			</div>
			<div className="card-action ">
				<Link className='red-darken' to={`/${type}/${id}`}>{name}</Link>
			</div>
		</div>
	</div>
  )
}
