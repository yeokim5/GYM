import { useLoaderData } from "react-router-dom";
import { getAllMatchingItems } from "../functions/helpers";
import exerciseDB from "../DB/exercise.json";
// loader
export async function routineLoader({ params }) {
  const routine = await getAllMatchingItems({
    category: "workouts",
    key: "id",
    value: params.id,
  })[0];

  if (!routine) {
    throw new Error("Budget you're trying to find doesn't exist");
  }
  return { routine };
}
const WorkoutPage = () => {
  const { routine } = useLoaderData();

  const loadExercise = () => {
    const data = routine.exercise.split(",").map(Number);
    const exercises = exerciseDB["Chest Exercises"].concat(
      exerciseDB["Shoulder Exercises"],
      exerciseDB["Bicep Exercises"],
      exerciseDB["Triceps Exercises"],
      exerciseDB["Leg Exercises"],
      exerciseDB["Back Exercises"],
      exerciseDB["Glute Exercises"],
      exerciseDB["Ab Exercises"],
      exerciseDB["Cardio Exercises"]
    );

    const selectedExercises = data.map((index) => exercises[index]);
    console.log(selectedExercises);

    return selectedExercises; // Return the selected exercises
  };

  const selectedExercises = loadExercise();

  return (
    <>
      <div>{routine.name}</div>
      <div>
        {selectedExercises.map((exercise, index) => (
          <div key={index}>
            {exercise.name}
            <img src={exercise.link} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkoutPage;
