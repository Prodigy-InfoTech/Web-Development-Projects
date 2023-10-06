

// Air quality index 

let apikey=config.API_KEY;

// Fetch air quality index

var latval;
var lonval;

const fetchaqi = async (city,state,country) =>{
    fetch("https://api.airvisual.com/v2/city?city="+city+"&state="+state+"&country="+country+"&key="+apikey)
    .then((res) => res.json())
    .then((res) => display(res.data));
}

// display data 

const display = (data) =>{
    const {aqius}=data.current.pollution;
    console.log(aqius);
    latval=data.location.coordinates[1];
    lonval=data.location.coordinates[0];
    localStorage.setItem("lat", latval);
    localStorage.setItem("lon", lonval);
    document.querySelector('.aq').innerHTML=aqius;
    if (0<=aqius && aqius<=50) 
    {
        document.getElementById('display').style.backgroundColor="green";
        document.querySelector('.level').innerHTML="Good";
    } 
    else if(51<=aqius && aqius<=100)
    {
        document.getElementById('display').style.backgroundColor="#FFCB42";
        document.querySelector('.level').innerHTML="Moderate";
    }
    else if(101<=aqius && aqius<=150)
    {
        document.getElementById('display').style.backgroundColor="orange";
        document.querySelector('.level').innerHTML="Unhealthy and Sensitive Groups";
    }
    else if(151<=aqius && aqius<=200)
    {
        document.getElementById('display').style.backgroundColor="red";
        document.querySelector('.level').innerHTML="Unhealthy";
    }
    else if(201<=aqius && aqius<=300)
    {
        document.getElementById('.display').style.backgroundColor="purple";
        document.querySelector('.level').innerHTML="Very Unhealthy";
    }
    else if(aqius>=301)
    {
        document.getElementById('.display').style.backgroundColor="maroon";
        document.querySelector('.level').innerHTML="Hazardous";
    }
    getAirquality(latval,lonval);
    // module.exports = {obj_server};
}

// search data 

const search = () =>{
    
    fetchaqi(document.querySelector(".city").value,document.querySelector(".state").value,document.querySelector(".country").value);

}


document.querySelector('.search-btn').addEventListener("click",function (){
    document.querySelector('.aq').style.display="block";
    search();
    
})





// Major Pollutants

var apiid=config.API_ID;


const getAirquality = async (lat,lon)=>{
     await fetch("https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat="+lat+"&lon="+lon+"&appid="+apiid)
     .then((res)=>res.json())
     .then((data)=>setvalue(data))
    
}



const setvalue = (data)=>{
    const co=data.list[0].components.co;
    const nh3=data.list[0].components.nh3;
    const no=data.list[0].components.no;
    const no2=data.list[0].components.no2;
    const o3=data.list[0].components.o3;
    const pm2_5=data.list[0].components.pm2_5;
    const pm10=data.list[0].components.pm10;
    const so2=data.list[0].components.so2;
    document.querySelector('.o3').innerHTML=o3+" μg/mᶟ";
    document.querySelector('.co').innerHTML=co+" μg/mᶟ";
    document.querySelector('.no2').innerHTML=no2+" μg/mᶟ";
    document.querySelector('.pm2').innerHTML=pm2_5+" μg/mᶟ";
    document.querySelector('.so2').innerHTML=so2+" μg/mᶟ";
    document.querySelector('.pm10').innerHTML=pm10+" μg/mᶟ";

   
}
