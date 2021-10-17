import React from "react";
import styled from "styled-components";

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Nums>
        {pageNumbers.map(num => (
          <li key={num}>
            <a onClick={() => paginate(num)} href='!#'>{num}</a>
          </li>
        ))}
      </Nums>
    </Container>
  );
}

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

const Nums = styled.div`
  display: flex;
  list-style: none;

  li {
    width: 30px;
    height: 30px;
    margin-right: 10px;

    border-radius: 8px;
    text-align: center;
    line-height: 1.8;
    font-weight: 600;
    background-color: #3284FC;
  }

  a {
    color:#fff;
    text-decoration: none;
  }
`;

