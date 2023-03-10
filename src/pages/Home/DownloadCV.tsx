import React from "react";
import { FaDownload } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export function DownloadCV() {
  const { lightMode } = useContext(ThemeContext);
  const onButtonClick = () => {
    fetch("CV-21012023.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-Gonçalo-Estrelado.pdf";
        alink.click();
      });
    });
  };
  return (
    <Button onClick={onButtonClick} lightMode={lightMode}>
      <FaDownload />
      Download CV
    </Button>
  );
}

const lightThemeStyles = css`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
`;

const darkThemeStyles = css`
  background: linear-gradient(180deg, rgba(141, 141, 141, 0) 0%, rgba(141, 141, 141, 0.2) 100%);
`;

const Button = styled.button<{ lightMode: boolean }>`
  ${({ lightMode }) => (lightMode ? darkThemeStyles : lightThemeStyles)}
  color: white;
  border: none;
  padding: 10px 30px;
  font-size: 2rem;
  border-radius: 30px;
  margin-top: 10px;
  svg {
    margin-right: 13px;
  }
`;
