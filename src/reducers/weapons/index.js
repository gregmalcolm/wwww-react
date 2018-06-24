const weaponsReducer = (state = {}, action={ type: null }) => {
    switch (action.type) {
        default:
            return {
                isLoading: true,
                weapons: [],
                paginationInfo: {}
            }
    }
};

export default weaponsReducer;