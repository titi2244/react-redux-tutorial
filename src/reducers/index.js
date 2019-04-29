import * as types from '../actions/ActionTypes';

// 초기 상태를 정의 합니다. 한개의 카운터 - 검은색, 초기값 0
const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

// reducer정의
function counter(state = initialState, action) {
    //
    // referance생성
    const { counters } = state;  //javascript destructing => counters = state.counters

    switch (action.type) {
        case types.CREATE :
            return {
                counters: [
                    ...counters,    // counters 배열안의 모든 요소 나열.
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length -1)
            };
        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index), // index앞쪽 모든 요소(카운터) 나열
                    {
                        ...counters[action.index], // 해당 인덱스에 해당하는 카운터의 모든 attribute나열
                        number: counters[action.index].number + 1 //increment
                    },
                    ...counters.slice(action.index+1, counters.length)  // array.slice(begin index, end index) end index 요소는 미포함.
                ]
            };
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index +1, counters.length)
                ]
            }
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index, counters.length)
                ]
            }
        default:
            return state;
    }
}

export default counter;