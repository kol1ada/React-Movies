import { Component } from 'react';


class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			type: 'all'
		}
	}

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search)
		}
	}

	handleFilter = (e) => {
		this.setState(() => ({type: e.target.dataset.type}), () => {
			this.props.searchMovies(this.state.search, this.state.type)
		})
	}

	render() {
		return (
			<div className="row">
				<form className="col s12">
					<div className="row">
						<div className="input-field col s12">
							<input
								placeholder='Search'
								id="search"
								type="email"
								className="validate"
								value={this.state.search}
								onKeyDown={this.handleKey}
								onChange={(e) => this.setState({ search: e.target.value })}
							/>
							<button className="btn red btn-search" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
						</div>
					</div>
				</form>
				<div>
					<label>
						<input className='with-gap' name='type' type='radio' data-type='all' onChange={this.handleFilter} checked={this.state.type === 'all'}/>
						<span>All</span>
					</label>
					<label>
						<input className='with-gap' name='type' type='radio' data-type='movie' onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
						<span>Movies only</span>
					</label>
					<label>
						<input className='with-gap' name='type' type='radio' data-type='series' onChange={this.handleFilter} checked={this.state.type === 'series'}/>
						<span>Serios only</span>
					</label>
				</div>
			</div>
		)
	}
}

export { Search }