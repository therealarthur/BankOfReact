import axios from "axios";

const getCredits = (credits) => {
    return {
        type: 'GET_CREDITS',
        payload: credits
    }
}
const addToAccount = (val) => {
    return {
        type: 'ADD_CREDITS',
        payload: val
    }
}
const subFromAccount = (val) => {
    return {
        type: 'REMOVE_CREDITS',
        payload: val
    }
}

export const getCreditsThunk = () => async dispatch => {
	try {
		let res = await axios.get('https://moj-api.herokuapp.com/credits');
		//res.data will be whole object returned by api endpoint
		//payload is res.data.people
		dispatch(getCredits(res.data));


	} catch(err) {
		console.error(err);
	}
};

export const addAccountThunk = (data) => async dispatch => {
	try {
		dispatch(addToAccount(data));
	} catch(err) {
		console.error(err);
	}
};

export const subAccountThunk = (data) => async dispatch => {
	try {
		dispatch(subFromAccount(data));
	} catch(err) {
		console.error(err);
	}
};