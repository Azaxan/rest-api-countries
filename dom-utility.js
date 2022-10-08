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
  const imageContainerElement = document.createElement("div");
  const imageElement = document.createElement("img");

  imageElement.src = country.flagUrl;
  imageElement.alt = `${country.name} flag`;
  imageContainerElement.appendChild(imageElement);

  return imageContainerElement;
};

const createCountryItemElement = (country) => {
  const countryElement = document.createElement("li");
  const countryNameElement = document.createElement("span");

  const anchorElement = document.createElement("a");
  anchorElement.href = `?country=${country.code}`;

  countryNameElement.classList.add("country-name");
  countryNameElement.innerText = country.name;

  anchorElement.appendChild(createFlagElement(country));

  const infoContainerElement = document.createElement("div");
  infoContainerElement.classList.add("info-container");

  infoContainerElement.appendChild(countryNameElement);
  infoContainerElement.appendChild(
    createDetailElement("Population", country.population)
  );
  infoContainerElement.appendChild(
    createDetailElement("Region", country.region)
  );
  infoContainerElement.appendChild(
    createDetailElement("Capital", country.capital)
  );

  anchorElement.appendChild(infoContainerElement);

  countryElement.appendChild(anchorElement);

  return countryElement;
};

const createListElement = (countries) => {
  const listElement = document.createElement("ul");

  countries.forEach((country) => {
    listElement.appendChild(createCountryItemElement(country));
  });
  return listElement;
};

export const renderFilterElements = () => {
  const filterElement = document.createElement("div");
  filterElement.classList.add("filters");

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.id = "query";
  inputElement.placeholder = "Search for a country...";

  const selectElement = document.createElement("select");
  selectElement.name = "region";
  selectElement.id = "region";

  const optionElement1 = document.createElement("option");
  optionElement1.value = "";
  optionElement1.innerText = "Filter by Region";
  selectElement.appendChild(optionElement1);

  const optionElement2 = document.createElement("option");
  optionElement2.value = "Africa";
  optionElement2.innerText = "Africa";
  selectElement.appendChild(optionElement2);

  const optionElement3 = document.createElement("option");
  optionElement3.value = "Americas";
  optionElement3.innerText = "America";
  selectElement.appendChild(optionElement3);

  const optionElement4 = document.createElement("option");
  optionElement4.value = "Asia";
  optionElement4.innerText = "Asia";
  selectElement.appendChild(optionElement4);

  const optionElement5 = document.createElement("option");
  optionElement5.value = "Europe";
  optionElement5.innerText = "Europe";
  selectElement.appendChild(optionElement5);

  const optionElement6 = document.createElement("option");
  optionElement6.value = "Oceania";
  optionElement6.innerText = "Oceania";
  selectElement.appendChild(optionElement6);

  filterElement.appendChild(inputElement);
  filterElement.appendChild(selectElement);

  const root = document.getElementById("root");
  root.parentNode.insertBefore(filterElement, root);
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};
