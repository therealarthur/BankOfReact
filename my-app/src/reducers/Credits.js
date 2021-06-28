
const creditsReducer = (state = {credits: []},action) => {
    switch(action.type){
        case 'GET_CREDITS':
            return{
                credits: action.payload
            }
        default:
            return state;
    }
}

export default creditsReducer;