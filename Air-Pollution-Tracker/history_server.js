
// Air quality index 
        
var apival= history_config.API_VAL;
        
        
// Fetch air quality index  
var latitude= localStorage.getItem('lat');
var longitude= localStorage.getItem('lon');
var standard= "local";

const fetchaqi_history = async (lat, lon, start_date, end_date, standard_time) =>{
    
    var d_start= new Date(start_date);
    var d_end= new Date(end_date);
    if(d_start < d_end){
        fetch("https://api.weatherbit.io/v2.0/history/airquality?lat="+lat+"&lon="+lon+"&start_date="+start_date+"&end_date="+end_date+"&tz="+standard_time+"&key="+apival
        )
        .then((res) => res.json())
        .then((res) => display_history(res.data));
        document.getElementById("results").style.display="none";
        document.getElementById("graph").style.display="block";

    }
    else{
        document.getElementById("results").innerHTML= "Invalid Date selection";
        document.getElementById("results").style.display="block";
        document.getElementById("graph").style.display="none";
    }
}



// display data 

const display_history = (data) =>{

    const aquival = data[0].aqi;
    console.log(aquival);

    var xValues = [];
    var yValues =[];


    const size= data.length;
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", 
                   "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for(let i=size-1; i>=0; i=i-4)
    {
        let dt= data[i].datetime;
        let arr= dt.split(":")
        let d= new Date(arr[0]);
    
        let val= arr[1];
        if(size<=20)
        val+=":00:00";
        else
        val+="hr";

        xValues.push(val);
    }
    

    for(let i=size-1; i>=0; i=i-4)
    yValues.push(data[i].aqi);



     new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
        data: yValues,
        borderColor: "red",
        fill: false
        }]
    },
    options: {
        legend: {display: false}
    }
    });



}

// search data 

const searchFunction = () =>{
    console.log("searchFunction");
    fetchaqi_history(latitude, longitude, document.querySelector(".startDate").value, document.querySelector(".endDate").value, standard);
}

var el= document.querySelector('.end');
if(el){
el.addEventListener("click",function (){
    console.log(latitude);
    console.log(longitude);
    searchFunction();
})
}

