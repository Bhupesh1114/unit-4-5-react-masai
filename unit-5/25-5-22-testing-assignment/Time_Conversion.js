function timeConversion(time) {
    let seconds = time / 1000;
    let minutes = seconds / 60;
    if (seconds < 60) {
        return seconds.toFixed(2) + " second";
    } else if (seconds >= 60) {
        if (minutes >= 60) {
            let hour = minutes / 60;
            return hour.toFixed(2) + " hour"
        } else {
            return minutes.toFixed(2) + " minute";
        }
    }
}

module.exports = timeConversion;