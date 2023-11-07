// Nav.jsx
import React from "react";
import { CgGym } from "react-icons/cg";
import { Form } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
    color: #fff;
  }

  span {
    font-size: 1.5rem;
    color: #fff;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3333;
  }
`;

const Nav = ({ userName }) => {
  return (
    <NavContainer>
      <NavLink to="/" aria-label="Go to home">
        <LogoContainer>
          <CgGym />
          <span>GYM Routine</span>
        </LogoContainer>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!window.confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <DeleteButton type="submit">Delete User</DeleteButton>
        </Form>
      )}
    </NavContainer>
  );
};

export default Nav;
