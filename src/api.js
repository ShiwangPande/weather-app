export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7c2de7a385msh80cde1a81531bdep1ac7f3jsnb4595e339df0",// enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "1610861435d28d0de3841de7c0eafa46"; // enter your key from openweather API

try {
  const response = await fetch(GEO_API_URL, geoApiOptions);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}



