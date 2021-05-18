import styled from 'styled-components';

export const Logo = styled.h1`
  background:var(--blue);
  font-size:4rem;
  margin-left:2rem;
  position:relative;
  z-index: 2;
  transform:skew(-7deg);
  a{
    color:white;
    text-decoration:none;
    text-transform:uppercase;
    padding:0.5rem 1rem;
  }
`
export const HeaderStyles = styled.header`
  .bar{
    border-bottom:10px solid black;
    display:grid;
    grid-template-columns:auto 1fr;
    justify-content:space-between;
    align-items:center;
  }
  .sub-bar{
    display:grid;
    grid-template-columns:1fr auto;
    border-bottom: 1px solid black
  }
`