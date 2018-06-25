const queryString = search => {
    const qs = require('query-string');
    return qs.parse(search) || {};
};

export const buildParams = (search, modifications) => {
    const params = { 
        ...queryString(search),
        ...modifications
    }
    const query = [];
    if (params.q) {
        query.push(`like_name=${params.q}`);
    }
    if (params.page) {
        query.push(`page[number]=${params.page}`);
    }
    return query.join("&");
}

export const fetchWeaponsAsync = async (queryParams) => {
    const query = queryParams ? `?${queryParams}` : "";
    const content = await fetch(`/api/weapons${query}`);
    const json = await content.json();
    return json;
}