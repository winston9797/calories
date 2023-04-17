import {useState,useEffect, useRef} from 'react'
import axios from 'axios'
import Card from './Card'
import Error from './Error';
import SearchForm from './SearchForm';

export default function Search() {

  const [Query, setQuery] = useState('oats');
  const [Results, setResults] = useState({});
  const [Errors, setErrors] = useState('');
  const [isError, setisError] = useState(false);
  const inputRef = useRef();

  const foodSearch = async ()=>{
    const res = await axios.get(`https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=3a28fce6e82b4d33a2e830a118a51262&query=${Query}&number=20&metaInformation=true`)
    .then(res=>{
      setResults(res.data)
      if(res.data.length == 0){
        setisError(true)
        setErrors('nothing was found please try agains')
      }else{
        setisError(false)
      }
    }).catch(err=>{
      if(err.response.status > 300){
        setisError(true)
        setErrors(err.message)
      }
    })
  }
  useEffect(() => {
     foodSearch()
    }, [Query]);

  const handleSubmit = (ev)=>{
    ev.preventDefault();
    setQuery(inputRef.current.value)
    if(Results == []){
      setisError(true)
      setErrors('nothing was found here please try again')
    }
  }


  
  return (
    <div className='container'>
      <SearchForm handleSubmit={handleSubmit} inputRef={inputRef} />
      <Error msg={Errors} isError={isError} />
      <div className="row">
          {Object.entries(Results).map(food=>{
              return <Card type={'food'} id={food[1].id} key={food[1].id}  image={`https://spoonacular.com/cdn/ingredients_500x500/${food[1].image}`} name={food[1].name} />
            })}
        </div>
      </div>
  )
}
