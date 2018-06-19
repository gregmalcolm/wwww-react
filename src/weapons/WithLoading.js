import React from 'react';

export default (Loading, Loaded) => {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return (
                <Loading />
            )
        } else {
            return (
                <Loaded {...props}/>
            )
        }
    }
}