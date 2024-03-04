// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovies = 'ACTION'
const comedyMovies = 'COMEDY'

const PrimeVideo = props => {
  const {movieList} = props
  const actionMoviesList = movieList.filter(
    movie => movie.categoryId === actionMovies,
  )

  const comedyMoviesList = movieList.filter(
    movie => movie.categoryId === comedyMovies,
  )

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div>
        <h1>Action Movies</h1>
        <MoviesSlider movieList={actionMoviesList} />
        <h1>Comedy MOVIES</h1>
        <MoviesSlider movieList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
