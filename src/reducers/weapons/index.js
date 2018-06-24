import WeaponsAction from '../../constants/weapons';

const weaponsReducer = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case WeaponsAction.FETCHED_WEAPONS:
            return action.state;
        default:
            return state;
    }
};

export default weaponsReducer;