const suppliers = (state = {
    isFetching: false,
    items: []
},
action) => {
    switch(action.type){
        case 'REQUEST_SUPPLIERS':{
            return {...state, isFetching: true};
        }

        case 'RECEIVED_SUPPLIERS':{
            return {isFetching: false, items: [...action.payload]};
        }

        default: {
            return state;
        }
    }
}

export default suppliers;