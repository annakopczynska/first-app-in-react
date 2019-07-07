import React from 'react';

const Result = props => {
    const { err, date, sunrise, sunset, temp, pressure, wind, city } = props.weather;

    let content = null;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    if (!err && city) {
        content = (
            <div className="result">
                <h1>{`Wyszukiwanie dla miasta: ${city}`}</h1>
                <p>{`Dane dla daty i godziny: ${date}`}</p>
                <p>{`Wschód słońca o godzinie: ${sunriseTime}`}</p>
                <p>{`Zachód słońca o godzinie: ${sunsetTime}`}</p>
                <p>{`Aktualna temperatura: ${temp} C`}</p>
                <p>{`Ciśnienie atmosferyczne: ${pressure} hPa`}</p>
                <p>{`Siła wiatru: ${wind} km/h`}</p>
            </div>
        )
    } else if (err && city) {
        content = (
            <div className="error">{`Nie mamy w bazie ${city}`}</div>
        )
    } else {
        content = (
            <div className="appTitle">Wpisz miasto aby sprawdzić dla niego dane pogodowe</div>
        )
    }

    return (
        <main className="weather">
            {content}
        </main>
    );
}

export default Result;