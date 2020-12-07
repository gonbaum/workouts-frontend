import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const propTypes = {
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired
}

const defaultProps = {
  totalPosts: 1,
  pageSize: 20,
}

const Pagination = ({   totalPosts, currentPage, handlePageChange, pageSize   }) => {

  // Logic pager
  
  const getPager = (totalPosts, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1

    // default page size is 10
    pageSize = pageSize || 20

    // calculate total pages
    let totalPages = Math.ceil(totalPosts / pageSize)

    let startPage, endPage
    if (totalPages <= 6) {
      // less than 10 total pages so show all
      startPage = 1
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 4) {
        startPage = 1
        endPage = 6
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 5
        endPage = totalPages;
      } else {
        startPage = currentPage - 2
        endPage = currentPage + 2
      }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize
    var endIndex = Math.min(startIndex + pageSize - 1, totalPosts - 1)

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalPosts,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  };

  const pager = getPager(totalPosts, currentPage, pageSize);

  // Disable style
  const disabled = {
    pointerEvents: "none",
  };

  if (pager.totalItems < 20) {
    return <div></div>;
  }
  return (
    <PaginationContainer>
    <div className="row">
        <p>
          Page {pager.currentPage} of {pager.totalPages} ({pager.totalItems}{" "}
          workouts)
        </p>
        <ul className="pagination">
          <li
            style={pager.currentPage === 1 ? disabled : {}}
            className="page-item"
          >
            <a
              onClick={() => handlePageChange(1)}
              href="!#"
              className="page-link"
            >
              First
            </a>
          </li>
          <li
            style={pager.currentPage === 1 ? disabled : {}}
            className="page-item"
          >
            <a
              onClick={() => handlePageChange(pager.currentPage - 1)}
              href="!#"
              className="page-link"
            >
              Previous
            </a>
          </li>
          {pager.pages.map((number) => (
            <li
              key={number}
              style={number === pager.currentPage ? disabled : {}}
              className={
                pager.currentPage === number ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => handlePageChange(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
          <li
            style={currentPage === pager.totalPages ? disabled : {}}
            className="page-item"
          >
            <a
              onClick={() => handlePageChange(currentPage + 1)}
              href="!#"
              className="page-link"
            >
              Next
            </a>
          </li>
          <li
            style={currentPage === pager.totalPages ? disabled : {}}
            className="page-item"
          >
            <a
              onClick={() => handlePageChange(pager.totalPages)}
              href="!#"
              className="page-link"
            >
              Last
            </a>
          </li>
        </ul>
    </div>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div `

.row {
    
    display:flex;  
    padding: 10px;
    align-center: center;
    flex-direction: column;
}

`

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
