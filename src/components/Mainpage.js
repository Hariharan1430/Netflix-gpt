import Header from "./Header";
import useMovielist from "../hooks/useMovielist";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomming from "../hooks/useUpcomming";
import useTopRated from "../hooks/useTopRated";
import usePopularlist from "../hooks/usePopularlist";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Mainpage = () => {
  const gptsearchvalue = useSelector((store) => store.gptsearch.search);
  useMovielist();
  useUpcomming();
  useTopRated();
  usePopularlist();

  return (
    <>
      <div>
        <Header />
      </div>
      {gptsearchvalue ? (
        <div>
          <GptSearch />
        </div>
      ) : (
        <>
          <div>
            <Maincontainer />
          </div>
          <div>
            <SecondaryContainer />
          </div>
        </>
      )}
    </>
  );
};

export default Mainpage;
