import { renderCountriesList } from "./dom-utility.js";

const url = "https://restcountries.com";
const URL_ALL = `${url}/v3.1/all`;

let countries;

fetch(URL_ALL)
  .then((res) => res.json())
  .then((data) => {
    countries = data.map((country) => {
      return {
        capital: country.capital && country.capital[0],
        population: country.population,
        name: country.name.common,
        region: country.region,
        flagUrl: country.flags.png,
      };
    });
    renderCountriesList(countries);
  });
