import React from 'react'

export default function Error({msg,isError}) {
  if(isError){
	return (
		<div className="alert card red lighten-4 red-text text-darken-4">
			<div className="card-content">
				<p>{msg}</p>
			</div>
		</div>
	  )
  }else{
	return <></>
  }
}
