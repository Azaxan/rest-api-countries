const createDetailButton = (text, link) => {
  const anchorElement = document.createElement("a");
  anchorElement.classList.add("detail-button");
  anchorElement.innerText = text;
  anchorElement.href = link;

  return anchorElement;
};

const createDetailElement = (labelName, value) => {
  const detailElement = document.createElement("div");

  const labelElement = document.createElement("strong");
  labelElement.innerText = `${labelName}:`;

  const valueElement = document.createElement("span");
  valueElement.innerText = value;

  detailElement.appendChild(labelElement);
  detailElement.appendChild(valueElement);

  return detailElement;
};

const createFlagElement = (country) => {
  const wrapperElement = document.createElement("div");
  const flagElement = document.createElement("img");

  flagElement.src = country.flagUrl;
  flagElement.alt = `${country.name} flag`;

  wrapperElement.classList.add("detail-flag-container");
  wrapperElement.appendChild(flagElement);
  return wrapperElement;
};

const createDetailComponent = (country) => {
  const detailContainerElement = document.createElement("div");
  detailContainerElement.classList.add("detail-container");

  const flagImgElement = createFlagElement(country);
  const detailNameElement = document.createElement("strong");
  detailNameElement.innerText = country.name;

  detailContainerElement.appendChild(flagImgElement);
  detailContainerElement.appendChild(detailNameElement);

  detailContainerElement.appendChild(
    createDetailElement("Native Name", country.nativeName)
  );
  detailContainerElement.appendChild(
    createDetailElement("Population", country.population)
  );
  detailContainerElement.appendChild(
    createDetailElement("Region", country.region)
  );
  detailContainerElement.appendChild(
    createDetailElement("Sub Region", country.subRegion)
  );
  detailContainerElement.appendChild(
    createDetailElement("Capital", country.capital)
  );
  detailContainerElement.appendChild(
    createDetailElement("Top Level Domain", country.tld)
  );
  detailContainerElement.appendChild(
    createDetailElement("Currencies", country.currencies)
  );
  detailContainerElement.appendChild(
    createDetailElement("Languages", country.languages)
  );

  return detailContainerElement;
};

const createBorderCountriesContainer = (country) => {
  if (!country.borders || country.borders.length === 0) {
    return new Error("Country does not have borders!");
  }

  const borderCountriesContainerElement = document.createElement("div");
  const labelElement = document.createElement("strong");

  labelElement.innerText = "Border Countries";
  borderCountriesContainerElement.appendChild(labelElement);

  country.borders.forEach((countryCode) => {
    const borderCountryURL = `https://restcountries.com/v3.1/alpha/${countryCode}`;

    fetch(borderCountryURL)
      .then((res) => res.json())
      .then(([data]) => {
        if (data.cioc) {
          borderCountriesContainerElement.appendChild(
            createDetailButton(data.name.common, `/?country=${data.cioc}`)
          );
        }
      });
  });
  return borderCountriesContainerElement;
};

export const renderDetailComponent = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createDetailButton("Back", "/"));
  rootElement.appendChild(createDetailComponent(country));
  if (country.borders) {
    rootElement.appendChild(createBorderCountriesContainer(country));
  }
};
