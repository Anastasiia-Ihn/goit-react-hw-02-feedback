import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickOption = option =>
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });

  countTotalFeedback = () => {
    const arrAmountRating = Object.values(this.state);
    let total = 0;

    for (const el of arrAmountRating) {
      console.log(el);
      return (total += el);
    }
    // console.log(total);
    // this.setState(prevState => {
    //   console.log(prevState);
    //   return {
    //     prevState.map(() => {

    //    })
    // };
    // });
    // console.log(value + 0);
    // return (value +1)
  };
  // countPositiveFeedbackPercentage = () => {
  // total = good + neutral + bad
  // const meanGood = 2;
  // const meanNeutral = 1.5;
  // const meanBad = 1
  //   return (((good * meanGood) + (neutral * meanNeutral) + (bad * meanBad)) / total)
  //  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClickOption}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={0}
            // onSumOpinions={this.countTotalFeedback}
          ></Statistics>
          <Notification message="There is no feedback" />
        </Section>
      </>
    );
  }
}
