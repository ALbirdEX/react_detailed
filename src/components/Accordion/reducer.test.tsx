import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('collapsed should be true', () => {
    //data
    const state: StateType = {
        collapsed: false
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expection
    expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action
    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    //expection
    expect(newState.collapsed).toBe(false)
})
test('reducer should throw error because action type is incorrect', () => {
    //data
    const state: StateType = {
        collapsed: true
    }
    //action


    //expection
    expect(() => {reducer(state, {type:'FAKE_TYPE'})}).toThrowError()
})