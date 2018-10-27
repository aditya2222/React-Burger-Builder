import reducer from './auth'
import * as actions from '../actions/actionTypes'

describe("Auth Reducer", () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

    it('should store token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        },
            {
                type: actions.AUTH_SUCCESS,
                idToken: 'sometoken',
                userId: 'sometoken'
            }
        )).toEqual({
            token: 'sometoken',
            userId: 'sometoken',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })

})