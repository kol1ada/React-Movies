import { Component } from 'react';


class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
		}
	}

	handleKey = (e) => {
		if (e.key === 'Enter') {
			this.props.searchMovies(this.state.search)
		}
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
			</div>
		)
	}
}

export { Search }