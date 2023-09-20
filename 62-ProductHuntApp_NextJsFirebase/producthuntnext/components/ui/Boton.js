import styled from '@emotion/styled';

// Creamos componente para pasar props
const Boton = styled.a`
  color: ${props => props.bgColor ? 'white' : '#000'};
  background-color: ${props => props.bgColor ? '#da552f' : 'white'};
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: .8rem 2rem;
  border: 1px solid #d1d1d1;
  // margin-right: 1rem;
  margin: 2rem auto;
  display: block;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Boton;