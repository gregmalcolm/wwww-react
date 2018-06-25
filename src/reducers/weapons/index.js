import WeaponsAction from '../../constants/weapons';

import { getWeapons, getPaginationInfo } from '../../helpers/weapons/serialization'

const weaponsReducer = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case WeaponsAction.CHANGING_PAGE:
            return { isLoading: true};
        case WeaponsAction.FETCHED_WEAPONS:
        case WeaponsAction.CHANGED_PAGE:
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