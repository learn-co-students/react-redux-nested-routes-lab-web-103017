import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    if (this.props.pets.length === 0) {
      this.props.fetchPets();
    }

  }

  render() {

    return (
      <div>
      <PetsList pets={this.props.pets} />
      <Switch>
        <Route path="/pets/new" component={PetsNew} />
        <Route path="/pets/:id" component={PetsShow} />
      </Switch>
    </div>)
};
}

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
