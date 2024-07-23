export function addPercentage(state, data) {
  console.log('sate', state);
  const currentPercentage =
    state.waterDataMonth[state.waterDataMonth.length - 1].percentage;
  const dailyNorma = 1800;
  const addWater = data.volume;
  const newPercentage =
    Math.round(addWater / (dailyNorma / 100)) + currentPercentage;

  return newPercentage;
}
