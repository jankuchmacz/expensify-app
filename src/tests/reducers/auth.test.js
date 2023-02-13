import authReducer from "../../reducers/auth";

test('should set default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
})
test('should set uid in state after login', ()=>{
    const uid=123;
    const action = {
        type: 'LOGIN',
        uid: uid
    }
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid:uid
    })
})
test('should unset uid in state after logout', ()=>{
    const uid=123;
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid: uid}, action);
    expect(state).toEqual({})
})