import './App.css';
//::::::::::::::::::
//STEP 6:
import { connect } from 'react-redux';
/////
import {useState} from 'react'
import { searchAnime } from './state/action';
import AnimeCard from './components/AnimeCard';

//dont forget to add props to app(props)
function App(props) {
  //CONSOLE LOG 1
  console.log(props, 'log 1');
  const {data} = props
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    props.searchAnime(search)

  }
  return (
    <div className='App'>
      <h1>Anime Search</h1>
      <input value={search} onChange={handleChange} />
      <button onClick={handleSearch}>Find Anime</button>
      { data.results && data.results.map((show) => <AnimeCard show={show} key={show.mal_id} />)}
    </div>
  );
}

//STEP 7: CONNECT PROVIDER TO APP. or app to connect w/e. THEN MAPSTATETOTPROPS
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {searchAnime})(App);
