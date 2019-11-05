import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IosArrowRoundBack from 'react-ionicons/lib/IosArrowRoundBack';
import IosArrowRoundForward from 'react-ionicons/lib/IosArrowRoundForward';
import './Pagination.css';

export default class Pagination extends Component {
  
  renderPageNumbers(pageCount) {
    let pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <li key={i} className="pagination-items">
          <a href="#"
            className={i === this.props.activePage ? 'pagination-link-active' : 'pagination-link'}
            onClick={e => {
              e.preventDefault;
              this.props.onPageNumClick(i);
            }}
            
          >{i < 10 ? i : '0' + i}</a>
        </li>
      );
    }
    return pageNumbers;
  }

  render() {
    return (
      <div className="pagination">
        <a className="pagination-btn" disabled href="#">
          <IosArrowRoundBack fontSize="42px" />
        </a>
        <ul className="pages-list">
          {this.renderPageNumbers(this.props.pageCount)}
        </ul>
        <a className="pagination-btn" href="#">
          <IosArrowRoundForward fontSize="42px" />
        </a>
      </div>
    );
  }
}

Pagination.propTypes = {
  onPageNumClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired
};