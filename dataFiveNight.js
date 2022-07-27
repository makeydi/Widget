function dataFiveNights(data) {
  const dataNights = data.list.filter((reading) =>
    reading.dt_txt.includes("3:00:00")
  );
  return dataNights;
}
export default dataFiveNights;
