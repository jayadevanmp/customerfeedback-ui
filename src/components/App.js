import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/App.css';
import {
  getCustomerRequest, 
  updateAnswers,
  saveFeedback
} from '../actions/customer';
import Loading from './loader/Loading';
import FeedbackForm from '../components/feedback/FeedbackForm';
import PropTypes from 'prop-types';
import { Body, Error } from '../styles/styles';

class App extends Component {

  constructor(props){
    super(props);
    this.props.getCustomerRequest();
  }

  render() {
    const appLoading = this.props.app.customer.appLoading;
    const customer = this.props.app.customer.details;
    const feedbackTitle = this.props.app.customer.feedbackTitle;
    const feedbackDetails = this.props.app.customer.questions;
    const answers = this.props.app.customer.answers;
    return (
      <Body>
        { 
          this.props.app.customer.geterror && 
          <Error>{this.props.app.customer.geterror}</Error>
        }
        {
          appLoading ? 
          <Loading /> 
          :
          <FeedbackForm
            customer={customer}
            feedbackTitle={feedbackTitle}
            feedbackDetails={feedbackDetails}
            updateAnswers={this.props.updateAnswers}
            saveFeedback={this.props.saveFeedback}
            answers={answers}
            geterror={this.props.app.customer.geterror}
            posterror={this.props.app.customer.posterror}
            success={this.props.app.customer.success}
            processloading={this.props.app.customer.processLoading}
          />
        }
      </Body>
    );
  }
}

App.propTypes = {
  app: PropTypes.object,
  appLoading: PropTypes.bool,
  customer: PropTypes.object,
  feedbackTitle: PropTypes.string,
  feedbackDetails: PropTypes.object,
  answers: PropTypes.object
}

export default connect(({app}) => ({app}), {
  getCustomerRequest,
  updateAnswers,
  saveFeedback
})(App);
