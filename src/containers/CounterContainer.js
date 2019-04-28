import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from  'react-redux';
import { getRandomColor } from "../utils";

// store의 값을 Porps로 매핑 해 주는 함수
const mapStateToProps = (state) => ({
    //
    color: state.color,
    number: state.number
});

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch 하는 함수를 만들은 후, 이를 props 로 연결해줍니다.
*/
const mapDispatchToProps = (dispatch) => ({
    //
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        // const color = 'black'; //임시
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
