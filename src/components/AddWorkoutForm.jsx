import React, { useEffect, useRef, useState } from "react";
import { useFetcher } from "react-router-dom";
import { Form } from "react-router-dom";
import ExerciseGridForm from "./ExerciseGridForm";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddWorkoutForm = ({ closeModal, closeStyle }) => {
  const formRef = useRef();
  const focusRef = useRef();
  const fetcher = useFetcher();
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseListIndex, setExerciseListIndex] = useState([]);

  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (!isSubmitting) {
      closeModal();
    }
  }, [isSubmitting]);

  useEffect(() => {
    formRef.current.reset();
    setExerciseList([]);
    setExerciseListIndex([]);
  }, [closeModal]);

  return (
    <Container>
      <span style={closeStyle} className="close" onClick={closeModal}>
        &times;
      </span>
      <fetcher.Form method="post" ref={formRef}>
        <div>
          <h1>{exerciseList}</h1>
          <Label htmlFor="routine_name">Routine Name</Label>
          <Input
            type="text"
            name="routine_name"
            id="routine_name"
            required
            placeholder="Routine Name"
            ref={focusRef}
          />
        </div>
        <div>
          <Label htmlFor="descriptions">Routine Description</Label>
          <Input
            type="text"
            name="descriptions"
            id="descriptions"
            required
            placeholder="Routine Description"
          />
        </div>
        <ExerciseGridForm
          exerciseList={exerciseList}
          setExerciseList={setExerciseList}
          exerciseListIndex={exerciseListIndex}
          setExerciseListIndex={setExerciseListIndex}
        />
        <input type="hidden" name="exercise" value={exerciseListIndex} />
        <input type="hidden" name="_action" value="newWorkout" />
        <Button type="submit">
          <span>Create Routine</span>
        </Button>
      </fetcher.Form>
    </Container>
  );
};

export default AddWorkoutForm;
