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

export const toggleEnchantment = (weaponId, enchanted) => ({
    type: WeaponsAction.TOGGLE_ENHANCEMENT,
    weaponId: weaponId,
    enchanted: enchanted
})