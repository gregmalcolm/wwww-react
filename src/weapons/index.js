import React, { Component } from 'react';

import WithLoading from './with-loading';
import Loading from './loading';
import WeaponResults from './results';

import WeaponModel from './weapon-model';

import './styles.css'
import './weapons-paging.css';

const WeaponResultsWithLoading = WithLoading(Loading, WeaponResults);

class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            weapons: []
        }
    }

    async _fetchWeapons(params) {
        const apiParams = this._buildApiParams(params);
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

    _buildApiParams(params) {
        const query = [];
        if (params.q) {
            query.push(`like_name=${params.q}`);
        }
        if (params.page) {
            query.push(`page[number]=${params.page}`);
        }
        return query.join("&");
    }    

    componentDidMount() {
        this._fetchWeapons({})
        .then(response => {
            return response.json();
        })
        .then(results => {
            this.setState({
                loading: false, 
                weapons: this._readWeapons(results.data)
            });
        })
    }

    render() {
        return (
            <WeaponResultsWithLoading 
                isLoading={this.state.loading}
                weapons={this.state.weapons}/>
        )
    }
};

export default Weapons;
