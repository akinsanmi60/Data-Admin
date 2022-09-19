import styled from "styled-components";

const SideWrapper = styled.div`
  border-right: 0.5px solid rgb(230, 227, 227);
  // min-height: 50vh;
  background: var(--dark-primary);
  color: white;

  .top_section {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .top {
      display: flex;
      align-items: center;
      padding: 20px 15px;
    }

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
    hr {
      height: 0;
      border: 0.5px solid rgb(230, 227, 227);
    }
  }

  .bars {
    display: flex;
    font-size: 25px;
    margin-left: 50px;
  }

  .link {
    margin-top: 15px;
    display: flex;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
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
  .btnlogout {
    margin-top: 200px;
    padding: 10px 15px;
  }
  .btn {
    display: flex;
    gap: 15px;
  }
  @media screen and (min-width: 1025px) {
    min-height: 50vh;
    height: auto !important;

    .top_section {
      height: 70px;
      .top h1 {
        font-size: 30px;
      }
    }
    .link {
      .link_text,
      .icon {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default SideWrapper;

export const TopWrapper = styled.div`
  background-color: var(--neutral-light);
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 9999;
  padding: 10px 20px;
  color: var(--dark-primary);
  border-bottom: 2px solid rgb(223, 227, 231);
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 25px;
  }

  .titlebox {
    display: flex;
    justify-content: space-between;
    .brand {
      display: flex;
      span {
        margin-top: 7px;
      }
    }
    h1 {
      margin-right: 15px;
      font-size: 20px;
    }

    .box {
      display: flex;
      gap: 20px;

      .item {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;

        .icon {
          font-size: 20px;
        }
        .counter {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
        }
      }
      .bar {
        margin-top: 9px;
        font-size: 25px;
      }
    }
  }
  @media screen and (min-width: 900px) {
    .mobilehide {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
    padding: 20px;
    .mobilehide {
      display: block;
    }
    .titlebox {
      .brand {
        display: none;
      }
      .box {
        display: flex;
        flex-direction: row;
        p {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    padding: 18px 20px;
    .box {
      display: flex;
      flex-direction: row;
      font-size: 15px;
      align-items: center;
    }
  }
`;
