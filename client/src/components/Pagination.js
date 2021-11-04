import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  text-align      : center;
  margin          : 20px auto;
  padding         : 10px 0px;
`;

const PageLi = styled.li`
  display         : inline-block;
  font-size       : 17px;
  font-weight     : 600;
  margin          : 3px;
  padding         : 5px;
  width           : 25px;
  height          : 25px;
  color           : rgba(252, 96, 32, 1);
  background-color: rgba(252, 96, 32, 0.25);
  border-radius   : 50%;
  cursor          : pointer;
  &:hover{
    cursor          : pointer;
    color           : white;
    background-color: rgba(252, 96, 32, 1);
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <PageUl>
        {pageNumbers.map(number => (
        <PageLi key={number} onClick={() => paginate(number)}>
          {number}
        </PageLi>
        ))}
      </PageUl>
    </div>
  );
};

export default Pagination;