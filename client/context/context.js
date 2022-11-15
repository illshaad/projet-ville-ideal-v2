import { createContext, useContext, useState } from "react";

const dataCityContext = createContext();

export const DataCityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const [display, setDisplay] = useState(false);
  const [response, setResponse] = useState();
  const [responseAuth, setResponseAuth] = useState();
  const [dinamiqueMarker, setDinamiqueMarker] = useState(null);
  const [selectCityInfoWindows, SetselectCityInfoWindows] = useState(null);
  const [dataInformation, setDataInformation] = useState(null);

  const findUserNoteByCity =
    selectCityInfoWindows &&
    dataInformation?.filter(
      (e) => e.nameCity === selectCityInfoWindows[0]?.nom
    );

  return (
    <dataCityContext.Provider
      value={{
        city,
        setCity,
        display,
        setDisplay,
        response,
        setResponse,
        dinamiqueMarker,
        setDinamiqueMarker,
        selectCityInfoWindows,
        SetselectCityInfoWindows,
        responseAuth,
        setResponseAuth,
        dataInformation,
        setDataInformation,
        findUserNoteByCity,
      }}
    >
      {children}
    </dataCityContext.Provider>
  );
};

export const useDataCity = () => useContext(dataCityContext);
