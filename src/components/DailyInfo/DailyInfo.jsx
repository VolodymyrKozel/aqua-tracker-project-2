import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';
import css from './DailyInfo.module.css';

const DailyInfo = () => {
  return (
    <>
      <div className={css.dailyInfo}>
        <ChooseDate />
        <AddWaterBtn
          buttonClassName={css.dailyInfoButton}
          iconClassName={css.dailyInfoIcon}
          spanClassName={css.dailyInfoSpan}
          iconId="icon-plus-in-circle"
          iconWidth={30}
          iconHeight={30}
        />
      </div>
      <WaterList />
    </>
  );
};

export default DailyInfo;
