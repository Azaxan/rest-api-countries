const createFlagElement = (country) => {
  const flagElement = document.createElement("img");
  console.log(country);
  flagElement.src = country.flagUrl;
  flagElement.alt = `${country.name} flag`;

  return flagElement;
};

export const renderDetailComponent = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createFlagElement(country));
};
