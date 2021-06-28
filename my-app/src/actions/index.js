import axios from "axios";
import { getState } from 'redux'

const getCredits = (credits) => {
    return {
        type: 'GET_CREDITS',
        payload: credits
    }
}

export const getCreditsThunk = () => async dispatch => {
	try {
		let res = await axios.get('https://moj-api.herokuapp.com/credits');
		//res.data will be whole object returned by api endpoint
		//payload is res.data.people
		console.log("im crying", this);
		dispatch(getCredits(res.data));


	} catch(err) {
		console.error(err);
	}
};