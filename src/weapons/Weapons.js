import React, { Component } from 'react';

import WithLoading from './WithLoading';
import Loading from './loading';
import WeaponResults from './weapon-results';

import WeaponModel from './weapon-model';

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
        //const apiParams = this._buildApiParams(params);
        //const response = await fetch(`/api/weapons?${apiParams}`);
        return await fetch(`/api/weapons`);
    }

    _readWeapons(weapons) {
        return weapons.map(weapon => { 
            return new WeaponModel({
                ...weapon.attributes,
                id: weapon.id
            });
        })
    }

    componentDidMount() {
        this._fetchWeapons()
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
