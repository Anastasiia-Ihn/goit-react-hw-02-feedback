import {
  ElTotalOption,
  StatisticsList,
  ValueOption,
} from './Statistics.styled';

// export const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) => {
//   const arrStatList = Object.entries({
//     good,
//     neutral,
//     bad,
//     total,
//     positivePercentage,
//   });

//   return arrStatList.map(el => {
//     return (
//       <ElTotalOption key={el[0]}>
//         {el[0]}
//         <ValueOption>{el[1]}</ValueOption>
//       </ElTotalOption>
//     );
//   });
// };

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <ElTotalOption>
        Good:
        <ValueOption>{good}</ValueOption>
      </ElTotalOption>

      <ElTotalOption>
        Neutral:
        <ValueOption>{neutral}</ValueOption>
      </ElTotalOption>
      <ElTotalOption>
        Bad:
        <ValueOption>{bad}</ValueOption>
      </ElTotalOption>
      <ElTotalOption>
        Total:
        <ValueOption>{total}</ValueOption>
      </ElTotalOption>

      <ElTotalOption>
        Positive feedback:
        <ValueOption>{positivePercentage}</ValueOption>
      </ElTotalOption>
    </StatisticsList>
  );
};
