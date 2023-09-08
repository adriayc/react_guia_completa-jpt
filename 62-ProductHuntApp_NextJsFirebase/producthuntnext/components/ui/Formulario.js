import styled from '@emotion/styled';

export const Formulario = styled.form`
  width: 95%;
  max-width: 600px;
  margin: 5rem auto 0 auto;
`;

export const GroupForm = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    font-size: 1.8rem;
    flex: 0 0 150px;    // flex: felx-grow | flex-shrink | flex-basis;
  }

  input {
    padding: 1rem;
    flex: 1;    // flex: flex-grow; (Toma el resto del tamaño)
  }
`;

export const InputSubmit = styled.input`
  width: 100%;
  color: #fff;
  background-color: var(--naranja);
  font-size: 1.8rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 1.5rem;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;