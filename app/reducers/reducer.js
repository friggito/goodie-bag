import {createStore} from 'redux'


//first some action types
const GET_ALL_CANDIES = 'GET_ALL_CANDIES'

//then action creators
export const getAllCandies = () => { type: GET_ALL_CANDIES }

//then initial state
const initialState = {
    candies: []
}

//then reducer func
const reducer = (state = initialState, action) => {
    switch (action.type){
        case GET_ALL_CANDIES: {
            return [... state.candies]
        }
        default: {
            return state
        }
    }
}

//now let's export our reducer
export default reducer
