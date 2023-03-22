import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
function Ricerca() {
  const { isLoading, isError, data } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return (
      <div className="container d-flex align-items-center justify-content-center mt-5">
        <h1>OPS CI DISPIACE CITTA INSERITA NON TROVATA!</h1>
      </div>
    );
  } else {
    return (
      <section className="risultati">
        <div className="card mt-1 mx-0" id="card-risultati">
          <div className="card-body">
            <h5
              id="city_title"
              className="card-title text-center mb-3"
            >{`${data.location.name} (${data.location.country})`}</h5>
            <div className="mapouter">
              <div id="mappa" className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src={`https://maps.google.com/maps?q=${data.location.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  scrolling="no"
                  style={{ marginWidth: 0, marginHeight: 0, frameBorder: 0 }}
                >
                  {" "}
                </iframe>
              </div>
            </div>
            <ul className="list-group my-3" id="list">
              <li className="list-group-item">
                <h5>Temperatura attuale:</h5>
                <p>{data.current.temp_c}°C</p>
              </li>
              <li className="list-group-item">
                <h5>Temperatura attuale in fahrenheit:</h5>
                <p>{data.current.temp_f}°F</p>
              </li>
              <li className="list-group-item">
                <h5>Vento mph:</h5>
                <p>{data.current.wind_mph}</p>
              </li>
              <li className="list-group-item">
                <h5>Vento kph:</h5>
                <p>{data.current.wind_kph}</p>
              </li>
              <li className="list-group-item">
                <h5>Vento direzione:</h5>
                <p>{data.current.wind_dir}</p>
              </li>
              <li className="list-group-item">
                <h5>Umidità:</h5>
                <p>{data.current.humidity}%</p>
              </li>
              <li className="list-group-item">
                <h5>Precipitazioni: </h5>
                <p>{data.current.precip_mm} mm</p>
              </li>
              <li className="list-group-item">
                <h5>Nuvole:</h5>
                <p>{data.current.cloud}</p>
              </li>
            </ul>
            <small>
              <strong>
                Ultimo aggiornamento:{" "}
                {new Date(data.location.localtime).toLocaleString()}
              </strong>
            </small>
          </div>
        </div>
      </section>
    );
  }

  //
}

export default Ricerca;
