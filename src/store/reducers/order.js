import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../shared/utility.js'

const initialState = {

	orders: [],
	loading: false,
	purchased: false,

}

const purchaseInit = (state, action) => {
	return updateObject(state, {
		purchased: false
	})
}

const purchaseBurgerStart = (state, action) => {
	return updateObject(state, {
		loading: true
	})
}

const purchaseBurgerSuccess = (state, action) => {
	const newOrder = updateObject(action.orderData, { id: action.orderId })
	return updateObject(state, {
		loading: false,
		purchased: true,
		// contact returns a new array
		orders: state.orders.concat(newOrder)
	});
}

const purchaseBurgerFail = (state, action) => {
	return updateObject(state, {
		loading: false
	});
}

const reducer = (state = initialState, action) => {

	switch (action.type) {

		case actionTypes.PURCHASE_INIT:
			return purchaseInit(state, action)

		case actionTypes.PURCHASE_BURGER_START:
			return purchaseBurgerStart(state, action)


		case actionTypes.PURCHASE_BURGER_SUCCESS:
			return purchaseBurgerSuccess

		case actionTypes.PURCHASE_BURGER_FAIL:
			return purchaseBurgerFail(state, action)

		case actionTypes.FETCH_ORDERS_SUCCESS:
			return updateObject(state, {
				orders: action.orders,
				loading: false
			})
		case actionTypes.FETCH_ORDERS_FAIL:
			return updateObject(state, {
				loading: false

			});

		default:
			return state
	}

}


export default reducer