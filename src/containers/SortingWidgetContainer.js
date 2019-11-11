  
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortBy } from '../actions/products';
import SortingWidget from '../components/home/SortingWidget';

const SortingWidgetContainer = ({ sortBy }) => {
  return <SortingWidget sortBy={sortBy} />;
};

SortingWidgetContainer.propTypes = {
  sortBy: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  sortBy
};

export default connect(
  null,
  mapDispatchToProps
)(SortingWidgetContainer);