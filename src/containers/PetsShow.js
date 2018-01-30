import React from "react";
import { connect } from "react-redux";

const PetsShow = ({ pet }) => {
  return (
    <div className="col-md-8">
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("SHOW state", state);
  const pet = state.pets.find(p => p.id == ownProps.match.params.petId);
  console.log("SHOW pet var", pet);
  if (pet) {
    return { pet };
  } else {
    return {
      pet: {}
    };
  }
};

export default connect(mapStateToProps)(PetsShow);
