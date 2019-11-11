import React from 'react';
import PropTypes from 'prop-types';

const SortingWidget = ({ sortBy }) => {
  const handleOnClick = (e, key, direction) => {
    e.preventDefault();
    sortBy(key, direction);
  };

  return (
    <div className="sort-widget">
      <div className="widget-header">Sort Product:</div>
      <ul className="sort-button-list">
        <li><a href="#" className="sort-button"
          onClick={e => handleOnClick(e, 'name', 'asc')}
        >Product Name A-Z</a></li>
        <li><a href="#" className="sort-button"
          onClick={e => handleOnClick(e, 'name', 'desc')}
        >Product Name Z-A</a></li>
        <li><a href="#" className="sort-button"
          onClick={e => handleOnClick(e, 'basePrice', 'asc')}
        >Price Ascending</a></li>
        <li><a href="#" className="sort-button" onClick={e => handleOnClick(e, 'basePrice', 'desc')}
        >Price Descending</a></li>
      </ul>
    </div>
  );
};

SortingWidget.propTypes = {
  sortBy: PropTypes.func.isRequired
};

export default SortingWidget;
