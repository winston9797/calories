import React from 'react'
import loader from '../assets/loader.gif'

export default function Loader({Isloaded,children}) {
  if(!Isloaded){
	return <img src={loader} alt="" />
	}else{
	return <div>{children}</div>
  }
}
