import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = (props /*{number, color, onIncrement, onDecrement, onSetColor}*/) => {
    //
    return (
        <div
            className="Counter"
            onClick={props.onIncrement}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    props.onDecrement();
                }
            }
            onDoubleClick={props.onSetColor}
            style={{backgroundColor: props.color}}>
            {props.number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;