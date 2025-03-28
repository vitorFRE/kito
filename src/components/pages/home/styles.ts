import styled from "styled-components";
import { fonts } from "../../../styles/fonts";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${fonts.Geist};
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
`;
