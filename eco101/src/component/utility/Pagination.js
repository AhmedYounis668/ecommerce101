import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({pagecount,onpress}) => {
    const handlePageClick=(data)=>{
onpress(data.selected+1)
    }

  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pagecount}
        previousLabel="<<"
        containerClassName={"pagination d-flex justify-content-center p-3 my-4 "}
        pageClassName={" page-item"}
        pageLinkClassName={"paginatebtn page-link"}
        previousClassName={" page-item"}
        nextClassName={" page-item"}
        previousLinkClassName={"page-link mx-1"}
        nextLinkClassName={"page-link mx-1"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        activeLinkClassName={"page-link"}
      />
  )
}

export default Pagination
