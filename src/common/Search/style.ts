import styled from "styled-components";

const SearchBox = styled.div`
  .box {
    padding: 1rem;
  }

  .boxA {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 425px) {
      grid-template-columns: 1fr;
      margin-bottom: 10px;
    }
  }

  label {
    margin-bottom: 1px;
  }

  Input {
    width: 100%;
    height: 40px;
    line-height: 1em;
    font-weight: 300;
    padding: 5px 10px;
    outline: none;
    border: 1px solid var(--dark-primary);
    font-size: 13px;
    color: var(--dark-primary);
    &:hover {
      border: 1px solid var(--dark-primary);
    }
  }

  Select option {
    background-color: var(--dark-primary);
  }

  .btnbox {
    margin-top: 25px;
  }

  .text {
    display: flex;
    gap: 10px;
    .icon {
      margin-top: 5px;
    }
  }

  .btn {
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 425px) {
    .boxA {
      gap: 13px;
    }
    .btnbox {
      margin-top: 0px;
    }
    h1 {
      text-align: center;
    }
  }
`;
export default SearchBox;

export const inputStyles = {
  border: "none",
  outline: "none",
  focusBorderColor: "none",
};

export const ButtonStyled = styled.button`
  background-color: #0e2038;
  padding: 0.4rem 0.6rem;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 44px;
  @media screen and (max-width: 425px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.8rem;
  }
`;
