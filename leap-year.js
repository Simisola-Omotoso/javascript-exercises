year = 2025;

function leapYear(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        return "Leap Year";
    } else {
        return "Regular Year";
    }
}