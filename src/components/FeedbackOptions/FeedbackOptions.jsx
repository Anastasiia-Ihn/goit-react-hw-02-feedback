import { BtnOptions } from './FeedbackOptions.styled';

// export const FeedbackOptions = ({ good, neutral, bad }) => {
//   const arrKeysOption = Object.keys({ good, neutral, bad });

//   return arrKeysOption.map(option => {
//     return <BtnOptions key={option}>{option}</BtnOptions>;
//   });
// };

export const FeedbackOptions = ({ options, onLeaveFeedback, onClick }) => {
  const arrOptions = Object.entries(options); // переробляємо в масив для map

  return arrOptions.map(option => {
    return (
      <BtnOptions
        key={option[0]}
        onClick={evt => {
          onLeaveFeedback(evt.target.textContent);
          onClick(1);
        }}
      >
        {option[0]}
      </BtnOptions>
    );
  });
};
