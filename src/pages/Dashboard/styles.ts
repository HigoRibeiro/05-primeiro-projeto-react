import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #f8f8f2;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    background: #f8f8f2;
    color: #3a3a3a;
    transition: border-color 0.2s;

    border: 2px solid #fff;
    border-right: 0;

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #ff5555;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #50fa7b;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#50fa7b')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 54px;
      height: 54px;
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

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff5555;
  margin-top: 8px;
`;
