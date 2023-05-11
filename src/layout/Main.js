import { Component } from 'react'
import { Movie } from '../components/Movie'
import { Loader } from './Loader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY
class Main extends Component {
	state = {
		movies: [],
		loading: true
	}

	componentDidMount() {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page`)
			.then(el => el.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: false })
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then(el => el.json())
			.then(data => this.setState({ movies: data.Search, loading: false }))
	}

	render() {
		const { movies, loading } = this.state;

		return (
			<main className='container content'>
				<Search searchMovies={this.searchMovies} />
				{!loading ? <Movie movies={movies} /> : <Loader />}
			</main>
		)
	}
}
export { Main }