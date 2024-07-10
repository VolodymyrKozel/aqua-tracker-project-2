import React from 'react';
import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';

const DailyInfo = () => {
  return (
    <div>
      DailyInfo
      <ChooseDate />
      <AddWaterBtn />
      <WaterList />
    </div>
  );
};

export default DailyInfo;
