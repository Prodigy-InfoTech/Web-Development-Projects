import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CloudIcon } from "@heroicons/react/24/solid";
import './App.css';
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "./LoadingComponent";

function App() {
  const [isSearch, setIsSearch] = useState(false);
  const [inputCity, setInputCity] = useState(null);
  const [errMsg, setErrMsg] =useState(false);
  const [weatherData, setWeatherData] = useState({
    city: null,
    temp: null,
    feelsLike: null,
    visibility: null,
    wind: null,
  });

  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const calculateTime = () => {
    let dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    if (hours > 12) {
      hours = hours - 12;
    }
    let finalTime = + (hours) + ":" + (minutes < 10 ? "0" : "") + minutes + (hours < 12 ? " am" : " pm");
    setTime(finalTime);
  }

  const handleSearch = (e) => {
    setIsSearch(true);
    setInputCity(e.target.value);
  }

  setInterval(() => {
    calculateTime();
  }, 60000);

  useEffect(() => {
    const api_key = "your_api_key"; //paste here your api key go to https://openweathermap.org/api to learn more.
    setDate(Date().slice(0, 15));

    setTimeout(() => {
      inputCity && axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${api_key}&units=metric`)
        .then((data) => {
          setWeatherData({
            city: data.data.name,
            temp: Math.round(data.data.main.temp),
            feelsLike: Math.round((data.data.main.feels_like)),
            wind: data.data.wind.speed,
            weather: data.data.weather[0].main,
            weather_dsc: data.data.weather[0].description,
            humidity: data.data.main.humidity,
            clouds: data.data.clouds.all,
          });
          console.log(data.data)
          setIsSearch(false);
        }).catch((err) => setErrMsg(true))
    }, 1500);

  }, [inputCity])
  

  return (
    <div className="flex justify-center align-middle bg-blue-300 w-[100vw] h-[100vh]">
      <div className=' flex flex-col justify-between align-middle w-[300px] lg:w-[500px]  bg-gradient-to-b from-indigo-500 to-blue-400 p-3 my-auto rounded-2xl'>
        <div>
          <div className="flex justify-end pb-4 relative">
            <input onChange={(e) => handleSearch(e)} placeholder="Enter Your city" className=" bg-white/20 rounded px-5 w-[60%] placeholder:text-white/60 placeholder:text-sm outline-none text-white text-sm py-1 absolute right-8" />
            {isSearch && <Loading />}
          </div>
          <div className={`flex font-semibold text-lg justify-center text-white  ${isSearch ? "" : " mt-7"}`}>
            <MapPinIcon className="h-7" />
            <h1>{weatherData.city}</h1>
          </div>
          <div className="text-center text-gray-200/40 font-semibold">{date} {time}</div>
          <div className="flex text-white justify-center align-middle pt-3">
            <CloudIcon className="h-[3.5rem] mt-2" />
            <p className="flex text-6xl">{weatherData.temp}<p>°</p></p>
          </div>
          <p className="text-center font-semibold text-white">Feels like {weatherData.feelsLike}°</p>
            <p className="text-center font-semibold text-white">Sky - {weatherData.weather_dsc}</p>
        </div>

        <div>
          <div className="flex justify-center mx-auto align-middle text-white text-sm bg-white/20 p-5 rounded-lg mt-4">
            <div className="flex">
              <p className="my-auto pr-2"></p>
              <p className=" border-r-2 pr-3 ">Wind <p className="font-semibold">{weatherData.wind}m/s</p></p>
            </div>
            <div className="flex pl-2">
              <p className="my-auto pr-2"></p>
              <p className=" border-r-2 pr-3">Humidity <p className="font-semibold">{weatherData.humidity}%</p></p>
            </div>
            <div className="flex pl-2">
              <p className="my-auto pr-2"></p>
              <p>Cloud <p className="font-semibold">{weatherData.clouds}%</p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
