import { useState } from "react";
import styles from "../../assets/css/weatherForm.module.css";

export default function WeatherForm({ onChangeCity }) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(city === ""){
      alert("Debe ingresar el nombre de una ciudad");
    }else{
      if (!city || city !== " ") {
        console.log(city)
         onChangeCity(city);
    }
    }
  }


  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className="d-flex justify-content-center ">
        <h1 className="">Weather App</h1>
      </div>
      <div className="d-flex justify-content-between " >
      <input
        className={styles.input}
        type="text"
        value={city}
        onChange={handleChange}
        pattern="[A-Za-z]{5,40}"
      />
      <button className={styles.buttonBuscar}> Buscar </button>
      </div>
    
    </form>
  );
}
