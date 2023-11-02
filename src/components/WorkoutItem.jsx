// import React from "react";

import { useFetcher } from "react-router-dom";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

const WorkoutItem = ({ workout }) => {
  const { name, descriptions } = workout;
  const fetcher = useFetcher();

  return (
    <>
      <Link to={`/workout/${workout.id}`}>{workout.name}</Link>
      <p>{descriptions}</p>
      <fetcher.Form method="post">
        <input type="hidden" name="_action" value="deleteRoutine" />
        <input type="hidden" name="routineId" value={workout.id} />
        <button type="submit">{`Delete ${workout.name}`}</button>
      </fetcher.Form>
    </>
  );
};

export default WorkoutItem;
