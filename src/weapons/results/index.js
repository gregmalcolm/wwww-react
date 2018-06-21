import PropTypes from 'prop-types'
import React from 'react';
import WeaponPagination from '../pagination';
import WeaponResultItem from '../result-item';

import './styles.css';

const WeaponResults = ({weapons=[], paginationInfo={}}) => (
    <section className="weapon-results">
        <header className="weapons-header">
            <WeaponPagination paginationInfo={paginationInfo}/>
        </header>
        <ul className="weapons-list">
            { weapons.map(weapon =>
                <WeaponResultItem 
                    key={weapon.id} 
                    weapon={weapon}/>
            )}
            </ul>
        <footer className="weapons-footer">
            <WeaponPagination paginationInfo={paginationInfo}/>
        </footer>
    </section>            
)

WeaponResults.propTypes = {
    weapons: PropTypes.array,
    paginationInfo: PropTypes.object
}

export default WeaponResults;