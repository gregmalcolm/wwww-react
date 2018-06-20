import PropTypes from 'prop-types'
import React from 'react';
import WeaponResultItem from './result-item';

import './styles.css';

const WeaponResults = ({weapons=[]}) => (
    <section className="weapon-results">
        <header className="weapons-header">
        </header>
        <ul className="weapons-list">
            { weapons.map(weapon =>
                <WeaponResultItem key={weapon.id} weapon={weapon}/>
            )}
            </ul>
        <footer className="weapons-footer">
        </footer>
    </section>            
)

WeaponResults.propTypes = {
    weapons: PropTypes.array
}

export default WeaponResults;