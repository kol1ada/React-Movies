import { Component } from 'react'
import { Movie } from '../components/Movie'
import { Loader } from './Loader'
import { Search } from '../components/Search'
class Main extends Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=78584b3c&s=matrix&page')
			.then(el => el.json())
			.then(data => this.setState({ movies: data.Search }))
	}

	searchMovies = (str, type = 'all') => {
		fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ?  `&type=${type}` : ''}`)
			.then(el => el.json())
			.then(data => this.setState({ movies: data.Search }))
	}

	render() {
		const { movies } = this.state;

		return (
			<main className='container content'>
				<Search searchMovies={this.searchMovies}/>
				{movies.length ? <Movie movies={movies} /> : <Loader/>}
			</main>
		)
	}
}
export { Main }