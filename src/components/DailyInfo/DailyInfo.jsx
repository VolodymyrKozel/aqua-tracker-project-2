import ChooseDate from '../ChooseDate/ChooseDate.jsx';
import AddWaterBtn from '../AddWaterBtn/AddWaterBtn.jsx';
import WaterList from '../WaterList/WaterList.jsx';
import css from './DailyInfo.module.css';

const DailyInfo = ({ selectedDate, setMonthChange }) => {
  return (
    <>
      <div className={css.dailyInfo}>
        <ChooseDate selectedDate={selectedDate} />
        <AddWaterBtn
          buttonClassName={css.dailyInfoButton}
          iconClassName={css.dailyInfoIcon}
          spanClassName={css.dailyInfoSpan}
          iconId="icon-plus-in-circle"
          iconWidth={30}
          iconHeight={30}
          setMonthChange={setMonthChange}
        />
      </div>
      <WaterList selectedDate={selectedDate} />
    </>
  );
};

export default DailyInfo;
