
import './styles/App.css'
import Row from './components/Row/Row';
import requests from './services/request'
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <div className='app'>

      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />
      
      {/* Body */}
      <Row title="NETFLIX-ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
    </div> 
  )

}

export default App;
