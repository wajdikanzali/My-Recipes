// React
import React from 'react';
import Header from './Header';
import Admin from './Admin';
import Card from './Card';
//Charger les recettes
import recettes from '../recettes';
//FireBase
import base from '../base';

class App extends React.Component {

	state = {
		recettes: {}
	};

	componentWillMount() {
		this.ref = base.syncState(`${this.props.params.pseudo}/recettes`, {
			context: this,
			state: 'recettes'
		})
	}

	componentWillUnount() {
		base.removeBinding(this.ref);
	}

	chargerExemple = () => {
		this.setState({ recettes });
	};

	ajouterRecette = (recette) => {
		const recettes = {...this.state.recettes};
		const timestamp = Date.now();
		recettes[`recette-${timestamp}`] = recette;
		this.setState({ recettes });
	};

	majRecette = (key, majRecette) => {
		const recettes = {...this.state.recettes};
		recettes[key] = majRecette;
		this.setState({ recettes });
	};

	render() {

		const cards = Object
			.keys(this.state.recettes)
			.map(key => <Card key={key} details={this.state.recettes[key]}/>);

		return (
			<div className="box">
				<Header pseudo={this.props.params.pseudo}/>
				<div className="cards">
					{cards}
				</div>
				<Admin 
					recette={this.state.recettes}
					chargerExemple={this.chargerExemple} 
					ajouterRecette={this.ajouterRecette}
					majRecette={this.majRecette}
					/>
			</div>
		)
	}

	static propTypes = {
	  params: React.PropTypes.object.isRequired
	};
}

export default App;