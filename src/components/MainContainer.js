import BackgroundVideoContainer from "./BackgroundVideoContainer";
import BackgroundVideoTitleContainer from "./BackgroundVideoTitleContainer";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const allmovies=useSelector((e)=>e.movies?.newmovies)
  if(!allmovies) return;
   const mainmovie=allmovies[1]
  const{title,overview,id}=mainmovie;
    

  return (
    <>
    
      <div>
        <BackgroundVideoContainer movie_id={id} />
      </div>
      <div>
        <BackgroundVideoTitleContainer title={title} overview={overview} />
      </div>
    </>
  );
};

export default Maincontainer;
