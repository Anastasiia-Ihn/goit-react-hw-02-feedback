import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

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
    let total = 0;
    const arrAmountRating = Object.values(this.state);

    total = arrAmountRating[0] + arrAmountRating[1] + arrAmountRating[2];

    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let procent = 0;
    let quntity = this.countTotalFeedback();
    console.log(quntity);
    procent = Math.round(parseFloat(quntity / 3) * 100);
    return `${procent} %`;
  };

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
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </>
    );
  }
}
