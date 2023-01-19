import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  to: string;
  label: string;
  handleOpen: () => void;
}

export default function MenuItem({ to, label, handleOpen }: Props) {
  return (
    <NavLink to={`#${to}`} onClick={handleOpen}>
      {label}
    </NavLink>
  );
}

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
    color: yellow;
  }
  @media (max-width: 425px) {
    font-size: 5rem;
    margin-left: 0;
  }
`;
