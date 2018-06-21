import React, { Component } from 'react';

import WithLoading from './with-loading';
import Loading from './loading';
import WeaponResults from './results';

import WeaponModel from './weapon-model';

import './styles.css'

const WeaponResultsWithLoading = WithLoading(Loading, WeaponResults);

class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            weapons: [],
            paginationInfo: {}
        }
    }

    async _fetchWeapons(params) {
        const apiParams = this._buildApiParams();
        return await fetch(`/api/weapons?${apiParams}`);
    }

    _readWeapons(weapons) {
        return weapons.map(weapon => { 
            return new WeaponModel({
                ...weapon.attributes,
                id: weapon.id
            });
        })
    }

    _readPaginationInfo(links) {
        const selfUrl=decodeURIComponent(links.self);
        const lastUrl=decodeURIComponent(links.last);
        return {
            hasPrev: !!links.prev,
            hasNext: !!links.next,
            page: this._extractQueryParamValue(selfUrl, "page\\[number\\]") || 1,
            numOfPages: this._extractQueryParamValue(lastUrl, "page\\[number\\]") || 1
        }
    }

    _buildApiParams() {
        const qs = require('query-string');
        const params = qs.parse(window.location.search);
        const query = [];
        if (params.q) {
            query.push(`like_name=${params.q}`);
        }
        if (params.page) {
            query.push(`page[number]=${params.page}`);
        }
        return query.join("&");
    }

    _extractQueryParamValue(url, key) {
        let value = null;

        if (url) {
            const pattern = new RegExp(key + "=(\\d*)");
            const matches = url.match(pattern);
            value = (matches && matches.length >= 2) ? parseInt(matches[1], 10) : null;
        }

        return value;
    }
    

    componentDidMount() {
        this._fetchWeapons()
        .then(response => {
            return response.json();
        })
        .then(results => {
            const paginationInfo = this._readPaginationInfo(results.links);
            this.setState({
                loading: false, 
                weapons: this._readWeapons(results.data),
                paginationInfo: paginationInfo
            });
        })
    }

    render() {
        return (
            <WeaponResultsWithLoading 
                isLoading={this.state.loading}
                weapons={this.state.weapons}
                paginationInfo={this.state.paginationInfo}/>
        )
    }
};

export default Weapons;
