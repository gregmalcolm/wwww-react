import PropTypes from 'prop-types';
import React  from 'react';

import './styles.css';

const WeaponsPagination = ({paginationInfo, location, onChangePage}) => {
    const query = () => {
        const qs = require('query-string');
        return qs.parse(location.search) || {};
    };

    const searchText = query().q || "";   

    const page = paginationInfo.page || 1;

    const btnPrevDisabled = !paginationInfo.hasPrev ? "btn-disabled" : "";
    const btnNextDisabled = !paginationInfo.hasNext ? "btn-disabled" : "";

    return (
        <div className="results-info">
            <div className="stats">
                Search results for "{searchText}"
            </div>
            <div className="btn-group page-buttons">
                <button className={`btn btn-prev ${btnPrevDisabled}`}
                    disabled={!paginationInfo.hasPrev}
                    onClick={()=>onChangePage(page - 1)}
                >
                    <img src="/images/prev.png" alt="prev" />
                </button>
                <button className={`btn btn-next ${btnNextDisabled}`} 
                    disabled={!paginationInfo.hasNext}
                    onClick={()=>onChangePage(page + 1)}
                >
                    <img src="/images/next.png" alt="next" />
                </button>
            </div>
            <div className="page-pos">Page {page} of {paginationInfo.numOfPages}</div>
        </div>
    );
}
WeaponsPagination.propTypes = {
    paginationInfo: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    onChangePage: PropTypes.func.isRequired
}

export default WeaponsPagination;