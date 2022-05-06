import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  padding: 3rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.elements};

  .link {
    color: ${(props) => props.theme.text};
    font-weight: 800;
  }

  .theme-btn {
    display: flex;
    gap: 0.5rem;
  }

  .btn-text {
    color: ${(props) => props.theme.text};
    font-weight: 300;
  }
`;

export default Wrapper;
