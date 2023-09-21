import styled from '@emotion/styled';

export const Formulario = styled.form`
  width: 95%;
  max-width: 600px;
  margin: 5rem auto 0 auto;

  fieldset {
    font-size: 2rem;
    padding: 2rem;
    border: 1px solid #e1e1e1;
    margin: 2rem 0;
  }
`;

export const GroupForm = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  label {
    font-size: 1.8rem;
    flex: 0 0 150px;    // flex: flex-grow | flex-shrink | flex-basis;
  }

  input,
  textarea {
    padding: 1rem;
    flex: 1;    // flex: flex-grow; (Toma el resto del tamaño)
  }
  textarea {
    height: 400px;
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
  margin: 2rem 0;

  &:hover {
    cursor: pointer;
  }
`;

export const Error = styled.p`
  color: #fff;
  background-color: red;
  font-size: 1.4rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem;
  margin: 2rem 0;
`;