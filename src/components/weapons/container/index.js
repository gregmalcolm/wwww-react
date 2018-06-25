
import PropTypes from 'prop-types'
import React, {Component} from 'react';
import { connect } from 'react-redux';

import WithLoading from '../with-loading';
import Loading from '../loading';
import WeaponsResults from '../results';

import { fetchWeapons, changePage, toggleEnchantment } from '../../../actions/weapons'

const WeaponsResultsWithLoading = WithLoading(Loading, WeaponsResults);

class WeaponsContainer extends Component {
    componentDidMount() {
        this.props.onFetchWeapons(this.props.history);
    }

    render() {
        const {isLoading, weapons, paginationInfo} = this.props;

        return (
            <WeaponsResultsWithLoading 
                isLoading={isLoading}
                weapons={weapons}
                paginationInfo={paginationInfo}
                {...this.props}
            />);
    }
}

WeaponsContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    weapons: PropTypes.array.isRequired,
    paginationInfo: PropTypes.object.isRequired,
    onFetchWeapons: PropTypes.func,
    onChangePage: PropTypes.func,
    onToggleEnchantment: PropTypes.func
}

WeaponsContainer.defaultProps = {
    isLoading: true,
    weapons: [],
    paginationInfo: {}
}

const mapStateToProps = ({isLoading, weapons, paginationInfo}) => {
    return {
        isLoading: isLoading,
        weapons: weapons,
        paginationInfo: paginationInfo
    }
};

const mapDispatchToProps = dispatch => ({
    onFetchWeapons(history) { 
        dispatch(fetchWeapons(history))
    },
    onChangePage(history, page) { 
        dispatch(changePage(history, page))
    },
    onToggleEnchantment(weaponId, enchanted) {
        dispatch(toggleEnchantment(weaponId, enchanted))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeaponsContainer);


