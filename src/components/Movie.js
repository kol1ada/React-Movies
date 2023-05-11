import { Movies } from './Movies'

function Movie(props) {
	const { movies = [] } = props
	return <div className='movies'>
		{movies.length ? movies.map(movie => <Movies key={movie.imdbId} {...movie} />) : <h4>We nothing fount :C </h4>}
	</div>
}
export { Movie }