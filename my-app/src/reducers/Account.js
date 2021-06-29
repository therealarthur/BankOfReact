
const accountReducer = (state = {accountBalance: 0, credits: []},action) => {
    switch(action.type){
        case 'ADD_CREDITS':
            return {
                accountBalance: state.accountBalance += action.payload.amount,
                credits: this.credits.push(action.payload) 
            }
        case 'REMOVE_CREDITS':
            return state -= action.payload
        default:
            return state;
    }
}

export default accountReducer;