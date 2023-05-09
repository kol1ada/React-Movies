import { Component } from 'react'
import { Movie } from '../components/Movie'
class Main extends Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix&page')
			.then(el => el.json())
			.then(data => this.setState({ movies: data.Search }))
	}
	render() {
		const { movies } = this.state;

		return (
			<main className='container content'>
				{movies.length ? <Movie movies={movies} /> : <h3>Loading...</h3>}
			</main>
		)
	}
}
export { Main }