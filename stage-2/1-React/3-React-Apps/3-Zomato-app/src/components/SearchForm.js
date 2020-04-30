import React from 'react';

const SearchForm = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <div className="alert alert-info">
            <input
                placeholder="Search by city"
                className="form-control"
                value={term}
                onChange={e => onTermChange(e.target.value)}
                onKeyUp={e => e.which === 13 ? onTermSubmit() : null}
            />
        </div>
    );
};

export default SearchForm;