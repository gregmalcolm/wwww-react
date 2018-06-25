import PropTypes from 'prop-types'
import React from 'react';

import './styles.css';
import './enchanted.css';

const WeaponsResultsItem = ({weapon, onToggleEnchantment}) => (
    <li className={`search-result ${weapon.enchanted ? "enchanted" : ""}`}>
        <div className="search-details">
            <h3 className="result-details__title-header">
                {weapon.name}
            </h3>
            <div className="search-result__enchanted">
                <label>Add enchantment
                    <input 
                        className="enchantment-checkbox" 
                        type="checkbox"
                        defaultChecked={weapon.enchanted}
                        onChange={(e) => onToggleEnchantment(weapon) }
                    />
                        
                </label>
            </div>
            <img className="search-result__image" 
                src={weapon.imageUrl} alt={weapon.name} />
            <dl className="result_details__info__specifics">
                <dt>Costs:</dt>
                <dd>{weapon.costInCoins()} 
                    <span className={`currency-${weapon.costCurrency()}`}> {weapon.costCurrency()}</span>
                </dd>
                <dt>Damage:</dt>
                <dd>{weapon.damage}</dd>

                <dt>Range:</dt>
                <dd>{weapon.rangeText()}</dd>

                <dt>Weight:</dt>
                <dd>{weapon.weight} lb</dd>
            </dl>

            <button className="buy-button" type="button">Buy!</button>
        </div>
    </li>
)

WeaponsResultsItem.propTypes = {
    weapon: PropTypes.object.isRequired,
    onToggleEnchantment: PropTypes.func.isRequired
}

export default WeaponsResultsItem;


