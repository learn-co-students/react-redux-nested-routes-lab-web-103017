import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchPets } from "../actions";
import PetsNew from "./PetsNew";
import PetsShow from "./PetsShow";
import PetsList from "../components/PetsList";

class PetsPage extends Component {
  constructor(props) {
    super(props);
    console.log("Pets Page", props);
  }

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div>
        <PetsList pets={this.props.pets} />
        <Switch>
          <Route path={`${this.props.match.url}/:petId`} component={PetsShow} />
          <Route path={this.props.match.url} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
};

export default connect(mapStateToProps, { fetchPets })(PetsPage);
