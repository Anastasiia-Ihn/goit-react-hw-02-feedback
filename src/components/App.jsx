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
  // this.setState((prevState) => {
  //   return {
  //     [option]: prevState[option] + 1,
  //   };
  // });
  // countTotalFeedback=()=>{

  // }
  // countPositiveFeedbackPercentage = () => {

  //  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            // onLeaveFeedback={ }
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={0}
            positivePercentage={0}
          ></Statistics>
          <Notification message="There is no feedback" />
        </Section>
      </>
    );
  }
}
