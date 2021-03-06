import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 5rem;

  .flag {
    width: 100%;
    max-width: 50rem;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .flag-box {
    width: 100%;
    height: 25rem;
  }

  .flag-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    /* margin-top: -10px; */
    background-color: ${(props) => props.theme.elements};
    padding: 3rem 10% 4rem;
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

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 5rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Wrapper;
