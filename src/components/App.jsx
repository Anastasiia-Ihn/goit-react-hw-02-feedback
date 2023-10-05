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
    total: 0,
    positivePercentage: 0,
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
    // const {  } = this.state;
    return (
  
      <>
       <h1>hhhhhh</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            // onLeaveFeedback={ }
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          ></Statistics>
          <Notification></Notification>
        </Section>
      </>
    );
  }
}
