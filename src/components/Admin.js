// React
import React from 'react';
import AjouterRecette from './AjouterRecette';


class Admin extends React.Component {

	traiterChangement = (event, key) => {
		const recette = this.props.recette[key];
		const majRecette = {
			...recette,
			[event.target.name]: event.target.value
		};
		this.props.majRecette(key, majRecette);
	};

	renderAdmin = key => {
		const recette = this.props.recette[key];
		return (
			<div className="card" key={key} >
				<form className="admin-form">

					<input value={recette.nom} name="nom" onChange={e => this.traiterChangement(e, key)} type="text" placeholder="Nom de la recette" />

					<input value={recette.image} name="image" onChange={e => this.traiterChangement(e, key)} type="text" placeholder="Adresse de l'image" />

					<textarea value={recette.ingredients} name="ingredients" onChange={e => this.traiterChangement(e, key)} rows="3" placeholder="Liste des ingrédients séparés par une virgule" ></textarea>

					<textarea value={recette.instructions} name="instructions" onChange={e => this.traiterChangement(e, key)} rows="15" placeholder="Liste des instructions (une par ligne)" ></textarea>
				</form>
				<button onClick={() => this.props.supprimerRecette(key)}>Supprimer</button>
			</div>
		)
	}

	render() {

		const adminCards = Object
			.keys(this.props.recette)
			.map(this.renderAdmin);

		return (
			<div className="cards">
			<AjouterRecette ajouterRecette={this.props.ajouterRecette} />
				{adminCards}
				<footer>
					<button onClick={this.props.chargerExemple}>Remplir</button>
				</footer>
			</div>
		)
	}

	static propTypes = {
		recette: React.PropTypes.object.isRequired,
		chargerExemple: React.PropTypes.func.isRequired,
		ajouterRecette: React.PropTypes.func.isRequired,
		majRecette: React.PropTypes.func.isRequired,
		supprimerRecette: React.PropTypes.func.isRequired
	}
}


export default Admin;