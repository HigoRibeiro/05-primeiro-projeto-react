import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfoHeader = styled.header`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
  }

  div {
    flex: 1;
    margin: 0 16px;

    strong {
      font-size: 20px;
      color: #f8f8f2;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #f8f8f2;
      }

      p {
        display: block;
        margin-top: 4px;
        color: #737380;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #44475a;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #f8f8f2;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
