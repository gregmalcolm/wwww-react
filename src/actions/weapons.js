import WeaponsAction from '../constants/weapons';

import { fetchWeaponsAsync, buildParams } from '../helpers/weapons/ajax'

const applyFetchedWeapons = (response) => ({
    type: WeaponsAction.FETCHED_WEAPONS,
    data: response.data,
    links: response.links
});

const applyChangingPage = (response) => ({
    type: WeaponsAction.CHANGING_PAGE
});

const applyChangedPage = (response) => ({
    type: WeaponsAction.CHANGED_PAGE,
    data: response.data,
    links: response.links
});

const applyToggleEnhancement = (response) => ({
    type: WeaponsAction.TOGGLE_ENHANCEMENTs
});

export const fetchWeapons = (history) => dispatch => {
    const params = buildParams(history.location.search);
    return fetchWeaponsAsync(params)
        .then(response => dispatch(applyFetchedWeapons(response)));
};

export const changePage = (history, page) => dispatch => {
    const params = buildParams(history.location.search, {page: page});
    dispatch(applyChangingPage());
    return fetchWeaponsAsync(params)
        .then(response => dispatch(applyChangedPage(response)));
};

// toggleEnchantment(e, weapon) {
//     let stateWeapon = this.state.weapons.find(w => w.id === weapon.id);
//     stateWeapon.enchanted = e.target.checked;

//     this.setState({weapons: this.state.weapons});
// }

export const toggleEnchantment = (e, weapon) => dispatch => {
    let stateWeapon = this.state.weapons.find(w => w.id === weapon.id);
    stateWeapon.enchanted = e.target.checked;
    
    return dispatch(applyToggleEnhancement)
};
