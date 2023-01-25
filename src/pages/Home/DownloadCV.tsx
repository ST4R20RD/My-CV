import React from "react";
import { FaDownload } from "react-icons/fa";
import styled from "styled-components";

export function DownloadCV() {
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
    <Button onClick={onButtonClick}>
      <FaDownload />
      Download CV
    </Button>
  );
}

const Button = styled.button`
  color: white;
  border: none;
  padding: 10px 30px;
  font-size: 2rem;
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 100%);
`;
