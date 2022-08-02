
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import catalog from '../catalog.json'

const Film = () => {
  const params = useParams()
  const film = catalog[params.id - 1] 

  return (
    <section>
        <article className='flex wrap center'>
        <img src={film.image} alt={film.title} className='h268' />
        <div className='about'>
        <h1>{film.title}</h1>
        <h2>By</h2>
        <p>{film.director}</p>
        <h2>About</h2>
        <p>{film.description}</p>
        <h2>With</h2>
        <p>{film.stars.map((star)=>{
           return <span key={star}>{star}</span>
        })}</p>
        <Link to={`/`}><button>home</button></Link>
        </div>
        </article>
        
    </section>
  )
}

export default Film