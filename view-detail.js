import { renderDetailComponent } from "./dom-utility-detail.js";

export const renderDetail = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get("country");
  if (!countryCode) {
    window.location.href = "/";
  }

  const url = "https://restcountries.com/v3.1";
  const URL_CODE = `${url}/alpha/${countryCode}`;

  let country;

  fetch(URL_CODE)
    .then((res) => res.json())
    .then((data) => {
      country = data.map((country) => {
        return {
          capital: country.capital && country.capital[0],
          currencies: country.currencies,
          population: country.population.toLocaleString(),
          name: country.name.common,
          nativeName: country.name.nativeName,
          region: country.region,
          subRegion: country.subregion,
          flagUrl: country.flags.png,
          topLevelDomain: country.tld,
          languages: country.languages,
        };
      });
      renderDetailComponent(country[0]);
    });
};
