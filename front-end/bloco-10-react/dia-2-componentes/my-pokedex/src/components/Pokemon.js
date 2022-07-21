import React, { Component } from 'react';


class Pokemon extends Component {
  render() {
    const { name, type, value, measurementUnit, image } = this.props;
    return (
      <div className='card'>
        <ul className='lista'>
          <li>{ name }</li>
          <li>{ type }</li>
          <li>{ value } { measurementUnit }</li>
        </ul>
        <img className='image' src={ image } alt="erroooou" />
      </div>
    )
  }
}

export default Pokemon;