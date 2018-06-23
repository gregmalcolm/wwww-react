import React, { Component } from 'react';

import WithLoading from '../with-loading';
import Loading from '../loading';
import WeaponResults from '../results';

import WeaponModel from '../weapon-model';

const WeaponResultsWithLoading = WithLoading(Loading, WeaponResults);

class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            weapons: [],
            paginationInfo: {}
        }

        this.changePage = this.changePage.bind(this)
        this.toggleEnchantment = this.toggleEnchantment.bind(this)
    }

    _loadWeapons() {
        this.setState({loading: true});
        this._fetchWeapons()
        .then(response => {
            return response.json();
        })
        .then(results => {
            const paginationInfo = this._readPaginationInfo(results.links);
            if (results.data) {
                this.setState({
                    loading: false, 
                    weapons: this._readWeapons(results.data),
                    paginationInfo: paginationInfo,
                });    
            }
        })
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
        const params = this._queryString();
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

    _queryString() {
        const qs = require('query-string');
        return qs.parse(this._location().search) || {};
    };

    _history() {
        return this.props.history;
    }

    _location() {
        return this._history().location;
    }

    componentDidMount() {
        this._loadWeapons();
    }

    changePage(page) {
        const qs = this._queryString();
        qs.page = page;

        const anchor = Object.entries(qs)
            .map(([key, val]) => 
                `${key}=${val}`
            ).join('&');
        
        const baseUrl = this._location().pathname;

        this._history().push(`${baseUrl}?${anchor}`);
        this._loadWeapons();
    }

    toggleEnchantment(e, weapon) {
        let stateWeapon = this.state.weapons.find(w => w.id === weapon.id);
        stateWeapon.enchanted = e.target.checked;

        this.setState({weapons: this.state.weapons});
    }

    render() {
        return (
            <WeaponResultsWithLoading 
                isLoading={this.state.loading}
                weapons={this.state.weapons}
                paginationInfo={this.state.paginationInfo}
                onChangePage={this.changePage}
                onToggleEnchantment={this.toggleEnchantment}
                {...this.props}
            >
            </WeaponResultsWithLoading>
        )
    }
};

export default Weapons;
