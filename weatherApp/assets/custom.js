const apiKey = "d862613f3b33985a23a68a1a17cc8192";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox= document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const weatherIcon=document.querySelector('.weather_icon');

        async function weatherCheck(city){
            const response =await fetch(apiUrl +city+ `&appid=${apiKey}`);
           

            if (response.status == 404){
              // Example of triggering SweetAlert
            Swal.fire({
            title: 'Invalid country name',
            icon: 'error',
            confirmButtonText: 'OK'
            });


            }else{
                var data = await response.json();
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = data.main.temp + "°C";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src ="./assets/images/cloud.png";

            }else if(data.weather[0].main == "Rain"){
                weatherIcon.src ="./assets/images/rain.png";

            }else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src ="./assets/images/drizzle.png";

            }else if(data.weather[0].main == "Mist"){
                weatherIcon.src ="./assets/images/mist.png";

            }else if(data.weather[0].main == "Clear"){
                weatherIcon.src ="./assets/images/clear.png";

            }else if(data.weather[0].main == "Smoke"){
                weatherIcon.src ="./assets/images/smoke.png";

            }

            document.querySelector('.weather').style.display= "block";

            console.log(data);
        }
            }
         
        
        searchBtn.addEventListener('click',()=>{
            weatherCheck(searchBox.value);
        } )