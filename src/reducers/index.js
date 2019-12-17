import {combineReducers} from 'redux';

const count = (count= 0,actions) => {
    if(actions.type === 'INCREMENT'){
        return count + 1
    } else if(actions.type === 'DECREMENT'){
        return count - 1
    }

    return count;
}

export default combineReducers({
    count: count
})