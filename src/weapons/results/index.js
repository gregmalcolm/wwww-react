import PropTypes from 'prop-types'
import React from 'react';
import WeaponPagination from '../pagination';
import WeaponResultItem from '../result-item';

import './styles.css';

const WeaponResults = ({weapons, paginationInfo, location, onChangePage}) => (
    <section className="weapon-results">
        <header className="weapons-header">
            <WeaponPagination 
                paginationInfo={paginationInfo}                 
                location={location}
                onChangePage={onChangePage}
            />
        </header>
        <ul className="weapons-list">
            { weapons.map(weapon =>
                <WeaponResultItem 
                    key={weapon.id} 
                    weapon={weapon}/>
            )}
            </ul>
        <footer className="weapons-footer">
            <WeaponPagination 
                paginationInfo={paginationInfo}
                location={location}
                onChangePage={onChangePage}
                />
        </footer>
    </section>            
)

WeaponResults.propTypes = {
    weapons: PropTypes.array.isRequired,
    paginationInfo: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onChangePage: PropTypes.func.isRequired
}

export default WeaponResults;