const apiKey = "dad534e1b6f44c17a1400dcb6a55ae63";

const getWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City not found`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export { getWeatherData };
