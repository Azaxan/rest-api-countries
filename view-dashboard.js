import { renderCountriesList, renderFilterElements } from "./dom-utility.js";

export const renderDashboard = () => {
  const url = "https://restcountries.com/v3.1";
  const URL_ALL = `${url}/all`;

  let countries;
  let query = "";
  let region = "";

  fetch(URL_ALL)
    .then((res) => res.json())
    .then((data) => {
      countries = data.map((country) => {
        return {
          capital: country.capital && country.capital[0],
          population: country.population.toLocaleString(),
          name: country.name.common,
          code: country.cioc,
          region: country.region,
          flagUrl: country.flags.png,
        };
      });
      renderCountriesList(countries);
    });

  renderFilterElements();

  const filterDataAndRenderCountriesList = (countries) => {
    const filteredCountries = countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(query) &&
        (!region || country.region === region)
      );
    });

    renderCountriesList(filteredCountries);
  };

  document.querySelector("#query").addEventListener("input", (event) => {
    query = event.target.value.toLowerCase().trim();
    filterDataAndRenderCountriesList(countries);
  });

  document.querySelector("#region").addEventListener("change", (event) => {
    region = event.target.value;

    filterDataAndRenderCountriesList(countries);
  });
};
