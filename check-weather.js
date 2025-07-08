function checkWeather(temperature, isRaining) {
    if (temperature > 25) {
        if (isRaining) {
            return "Warm but rainy";
        } else {
            return "Perfect weather";
        }
    } else if (temperature > 15){
        if (isRaining) {
            return "Cold and rainy";
        } else {
            return "Cold but dry";
        }
    }
}