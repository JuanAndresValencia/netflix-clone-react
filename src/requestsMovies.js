const API_KEY = process.env.REACT_APP_API_KEY

export default {
   getTrendings: {
     name: 'Trendings',
     url: `trending/all/day?api_key=${API_KEY}`
   },
   getActionMovies: {
     name: 'Action',
     url: `discover/movie?api_key=${API_KEY}&with_genres=28`
   },
   getAnimationMovies: {
     name: 'Animation',
     url: `discover/movie?api_key=${API_KEY}&with_genres=16`
   },
   getHorrorMovies: { 
     name: 'Horror',
     url: `discover/movie?api_key=${API_KEY}&with_genres=27`
   },
   getTvShows: {
     name: 'Tv Shows',
     url: `discover/movie?api_key=${API_KEY}&with_genres=10770`
   },
   getRomanceMovies: {
     name: 'Romance',
     url: `discover/movie?api_key=${API_KEY}&with_genres=10749`
   }


}