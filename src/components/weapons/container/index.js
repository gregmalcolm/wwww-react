
import PropTypes from 'prop-types'
import React, {Component} from 'react';

import WithLoading from '../with-loading';
import { connect } from 'react-redux';

import Loading from '../loading';
import WeaponsResults from '../results';

import { fetchWeapons } from '../../../actions/weapons'
import { buildParams } from '../../../helpers/weapons/ajax'

const WeaponsResultsWithLoading = WithLoading(Loading, WeaponsResults);

class WeaponsContainer extends Component {
    componentDidMount() {
        const apiParams = buildParams(this.props.history);
        this.props.dispatch(fetchWeapons(apiParams));
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
    paginationInfo: PropTypes.object.isRequired
}

WeaponsContainer.defaultProps = {
    isLoading: true,
    weapons: [],
    paginationInfo: {}
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        weapons: state.weapons,
        paginationInfo: state.paginationInfo
    }
};

//const mapDispatchToProps = null;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(WeaponsContainer);

export default connect(
    mapStateToProps
)(WeaponsContainer);

