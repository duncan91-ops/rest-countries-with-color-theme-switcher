import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  padding: 3rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.elements};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);

  .link {
    color: ${(props) => props.theme.text};
    font-weight: 800;
    font-size: 2rem;
  }

  .theme-btn {
    display: flex;
    gap: 1rem;
    font-size: 2rem;
  }

  .btn-text {
    color: ${(props) => props.theme.text};
    font-weight: 300;
    font-size: 2rem;
  }
`;

export default Wrapper;
