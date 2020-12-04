export default function(state = '', action) {
    switch(action.type){
        case 'SUM':
        return action.payload[0];

        default:
            return state
    }
}