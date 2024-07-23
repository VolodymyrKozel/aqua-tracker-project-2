function currentPercentage(state, data) {
  const currentPercentage =
    state.waterDataMonth[state.waterDataMonth.length - 1].percentage;

  const addWater = data.volume;
  const newPercentage = Math.round(addWater / (data.dailyNorma / 100));
  return { newPercentage, currentPercentage };
}

export function addPercentage(state, data) {
  const percentage = currentPercentage(state, data);
  return percentage.currentPercentage + percentage.newPercentage;
}

export function deletePercentage(state, data) {
  const percentage = currentPercentage(state, data);
  return percentage.currentPercentage - percentage.newPercentage;
}
