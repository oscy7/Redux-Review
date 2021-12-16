import axios from 'axios';
//STEP 10:
export const SUCCESS = 'SUCCESS'; //NOTE THIS NEEDS A CASE IN REDUCER!
export const ERROR = 'ERROR' // note this needs a case in reducer

//STEP 8: 
export const LOADING = 'LOADING';

//STEP 7:
export const searchAnime = (searchQuery) => (dispatch) => {
    dispatch({type: LOADING})
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${searchQuery}`)
        .then(res => {
            //console.log(res)
            dispatch({type:SUCCESS, payload: res.data})
        })
        .catch((err) => dispatch({type: ERROR, payload: err.message }))
}

