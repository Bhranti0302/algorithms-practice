/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    hour = hour % 12;

    const hourAngle = (hour * 30) + (minutes * 0.5);
    const minuteAngle = minutes * 6;

    const diff = Math.abs(hourAngle - minuteAngle);

    return Math.min(diff, 360 - diff);
};