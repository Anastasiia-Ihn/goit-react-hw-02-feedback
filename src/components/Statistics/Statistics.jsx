import { ElTotalOption, ValueOption } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const arrStatList = Object.entries({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  });
  return arrStatList.map(el => {
    return (
      <ElTotalOption key={el[0]}>
        {el[0]}
        <ValueOption>{el[1]}</ValueOption>
      </ElTotalOption>
    );
  });
};
// export const Statistics = props => {
//   return (
//     <ul>
//       {props.map(el => {
//         return <ElTotalOption>{el}</ElTotalOption>;
//       })}
//     </ul>
//   );
// };
