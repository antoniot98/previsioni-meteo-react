import { useContext, useState, useEffect } from "react";
import React from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [ricerca, setRicerca] = useState("rome");

  useEffect(() => {
    (async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "66a0655bb0msh9532e0b25baa96ap10bfa3jsn6cfa96547baa",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=";
      try {
        setIsLoading(true);
        const response = await fetch(`${url}${ricerca}`, options);

        if (response.ok) {
          const dati = await response.json();
          setData(dati);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (err) {
        setIsError(true);
      }
    })();
  }, [ricerca]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        ricerca,
        setRicerca,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
