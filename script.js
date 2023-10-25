let searchBtn = document.querySelector('.search-btn');
let countryInput = document.querySelector('.country-input');

searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);

    fetch(url).then((response) => response.json()).then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].continents[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].population);
        console.log(Object.values(data[0].borders).toString().split(",").join(", "));
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        console.log(data[0].timezones[0])

        resultBox.innerHTML = `
        <img src="${data[0].flags.svg}"
        class="flag-img">

        <h2>${data[0].name.common}</h2>

        <div class="info-box">
            <div class"box-data">
                <h4>Capital : </h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>

        <div class="info-box">
            <div class"box-data">
                <h4>Continents : </h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>

        <div class="info-box">
            <div class"box-data">
                <h4>Boders : </h4>
                <span>${Object.values(data[0].borders).toString().split(",").join(", ")}</span>
            </div>
        </div>

        <div class="info-box">
            <div class"box-data">
                <h4>Currencies : </h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>

        <div class="info-box">
            <div class"box-data">
                <h4>Languages : </h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>

        <div class="info-box">
            <div class"box-data">
                <h4>Population : </h4>
                <span>${data[0].population}</span>
            </div>
        </div>

        <div class="info-box">
            <div class"box-data">
                <h4>Time Zone : </h4>
                <span>${data[0].timezones[0]}</span>
            </div>
        </div>

        `;
    }).catch(() => {
        if(countryName.length == 0){
            resultBox.innerHTML = `<h3>The input field can not be an empty.</h3>`;
        }else{
            resultBox.innerHTML = `<h3>Please enter a valid country name</h3>`;
        }
    });
});