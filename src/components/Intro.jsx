import React from "react";
import { Form } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <p>Your name</p>
      <Form method="post">
        <input
          text="text"
          name="userName"
          required
          placeholder="What is your name?"
          autoComplete="given-name"
        />
        <input type="hidden" name="_action" value="newUser" />
        <button type="submit">
          <span>Create Account</span>
        </button>
      </Form>
    </div>
  );
};

export default Intro;
