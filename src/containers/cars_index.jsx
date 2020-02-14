import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class CarsIndex extends Component {
  render() {
    return (
      <div className="list-container">
        {this.props.cars.map((car) => {
          return (
            <div>
              <span>{car.brand} - {car.model}</span>
            </div>
          );
        })}
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    cars: reduxState.cars
  };
}

export default connect(mapStateToProps)(CarsIndex);
