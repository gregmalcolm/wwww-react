import WeaponsAction from '../constants/weapons';

import { fetchWeaponsAsync } from '../helpers/weapons/ajax'

import WeaponModel from '../components/weapons/weapon-model'

const _extractQueryParamValue = (url, key) =>  {
    if (url) {
        const pattern = new RegExp(key + "=(\\d*)");
        const matches = url.match(pattern);
        return (matches && matches.length >= 2) ? parseInt(matches[1], 10) : null;
    } else {
        return null;
    }
}
const _readWeapons = (weapons) => (
    weapons.map(weapon => { 
        return new WeaponModel({
            ...weapon.attributes,
            id: weapon.id
        });
    })
)

const _readPaginationInfo = (links) => {
    const selfUrl=decodeURIComponent(links.self);
    const lastUrl=decodeURIComponent(links.last);
    return {
        hasPrev: !!links.prev,
        hasNext: !!links.next,
        page: _extractQueryParamValue(selfUrl, "page\\[number\\]") || 1,
        numOfPages: _extractQueryParamValue(lastUrl, "page\\[number\\]") || 1
    }
}

export const fetchWeapons = (queryParams) => dispatch =>
    fetchWeaponsAsync(queryParams)
        .then((results) =>
            dispatch({
                type: WeaponsAction.FETCHED_WEAPONS,
                state: {
                    isLoading: false,
                    weapons: _readWeapons(results.data),
                    paginationInfo: _readPaginationInfo(results.links)
                }
            })
        );
