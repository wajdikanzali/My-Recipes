// React
import React from 'react';
import Header from './Header';
//Charger les recettes
import recettes from '../recettes';

class App extends React.Component {

	state = {
		recettes: {}
	};

	chargerExemple = () => {
		this.setState({ recettes });
	};

	render() {
		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo}/>
				<div className="cards">
					<div className="card"></div>
				</div>
			</div>
		)
	}

	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

export default App;