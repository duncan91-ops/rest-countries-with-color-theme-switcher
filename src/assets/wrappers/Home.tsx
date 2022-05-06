import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 5% 3rem;

  .inputs {
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  .country {
    position: relative;
  }

  .country-input {
    outline: none;
    border: none;
    width: 100%;
    padding: 2rem 15%;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.text};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 1.4rem;

    &::placeholder {
      color: ${(props) => props.theme.text};
      font-size: 1.4rem;
      font-weight: 300;
    }
  }

  .search-icon {
    font-size: 2rem;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-55%);
    color: ${(props) => props.theme.text};
  }

  .region {
    position: relative;
  }

  .regions-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 35rem;
    padding: 2rem 5%;
    background-color: ${(props) => props.theme.elements};
    border-radius: 10px;
    color: ${(props) => props.theme.text};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .btn-text {
    font-size: 1.4rem;
  }

  .regions {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 35rem;
    transform: translateY(105%);
    background-color: ${(props) => props.theme.elements};
    border-radius: 10px;
    padding: 2rem 5%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .region-name:not(:last-child) {
    margin-bottom: 1rem;
  }

  .region-btn {
    width: 100%;
    text-align: left;
    font-size: 1.4rem;
    color: ${(props) => props.theme.text};
  }
`;

export default Wrapper;
