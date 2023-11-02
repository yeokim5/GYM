import React from "react";
import { CgGym } from "react-icons/cg";
import { Form } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home" className="bg-red-500 ">
        <button>
          <CgGym className="bg-inherit " />
          <span>GYM Routine</span>
        </button>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">Delete User</button>
        </Form>
      )}
    </nav>
  );
};

export default Nav;
