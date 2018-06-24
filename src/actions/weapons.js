import WeaponsAction from '../constants/weapons';

import { fetchWeaponsAsync, buildParams } from '../helpers/weapons/ajax'

export const fetchWeapons = (history) => dispatch => {
    const params = buildParams(history.location.search);
    return fetchWeaponsAsync(params)
        .then((response) =>
            dispatch({
                type: WeaponsAction.FETCHED_WEAPONS,
                data: response.data,
                links: response.links
            })
        );
}

export const changePage = (page) => dispatch => {
    console.log("changePage");
    return dispatch({});
    // fetchWeaponsAsync(queryParams)
    //     .then((results) =>
    //         dispatch({
    //             type: WeaponsAction.FETCHED_WEAPONS,
    //             state: {
    //                 isLoading: false,
    //                 weapons: getWeapons(results.data),
    //                 paginationInfo: getPaginationInfo(results.links)
    //             }
    //         })
    //     )    
}

export const toggleEnchantment = () => dispatch => {
    console.log("toggleEnhancement");
    return dispatch({});
}
