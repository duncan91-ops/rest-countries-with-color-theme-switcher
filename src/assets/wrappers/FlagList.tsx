import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5rem;

  .flag {
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .flag-img {
    width: 100%;
  }

  .content {
    margin-top: -10px;
    background-color: ${(props) => props.theme.elements};
    padding: 3rem 5% 4rem;
  }

  .name,
  .region,
  .population,
  .capital,
  .loading,
  .error {
    color: ${(props) => props.theme.text};
  }

  .name {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 800;
  }

  .description {
    font-weight: 600;
    font-size: 2rem;
  }

  .region,
  .population,
  .capital {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
