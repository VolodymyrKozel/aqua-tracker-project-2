export const getSteps = t => [
    {
      selector: '.first-step',
      content: t('guide.start'),
      position: 'right',
      style: {
        borderRadius: '15px',
      },
      highlightedMaskClassName: 'highlighted-mask',
    },
    {
      selector: '.reactour__userPanelBtn',
      content: t('guide.userSettings'),
      position: 'bottom',
    },
    {
      selector: '.reactour__userPanelInfo',
      content: t('guide.userPanelInfo'),
      position: 'left',
    },
  
    {
      selector: '.reactour__waterAddCard',
      content: t('guide.addWaterRecord'),
      position: 'left',
    },
    {
      selector: '.reactour__waterAdd',
      content: t('guide.addWaterRecordHere'),
      position: 'left',
      style: {
     highlightPadding: 30,
      },
    },
    {
      selector: '.reactour__waterCardList',
      content: t('guide.waterRecordList'),
      position: 'bottom',
    },
    {
        selector: '.reactour__waterMonthInfo',
        content: t('guide.monthlyInfo'),
        position: 'top',
      },
      {
        selector: '.reactour__waterStatisticInfo',
        content: t('guide.viewStats'),
        position: 'left',
      },
      {
        selector: '.reactour__waterDailyNorma',
        content: t('guide.dailyNorma'),
        position: 'right',
      },
      {
        selector: '.reactour__waterPercentage',
        content: t('guide.progressBar'),
        position: 'top',
      },
      {
        selector: '.reactour__Bye',
        content: t('guide.thanks'),
        position: 'button',
      },
    ];