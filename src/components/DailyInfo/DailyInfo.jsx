import React from 'react';
import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <>
      <div className={css.dailyInfo}>
        <ChooseDate />
        <AddWaterBtn />
      </div>
      <WaterList />
    </>
  );
};

export default DailyInfo;
