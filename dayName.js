function dayName(day) {
    const weekdayName = new Date(day*1000).toLocaleString('ru', {weekday: 'long'});
    return weekdayName;
}
export default dayName