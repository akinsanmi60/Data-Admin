import styled from "styled-components";

const AppContainer = styled.div`
  .container {
    display: flex;
    margin-bottom: 50px;
    background-color: var(--neutral-light);
  }
  .inner-content {
    width: 100%;
    min-height: calc(100vh - 4px);
  }
  .sideContentBox {
    color: var(--neutral-light);
    min-height: calc(100vh - 4px);
  }

  .boxside {
    background-color: #1b1b29;
    min-height: 100%;
    padding: 15px;

    .avatar {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      margin-bottom: 25px;
      p {
        margin-top: 19px;
        font-size: 13px;
      }
    }

    .link {
      display: flex;
      padding: 10px;
      gap: 15px;
      transition: all 0.5s;
      margin-bottom: 15px;
    }

    .link:hover {
      background: lightskyblue;
      color: #000;
      transition: all 0.5s;
    }

    .active {
      background: lightskyblue;
      color: #000;
    }

    .icon {
      margin-top: 4px;
    }
    .icon,
    .link_text {
      font-size: 18px;
    }
  }

  .inner-content {
    background-color: #e8eff9;
  }

  @media screen and (max-width: 900px) {
    .sideContentBox {
      display: none;
    }
  }
`;
export default AppContainer;
