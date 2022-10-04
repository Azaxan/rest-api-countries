const createDetailElement = (labelName, value) => {
  const detailElement = document.createElement("div");
  
  const labelElement = document.createElement("strong");
  labelElement.innerText = labelName;

  const valueElement = document.createElement("span");
  valueElement.innerText = value;
  // to be continued...
};

const createCountryItemElement = (country) => {
  const countryElement = document.createElement("li");

  const countryNameElement = document.createElement("span");
  countryNameElement.innerText = country.name;
  
  countryElement.appendChild(countryNameElement);

  return countryElement;
};

const createListElement = (countries) => {
  const listElement = document.createElement("ul");

  countries.forEach((country) => {
    listElement.appendChild(createCountryItemElement(country));
  });
  return listElement;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createListElement(countries));
};
