import instance from './instance';

export const addWaterDaily = async formData => {
  const response = await instance.post('/water', formData);
  return response.data;
};

export const editWaterRecord = async (id, day) => {
  const { data } = await instance.patch(`/water/${id}`, day);
  return data;
};

export const deleteWaterRecord = async id => {
  const response = await instance.delete(`/water/${id}`);
  return response.data.id;
};

export const requestWaterDaily = async date => {
  const { data } = await instance.get('/water/daily', {
    params: { date },
  });
  return data;
};

export const requestWaterMonthly = async ({ month, year }) => {
  const { data } = await instance.get('/water/monthly', {
    params: { month, year },
  });
  return data;
};
