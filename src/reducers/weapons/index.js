import WeaponsAction from '../../constants/weapons';

import { getWeapons, getPaginationInfo } from '../../helpers/weapons/serialization'

const weaponsReducer = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case WeaponsAction.FETCHED_WEAPONS:
            return {
                isLoading: false,
                weapons: getWeapons(action.data),
                paginationInfo: getPaginationInfo(action.links)                                
            }
        default:
            return state;
    }
};

export default weaponsReducer;