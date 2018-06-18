import React from 'react';
import WeaponsList from '../weapons-list';

export default (Component) => {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return (
                <section className="weapon-results">
                <div className="loading">
                    <img src="/images/loading.png" alt="Loading" className="desktop-inline"/>
                    <span className="large-mobile-inline">Roll for perception...</span>
                    <img src="/images/loading.png" alt=""/>
                </div>
                </section>
            )
        } else {
            return (
                <WeaponsList />
            )
        }
    }
}