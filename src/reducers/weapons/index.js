import WeaponsAction from '../../constants/weapons';
import WeaponModel from '../../components/weapons/weapon-model'

import { getWeapons, getPaginationInfo } from '../../helpers/weapons/serialization'

const weaponsReducer = (state = {}, action={ type: null }) => {
    switch (action.type) {
        case WeaponsAction.CHANGING_PAGE:
            return { ...state, isLoading: true};
        case WeaponsAction.FETCHED_WEAPONS:
        case WeaponsAction.CHANGED_PAGE:
            return {
                isLoading: false,
                weapons: getWeapons(action.data),
                paginationInfo: getPaginationInfo(action.links)                                
            }
        case WeaponsAction.TOGGLE_ENHANCEMENT:
            return {
                ...state, 
                weapons: state.weapons.map(weapon => (
                    weapon.id === action.weaponId 
                        ? new WeaponModel({ ...weapon.attributes(), enchanted: action.enchanted})
                        : weapon 
                ))
            }
        default:
            return state;
    }
};


export default weaponsReducer;