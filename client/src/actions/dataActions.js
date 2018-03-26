export const fetchSuppliers = () => {
    return dispatch => {
        dispatch(requestSuppliers());
        dispatch(getSuppliers());
    }
}

const getSuppliers = () => {
    return dispatch => {
        fetch('http://retailportal/api/suppliers')
        .then(res => {
            if(res.ok){
                res.json().then((data)=>{
                    dispatch(receivedSuppliers(data));
                });
            }
        })
        .catch(err=>console.error(err));
    }
}

const requestSuppliers = () => (
    {type: 'REQUEST_SUPPLIERS'}
)

const receivedSuppliers = (payload) => (
    {type: 'RECEIVED_SUPPLIERS', payload}
)