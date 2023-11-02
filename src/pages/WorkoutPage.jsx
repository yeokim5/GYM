import { useLoaderData } from "react-router-dom";
import { getAllMatchingItems } from "../functions/helpers";

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
  return <div>{routine.name}</div>;
};

export default WorkoutPage;
