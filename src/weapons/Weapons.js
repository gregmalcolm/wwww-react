import React, { Component } from 'react';

import WithLoading from './with-loading';
import WeaponsList from './weapons-list';

const ListWithLoading = WithLoading(WeaponsList);

class Weapons extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            weapons: {}
        }
    }

    async _fetchWeapons(params) {
        //const apiParams = this._buildApiParams(params);
        //const response = await fetch(`/api/weapons?${apiParams}`);
        const response = await fetch(`/api/weapons`);

        return response.json();
    }

    componentDidMount() {
        this._fetchWeapons()
        .then(results => {
            this.setState({loading: false, weapons: results});
        })
    }

    render() {
        return (
            <ListWithLoading 
                isLoading={this.state.loading}
                weapons={this.state.weapons}/>
        )
    }
};

export default Weapons;
