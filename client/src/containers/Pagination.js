import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  float						:	left;
  list-style			: none;
  text-align			:	center;
  border-radius		:	3px;
  padding					:	1px;
	color						:	#fc6020;
  border-top			:	3px solid #fc6020;
  border-bottom		:	3px solid #fc6020;
  background-color: white;
`;

const PageLi = styled.li`
  display					:	inline-block;
  font-size				:	17px;
  font-weight			:	600;
  padding					:	5px;
  border-radius		:	5px;
  width						:	25px;
  &:hover{
    cursor						:	pointer;
    color							:	white;
    background-color	:	#263A6C;
  }
  &:focus::after{
    color							:	white;
    background-color	:	#263A6C;
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