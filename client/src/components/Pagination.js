import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  list-style			: none;
  text-align			:	center;
  padding					:	1px;
	color						:	#fc6020;
  margin          : 20px auto;
  padding         : 5px 0px;
  background-color: white;
`;

const PageLi = styled.li`
  display					:	inline-block;
  font-size				:	17px;
  font-weight			:	600;
  padding					:	5px;
  width						:	25px;
  height          : 25px;
  background-color: rgba(252, 96, 32, 0.25);
  color           : rgba(252, 96, 32, 1);
  border-radius   : 50%;
  cursor          : pointer;
  &:hover{
    cursor						:	pointer;
    color							:	white;
    background-color	:	rgba(252, 96, 32, 1);
  }
  &:focus::after{
    color							:	white;
    background-color	:	rgba(252, 96, 32, 1);
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after{
    border-radius			:	100%;
    color							:	white;
    background-color	:	#263A6C;
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
          <PageLi key={number}>
            <PageSpan onClick={() => paginate(number)}>
              {number}
            </PageSpan>
          </PageLi>
        ))}
      </PageUl>
    </div>
  );
};

export default Pagination;