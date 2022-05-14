import styled from "styled-components";

const Wrapper = styled.main`
  padding: 7rem 10%;

  .back-btn {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.elements};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    padding: 1rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
  }

  .back-icon {
    font-size: 2rem;
    margin-right: 1rem;
  }

  .back-text {
    font-size: 2rem;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  .img-container {
    width: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }

  .flag {
    width: 100%;
  }

  .name {
    color: ${(props) => props.theme.text};
    font-size: 3.5rem;
    margin-bottom: 5rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-bottom: 5rem;
  }

  .main,
  .sub {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .main > *,
  .sub > * {
    font-size: 2.5rem;
    color: ${(props) => props.theme.text};
  }

  .desc {
    font-weight: 600;
  }

  .border {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .border-title {
    font-size: 3rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
  }

  .border-btns {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .border-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem 0;
    width: 18rem;
    background-color: ${(props) => props.theme.elements};
    color: ${(props) => props.theme.text};
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    font-size: 2rem;
  }
`;
export default Wrapper;
