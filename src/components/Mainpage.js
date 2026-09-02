import Header from './Header'
import useMovielist from '../hooks/useMovielist'
import Maincontainer from './MainContainer';


const Mainpage = () => {

 useMovielist();
  return (
    <>
    <div><Header /></div>
    <div><Maincontainer /></div>
    </>
  )
}

export default Mainpage