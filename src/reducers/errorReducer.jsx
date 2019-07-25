import {GET_ERROR} from '../actions';
const initialState={};
export default function(state=initialState,action){
    switch(action.type){
       case GET_ERROR:
           action.payload;

        default:
            return state
    }
}