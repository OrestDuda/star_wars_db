import { useEffect, useState } from "react";
import { getAllStarships } from "../../Services";
import StarshipList from "../StarshipList/StarshipList";
import Error from "../Error/Error";
import { SpinnerCircularSplit } from "spinners-react";

function StarshipPage() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllStarships()
      .then((data) => {
        setStarships(data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => setError(err));
  });

  const hasData = !(loading || error);
  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? (
    <SpinnerCircularSplit size={"250px"} className={"spinner"} />
  ) : null;
  const content = hasData ? <StarshipList data={starships} /> : null;

  return (
    <div className="starship-list-container">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
}

export default StarshipPage;
