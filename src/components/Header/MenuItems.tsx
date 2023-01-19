import styled from "styled-components";
import MenuItem from "./MenuItem";

const LINKLIST = ["Home", "About", "Contact"];

interface Props {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  isMobile: boolean;
}

export default function MenuItems({ setIsOpen, isMobile }: Props) {
  return (
    <Container>
      {LINKLIST.map((label) => {
        return (
          <MenuItem
            to={label.toLowerCase()}
            label={label}
            handleOpen={() => {
              isMobile && setIsOpen(false);
            }}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #34495e;
    width: 80vw;
    height: 100vh;
  }
`;
