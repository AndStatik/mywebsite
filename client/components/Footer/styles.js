import styled from "styled-components";
import { v } from "../../styles/variables";

export const SFooter = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: fit-content;
  background-color: ${({ theme }) => theme.bg};
  background-image: linear-gradient(
		to right,
		${({ theme }) => theme.bg2} 0%,
		rgba(0, 0, 0, 0) 10%,
		rgba(0, 0, 0, 0) 90%,
		${({ theme }) => theme.bg2} 100%
	);
  height: 50px;
  margin: 25px 0 -16px 0;
`;

export const SFootLeft = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: row;
  width: inherit;
  padding: 15px;
  height: 50px;
  p {
    margin-right: 140px;
    font-family: inherit;
    font-size: 14px;
    color: ${({ theme }) => theme.text};
  }
`;

export const SFootRight = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: row;
  width: inherit;
  padding: 15px;
  height: 50px;
  #sns {
    display: flex;
    align-items: center;
  }
`;