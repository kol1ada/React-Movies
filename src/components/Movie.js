import { Movies } from './Movies'

function Movie(props) {
	const { movies } = props
	return <div className='movies'>
		{movies.map(movie => <Movies key={movie.imdbId} {...movie} />)}
	</div>
}
export { Movie }