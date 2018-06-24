import WeaponModel from '../components/weapons/weapon-model'

const extractQueryParamValue = (url, key) =>  {
    if (url) {
        const pattern = new RegExp(key + "=(\\d*)");
        const matches = url.match(pattern);
        return (matches && matches.length >= 2) ? parseInt(matches[1], 10) : null;
    } else {
        return null;
    }
}
export const getWeapons = (weapons) => (
    weapons.map(weapon => { 
        return new WeaponModel({
            ...weapon.attributes,
            id: weapon.id
        });
    })
)

export const getPaginationInfo = (links) => {
    const selfUrl = decodeURIComponent(links.self);
    const lastUrl = decodeURIComponent(links.last);
    return {
        hasPrev: !!links.prev,
        hasNext: !!links.next,
        page: extractQueryParamValue(selfUrl, "page\\[number\\]") || 1,
        numOfPages: extractQueryParamValue(lastUrl, "page\\[number\\]") || 1
    }
}
