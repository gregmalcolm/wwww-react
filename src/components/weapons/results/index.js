import PropTypes from 'prop-types'
import React from 'react';
import WeaponsPagination from '../pagination';
import WeaponsResultsItem from '../result-item';

import './styles.css';

const WeaponsResults = (props) => {
    const {weapons} = props;

    const renderResults = ({
        weapons, 
        paginationInfo, 
        location, 
        onChangePage, 
        onToggleEnchantment
    }) => (
        <section className="weapon-results">
            <header className="weapons-header">
                <WeaponsPagination 
                    paginationInfo={paginationInfo}                 
                    location={location}
                    onChangePage={onChangePage}
                />
            </header>
            <ul className="weapons-list">
                { weapons.map(weapon =>
                    <WeaponsResultsItem 
                        key={weapon.id} 
                        weapon={weapon}
                        onToggleEnchantment={onToggleEnchantment}/>
                )}
                </ul>
            <footer className="weapons-footer">
                <WeaponsPagination 
                    paginationInfo={paginationInfo}
                    location={location}
                    onChangePage={onChangePage}
                    />
            </footer>
        </section>            
    ); 
        
    const renderNoResults = () => (
        <div className="critical-failure">
            <img src="/images/critical-failure.jpg" alt="critical-failure" />
            <div>Nope, don't have any of those</div>
        </div>
    );
    
    if (weapons && weapons.length) {
        return renderResults(props);
    } else {
        return renderNoResults();
    }
}

WeaponsResults.propTypes = {
    weapons: PropTypes.array.isRequired,
    paginationInfo: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onChangePage: PropTypes.func.isRequired,
    onToggleEnchantment: PropTypes.func.isRequired
}

export default WeaponsResults;