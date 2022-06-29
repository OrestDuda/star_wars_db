import "./Pages.scss";
import PersonList from "../PersonList/PersonList";
import ItemDetails from "../PersonDetails/ItemDetails";
import { useEffect, useState } from "react";
import { getAllPeople, getPerson } from "../../Services";
import Error from "../Error/Error";
import { SpinnerCircularSplit } from "spinners-react";

function PersonPage() {
  const [loadingList, setLoadingList] = useState(true);
  const [errorList, setErrorList] = useState(false);
  const [people, setPeople] = useState([]);

  const [selected, setSelected] = useState(1);

  const [personDetails, setPersonDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [errorDetails, setErrorDetails] = useState(false);

  function onError() {
    setErrorList(true);
    setLoadingList(false);
    setErrorDetails(true);
    setLoadingDetails(false);
  }

  function getID(id) {
    setSelected(id);
  }

  useEffect(() => {
    function updatePeopleList() {
      getAllPeople()
        .then((data) => {
          setPeople(data);
        })
        .then(() => {
          setLoadingList(false);
        })
        .catch(onError);
    }
    updatePeopleList();
  }, []);

  useEffect(() => {
    getPerson(selected)
      .then((data) => setPersonDetails(data))
      .then(() => {
        setLoadingDetails(false);
      })
      .catch(onError);
  }, [selected]);

  const hasDataList = !(loadingList || errorList);
  const errorMessageList = errorList ? <Error /> : null;
  const spinnerList = loadingList ? (
    <SpinnerCircularSplit className={"spinner"} size={"250px"} />
  ) : null;
  const itemListContent = hasDataList ? (
    <PersonList data={people} getID={getID} />
  ) : null;

  const hasDataDetails = !(loadingDetails || errorDetails);
  const errorMessage = errorDetails ? <Error /> : null;
  const spinner = loadingDetails ? (
    <SpinnerCircularSplit className={"spinner"} size={"250px"} />
  ) : null;
  const itemDetailsContent = hasDataDetails ? (
    <ItemDetails person={personDetails} />
  ) : null;

  return (
    <div className={"container-item-list"}>
      <div className={"container-left"}>
        {errorMessageList}
        {spinnerList}
        {itemListContent}
      </div>
      <div className={"container-right"}>
        {errorMessage}
        {spinner}
        {itemDetailsContent}
      </div>
    </div>
  );
}
export default PersonPage;
