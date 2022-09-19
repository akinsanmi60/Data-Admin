import styled from "styled-components";

const TableWrapper = styled.div`
  Th {
    font-size: 12px;
  }
  .paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  .select-btn {
    display: flex;
    justify-content: center;
  }
  .paginationBttns a {
    font-size: 13px;
    padding: 5px 8px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid var(--dark-primary);
    color: var(--dark-primary);
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: var(--dark-primary);
  }

  .paginationActive a {
    color: white;
    background-color: var(--dark-primary);
  }

  .paginationDisabled a {
    color: var(--dark-primary);
    background-color: transprent;
  }

  @media screen and (max-width: 720px) {
    .right-hidden,
    .right-gender {
      display: none;
    }
  }
  @media screen and (max-width: 375px) {
    .right-status,
    .right-gender {
      display: none;
    }
  }
`;
export default TableWrapper;
