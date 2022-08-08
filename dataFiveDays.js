function dataFiveDays(data) {
    const dataDays = data.list.filter((reading) =>
        reading.dt_txt.includes("15:00:00")
    );
    return dataDays;
} 
export default dataFiveDays;