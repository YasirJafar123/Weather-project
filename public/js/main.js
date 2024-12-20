
const cityName = document.getElementById('cityName'); //get input city name
const submitBtn = document.getElementById('submitBtn'); // get button
const city_name = document.getElementById('city_name'); //get output of enter city name

const temp_staus = document.getElementById('temp_staus'); //get temperature status

// calcius
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.midlle_layer');


const getinfo = async (event) => {
    event.preventDefault();

    // check the date 
    const get_cutrrent_day = () => {
        let weekday = new Array(7);
        weekday[0] = 'Sunday';
        weekday[1] = 'Monday';
        weekday[2] = 'Tuesday';
        weekday[3] = 'Wednesday';
        weekday[4] = 'Thusrday';
        weekday[5] = 'Friday';
        weekday[6] = 'Saturday';

        let currentTime = new Date();
        days = weekday[currentTime.getDay()];
        let day = document.getElementById('day');
        day.innerText = days;
    }
    get_cutrrent_day();

    //  check the date and month 

    const currentDate = () => {
        let month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let current = new Date();
        let months = month[current.getMonth()];
        let date = current.getDate();
        const today_data = document.getElementById('today_data');
        today_data.innerText = `${date} ${months} `
    }
    currentDate();

    // input city here and store it

    let cityVal = cityName.value;

    // if did not write city name
    if (cityVal === '') {
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else {
        // check name is correct then
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f728c9ccb458fc87f5367f79e3377a3`;
            const response = await fetch(url);
            const data = await response.json(); //json data / original object
            const arrData = [data]; data //sort in array

            // check the temprature data in array
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp_real_val.innerText = arrData[0].main.temp;

            // check temprature mode 
            const tempMod = arrData[0].weather[0].main;
            if (tempMod == "Clear") {
                temp_staus.innerHTML = "<i class='fas fa-sun'style ='color: #eccc68;'></i>";
            }
            else if (tempMod == "Clouds") {
                temp_staus.innerHTML = "<i class='fas fa-cloud'style ='color: #f1f2f6;''></i>";
            }
            else if (tempMod == "Rain") {
                temp_staus.innerHTML = "<i class='fas fa-cloud-rain'style ='color: #a4b0be;'></i>";
            }
            else if (tempMod == "Smook") {
                temp_staus.innerHTML = "<i class='fas fa-cloud'style ='color:rgb(202, 211, 222);'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun'style ='color: #eccc68;'></i>";
            }
            datahide.classList.remove('data_hide'); // remove the hidden data and show it 

        }
        // if name is not correct
        catch {
            city_name.innerText = `Plz write the city name properly`;
            datahide.classList.add('data_hide'); //data hide
        }
    }
}
submitBtn.addEventListener('click', getinfo);