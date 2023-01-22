import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("/images/block-texture.png");
  background-repeat: repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
