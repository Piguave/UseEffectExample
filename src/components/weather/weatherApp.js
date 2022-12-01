import { useState, useEffect } from "react";
import Loading from "./loading";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import NavbarKruger from "./NavBarKruger";
import styles from "../../assets/css/weatherApp.module.css";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = "Weather | " + weather?.location?.name ?? "";
  }, [weather]);

  async function loadInfo(city = "Portoviejo") {
    // console.log(
    //   `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
    // );
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
      );
      const json = await request.json();
      console.log(json);

      setTimeout(() => {
        setWeather({ ...json });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  }

  function handleOnChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
     <NavbarKruger />
     <Container className="conetenedorAPP">
     <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleOnChangeCity} />
      {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
    </div>
     </Container>
    </>
    
  );
}
