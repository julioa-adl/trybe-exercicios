import React, { Component } from "react";
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return(
      this.props.data.map(pokemon =>
          <Pokemon 
          name={ pokemon.name }
          type={ pokemon.type }
          value={ pokemon.averageWeight.value }
          measurementUnit={ pokemon.averageWeight.measurementUnit }
          image={ pokemon.image }
          />
      )
    )
  }
}

export default Pokedex;
