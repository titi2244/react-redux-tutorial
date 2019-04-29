import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = (props) => {
    //
    const {index, number, color, onIncrement, onDecrement, onSetColor} = props;
    return (
        <div
            className="Counter"
            onClick={() => props.onIncrement(index)}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    props.onDecrement(index);
                }
            }
            onDoubleClick={() => props.onSetColor(index)}
            style={{backgroundColor: props.color}}>
            {number}
        </div>
    );
};

Counter.propTypes = {
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    index: 0,
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;