function parseMillisec(milliseconds) {
    let date = new Date(milliseconds * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
}
export default parseMillisec;