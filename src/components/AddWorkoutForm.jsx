import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useFetcher } from "react-router-dom";
import { Form } from "react-router-dom";
import Test from "./Test";

const AddWorkoutForm = ({ closeModal }) => {
  const formRef = useRef();
  const focusRef = useRef();
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (!isSubmitting) {
      // close the tab or modal
    }
  }, [isSubmitting]);
  return (
    <>
      <fetcher.Form method="post" ref={formRef}>
        <div>
          <label>Routine Name</label>
          <input
            text="text"
            name="routine_name"
            required
            placeholder="Routine Name"
            ref={focusRef}
          />
        </div>
        <br></br>
        <div>
          <label>Routine Description</label>
          <input
            text="text"
            name="descriptions"
            required
            placeholder="Routine Description"
          />
        </div>
        <input type="hidden" name="_action" value="newWorkout" />
        <button type="submit">
          <span>Create Routine</span>
        </button>
      </fetcher.Form>
    </>
  );
};

export default AddWorkoutForm;
