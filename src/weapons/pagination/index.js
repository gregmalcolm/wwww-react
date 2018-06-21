import PropTypes from 'prop-types';
import React  from 'react';

import './styles.css';

const WeaponPagination = ({paginationInfo={}}) => {
    const query = () => {
        const qs = require('query-string');
        return qs.parse(window.location.search) || {};
    };

    // const pageLink = page => {
    //     const qs = query();
    //     qs.page = page;

    //     const anchor = Object.entries(qs).map(([key, val]) => 
    //         `${key}=${val}`
    //     ).join('&');

    //     return `${window.location.pathname}?${anchor}`;
    // };

    const searchText = query.q || "";   
    const page = query.page || 1;

    const btnPrevDisabled = !paginationInfo.hasPrev ? "btn-disabled" : "";
    const btnNextDisabled = !paginationInfo.hasNext ? "btn-disabled" : "";

    return (
        <div className="results-info">
            <div className="stats">
                Search results for "{searchText}"
            </div>
            <div className="btn-group page-buttons">
                <button className={`btn btn-prev ${btnPrevDisabled}`}
                    disabled={!paginationInfo.hasPrev}>
                    <img src="/images/prev.png" alt="prev" />
                </button>
                <button className={`btn btn-next ${btnNextDisabled}`} 
                    disabled={!paginationInfo.hasNext}>
                    <img src="/images/next.png" alt="next" />
                </button>
            </div>
            <div className="page-pos">Page {page} of {paginationInfo.numOfPages}</div>
        </div>
    );
}
WeaponPagination.propTypes = {
    paginationInfo: PropTypes.object
}

export default WeaponPagination;