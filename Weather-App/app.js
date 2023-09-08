$(document).ready(function () {
    $("#search").focus(function () {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function () {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function () {
        if ($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
        } else {
            $(".go-icon").removeClass("go-in");
        }
    });
    // $(".go-icon").click(function () {
    //     $(".search-form").submit();
    // });
});


const locationButton = document.querySelector('.location-button');
let bgVideo = document.getElementById('bgvideo')
let searchBox = document.getElementById('search')
let main = document.getElementById('main')
let dateContainer = document.getElementById('dateBox')
let weatherBox = document.getElementById('WeatherBox')
let precipitation = document.getElementById('precipitation')
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind')
let GithubLink = document.getElementById('btnClick')
let value;
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentdata = new Date()

console.log(dayNames[currentdata.getDay()],"Testing---------------------------------")

const successCallback = (position) => {


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=8b860b511548557e8bd3725ba45170cc&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            RenderOnLoad(data)
        })
        .catch((error) => {
            // console.error('Fetch error:', error);
        });




}

const errorCallback = (error) => {
    console.error(swal("Please Allow Location ", "", "error"));
    setInterval(function(){
        location.reload()
        clearInterval()
    },2000)
    
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);



searchBox.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        RenderCityData(searchBox.value)
        searchBox.value = ''
    }
});

function RenderCityData(cityname) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=8b860b511548557e8bd3725ba45170cc&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(swal("City Name Not Found", "", "error"));

            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            RenderOnLoad(data)
        })
        .catch((error) => {
            // console.error('Fetch error:', error);
        });
}



function RenderOnLoad(object) {

    if (object.weather[0].main === "Clouds") {
        bgVideo.src = `video/cloud.mp4`
        console.log(object.weather[0].main)
    }
    else if (object.weather[0].main === "Clear") {
        bgVideo.src = `video/clear.mp4`

    }
    else if (object.weather[0].main === "Haze") {
        bgVideo.src = `video/haze.mp4`
        console.log(object.weather[0].main)

    }
    else if (object.weather[0].main === "Rain") {
        bgVideo.src = `video/rain.mp4`
        console.log(object.weather[0].main)

    }

    else if (object.weather[0].main === "Drizzle") {
        bgVideo.src = `video/Drizzle.mp4`
        console.log(object.weather[0].main)

    }
    else if (object.weather[0].main === "Sunny") {
        bgVideo.src = `video/Sunny.mp4`
        console.log(object.weather[0].main)

    }
    else if (object.weather[0].main === "Smoke") {
        bgVideo.src = `video/Smoke.mp4`
        console.log(object.weather[0].main)

    }


    dateContainer.lastElementChild.innerText = `${object.name}, ${object.sys.country}`
    document.querySelector('.date-day').innerText = `${currentdata.getDate()} ${monthNames[currentdata.getMonth()]} ${currentdata.getFullYear()} `
    dateContainer.firstElementChild.innerText = `${dayNames[currentdata.getDay()]}`
    dateContainer.firstElementChild.style.paddingRight = '50px';

    //-----------------------------------------------------------------------------------------------------//
    let iconurl = "http://openweathermap.org/img/w/" + object.weather[0].icon + ".png";
    weatherBox.firstElementChild.innerHTML = `<img src="${iconurl}" alt="weather-icon" id="icon">`
    document.querySelector('.weather-temp').innerText = `${Math.round(object.main.temp)} °C`
    weatherBox.lastElementChild.innerHTML = `${object.weather[0].main}`
    //-----------------------------------------------------------------------------------------------------//
    precipitation.innerHTML = `${object.clouds.all} %`
    humidity.innerHTML = `${object.main.humidity} %`
    wind.innerHTML = `${Math.round(object.wind.speed)} m/s`

    // console.log(object.main.temp_max, object)

}
function responsive() {
    var width = window.innerWidth;
    if (width < 768) {
        // Make the `container` element full width.
        document.querySelector('.container').classList.add('container-fluid');
        // Remove the `float` property from the `weather-side` and `info-side` elements.
        document.querySelector('.weather-side').classList.remove('float');
        document.querySelector('.info-side').classList.remove('float');
    } else {
        // Remove the `container-fluid` class from the `container` element.
        document.querySelector('.container').classList.remove('container-fluid');
        // Add the `float` property back to the `weather-side` and `info-side` elements.
        document.querySelector('.weather-side').classList.add('float');
        document.querySelector('.info-side').classList.add('float');
    }
}

window.addEventListener('resize', responsive);
let GithubLinkOpen=()=>{
    window.open('https://github.com/mutayyab01')
}
GithubLink.addEventListener('click', GithubLinkOpen);