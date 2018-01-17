// React
import React from 'react';


class Header extends React.Component {
	ConvertirPseudo = (pseudo) => {
		return /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
	};

	render() {
		return (
			<header>
			<h1> La boite à recette de {this.ConvertirPseudo(this.props.pseudo)} </h1>
			</header>
		)
	}

	static propTypes = {
		pseudo: React.PropTypes.string.isRequired
	}
}


export default Header;