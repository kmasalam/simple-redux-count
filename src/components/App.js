import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
//import Count from '../actions'

import {increment} from '../actions';
import {decrement} from '../actions'

// import Increment from './Increment';
// import Decrement from './Decrement';

const App = (props) => {
    return(
        <div>
            <button 
            className='btn btn-primary m-2' 
            onClick={() => props.increment(props.count)}>
                Increment
            </button>
            <button 
            className='btn btn-primary m-2' 
            onClick={() => props.decrement(props.count)} >
                Decrement
            </button>
           <div className='m-2 '>
           counter: {props.count}
           </div>
        </div>
    )
}


const mapStateToProps = (state) =>{
   return { count: state.count}
}


export default connect(mapStateToProps,{
    increment: increment,
    decrement: decrement
})(App)