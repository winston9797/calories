import React from 'react'

export default function SearchForm({handleSubmit,inputRef}) {
  return (
	<div className="input-field col s6">
		<form onSubmit={handleSubmit}>
		<input ref={inputRef} placeholder="Search for food items ..." id="first_name" type="text" className="validate" />
		<button className="btn red lighten-1">Search</button>
		</form>
	</div>
  )
}
