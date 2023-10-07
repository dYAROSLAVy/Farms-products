import styled from "styled-components";

const TextInput = styled.input`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 12px;
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: ${(props) => props.theme.colorBlackForText};
  }
`;

export default TextInput;
