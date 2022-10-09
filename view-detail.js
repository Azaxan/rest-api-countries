import { renderDetailComponent } from "./dom-utility-detail.js";

export const renderDetail = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const countryCode = searchParams.get("country");

  if (!countryCode) {
    goBackToDashboard();
  }

  const URL_CODE = `https://restcountries.com/v3.1/alpha/${countryCode}`;

  let country;

  fetch(URL_CODE)
    .then((res) => res.json())
    .then(([data]) => {
      if (!data) {
        goBackToDashboard();
      }
      country = {
        capital: data.capital && data.capital[0],
        population: data.population.toLocaleString(),
        name: data.name.common,
        nativeName: Object.values(data.name.nativeName)[0].common,
        code: data.cioc,
        region: data.region,
        subRegion: data.subregion,
        flagUrl: data.flags.png,
        currencies: Object.values(data.currencies).map(
          (currency) => currency.name
        ),
        languages: Object.values(data.languages),
        tld: data.tld[0],
        borders: data.borders,
      };
      renderDetailComponent(country);
    });
};

const goBackToDashboard = () => {
  window.location.href = "/";
};
