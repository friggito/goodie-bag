import React, { Component } from "react";
import { connect } from "react-redux";
import SingleCandy from "./SingleCandy";
import store from '../store'

class AllCandies extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = store.getState()
    // }

    render () {
        return (
            <div>
              {this.props.candies.map(candy => (
                <SingleCandy candy={candy} />
              ))}
            </div>
          )
    }
}

const mapStateToProps = state => {
  return { candies: state.candies };
};

const connectedAllCandies = connect(mapStateToProps)(AllCandies);

export default connectedAllCandies;
