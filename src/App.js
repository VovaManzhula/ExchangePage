import "./App.css";
import CoursesComponent from "./components/CoursesComponent";
import ExchangeComponent from "./components/ExchangeComponent";
import preloader from "./assets/ajax-loader.gif";
import { useDispatch, useSelector } from "react-redux";

function App() {
   const dispatch = useDispatch()
   setTimeout(() => {dispatch({type:"HIDE_LOADER"})
   }, 1000);
  const isFetching = useSelector((state) => state.isFetching);
  const data = useSelector((state) => state.rates);
  return (
    <>
      {isFetching ? (
       <div className="preloader-box"> <img src={preloader} className="loader" alt="load" /></div>
      ) : (
        <div className="container row main-container">
          <CoursesComponent className="container col-3" data={data} />

          <ExchangeComponent className="container col-9 text-center" data={data} />
        </div>
      )}
    </>
  );
}

export default App;
