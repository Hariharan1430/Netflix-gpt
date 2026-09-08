export const LOGO="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"

export const MOVIE_DATA= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY
  }
};


export const CDN_URL="https://image.tmdb.org/t/p/w500"

export const OPEN_AI_KEY=process.env.REACT_APP_GEMINI_KEY