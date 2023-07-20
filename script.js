const iconFeild=document.querySelector(".weatherIcon");
const tempFeild=document.querySelector(".weather h1");
const nameFeild=document.querySelector(".cityName");
const humidityFeild=document.querySelector(".humidity");
const wSpeedFeild=document.querySelector(".wind");
const searchFeild=document.querySelector(".search input");
const SearchBtn=document.querySelector(".btn");

let target="delhi";
const fetchData= async(target)=>{
    try{
        const url=`https://api.weatherapi.com/v1/current.json?key=50d62cb975b54429a1892907231807&q=${target}`;
        const response=await fetch(url);
        const data=await response.json();
        const {
            current: {temp_c , condition:{text,icon},humidity,wind_kph},
            location:{name}
        } =data;
        console.log(data);
        updateDom(icon,temp_c,name,humidity,wind_kph);
    }catch(error){
        alert("Location not found");
    }
}

function updateDom(icon,temp,name,humidity,speed){
    iconFeild.src=icon;
    tempFeild.innerText=`${temp}°C`;
    nameFeild.innerText=name;
    humidityFeild.innerText=`${humidity}%`;
    wSpeedFeild.innerText=`${speed} km/hr`;
}    

SearchBtn.addEventListener("click", ()=>{
    target=searchFeild.value;
    fetchData(target);
})