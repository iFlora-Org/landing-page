// Weather Worker for fetching data from Open-Meteo asynchronously
self.onmessage = async function (e) {
    const cityName = e.data;
    if (!cityName) return;

    try {
        // 1. Geocoding: Get coordinates for the city
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            self.postMessage({ error: 'City not found' });
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Fetch Weather Data (Current + 7-day Hourly History/Forecast)
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,uv_index&timezone=auto`);
        const weatherData = await weatherResponse.json();

        // 3. Combine and return data
        self.postMessage({
            city: name,
            country: country,
            coords: { lat: latitude, lon: longitude },
            current: weatherData.current,
            units: weatherData.current_units,
            hourly: weatherData.hourly
        });

    } catch (error) {
        self.postMessage({ error: 'Failed to fetch weather data: ' + error.message });
    }
};
