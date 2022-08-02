
import { Link } from 'react-router-dom'
import catalog from '../catalog.json'


const Home = () => {
    
    return (
      <section>
        <h1>Film list</h1>
        <article className='flex wrap'>
        {catalog.map((film)=>{
        return <div className='films' key={film.title}>

          <Link to={`/film/${film.id}`} className='Link'>
          <img src={film.image} alt={film.title} className='filmimg' />
          <h2>{film.title}</h2>
          </Link>
        </div>
        
        })}
        </article>
      </section>
    )
  }
  
  export default Home