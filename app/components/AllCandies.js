import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleCandy from './SingleCandy'

class AllCandies extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
    }

    render (){
        return( 
            <div>
                {this.state.candies.map(candy => 
                    <SingleCandy candy={candy}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    candies: state.candies
})

const connectedAllCandies = connect(mapStateToProps)(AllCandies)

export default connectedAllCandies
