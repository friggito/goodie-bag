import {createStore} from 'redux'


//first some action types


//then action creators


//then initial state
const initialState = {
    candies: []
}

//then reducer func
const reducer = (state = initialState, action) => {
    switch (action.type){
        default: {
            return state
        }
    }
}

//now let's export our reducer
export default reducer
