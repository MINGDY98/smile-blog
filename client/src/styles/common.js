import styled from "styled-components";

export const Spacer = styled.div`
  flex-grow   : 1;
`

export const Padding = styled.div`
  padding-top : 15px;
`

export const PrimaryButton = styled.button`
  font-weight     : 600;
  font-size       : 14px;
  background-color: #46508c;
  border          : 1px solid #DDD;
  padding         : 5px 15px;
  border-radius   : 5px;
  cursor          : pointer;
  color           : white;
  &:hover {
  background-color: #fc6020;
}
`