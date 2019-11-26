import React, {Component} from 'react';
import {
  MainContainer, Wrapper, Header, Logo,
  Footer, Heading, Description, FlexContainer,
  DatePickerContainer, PlacePickerContainer,
  SecondaryHeading, FirstNameContainer, Error,
  LastnameContainer, ContactNumberContainer,
  OccupationContainer, EmailIdContainer,
  QuestionsHeaderContainer, QnsHeaderLeftContainer,
  QnsLabelContainer, SubmitButtonContainer,
  Button, Input, QnsSectionHeading, QnsContainer,
  QuestionDesktopView, QnsInput, AnswersWrapper, Answer, 
  RadioButton, RadioButtonLabel, DisplayLabel, 
  Select, Span, FieldWrapper, QnsInputLabel,
  SuccessMessage, LoadingContainer, Loader
} from '../../styles/styles';
import { COMMON, REGEX, SUCCESSMESSAGE } from '../../constants/common';
import DatePicker from "react-datepicker";
import "../../styles/react-datepicker.css";
import { countries } from "../../mocks/placeOptions";
import PropTypes from 'prop-types';
import LoadingOverlay from 'react-loading-overlay';
import ScaleLoader from 'react-spinners/ScaleLoader';

class FeedbackForm extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.customer.firstName, 
      lastName: this.props.customer.lastName,
      phoneNumber: this.props.customer.phoneNumber,
      email: this.props.customer.email,
      occupation: this.props.customer.occupation,
      place: this.props.customer.place,
      startDate: new Date(this.props.customer.date),
      errors: {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        occupation: '',
        email: ''
      },
      formDisable: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleChange(key) {
    return function (e) {
      let errors = this.state.errors;
      switch (key) {
        case 'firstName': 
          if (e.target.value === '' || REGEX.ALPHAANDSAME.test(e.target.value)) {
            errors.firstName = 
            e.target.value.length < 1
              ? 'First Name Required!'
              : '';
              this.setState({errors, [key]: e.target.value, firstName: e.target.value});
          }
        break;
        case 'lastName':
          if (e.target.value === '' || REGEX.ALPHAANDSAME.test(e.target.value)) {
            errors.lastName = 
            e.target.value.length < 1
              ? 'Last Name Required!'
              : '';
              this.setState({errors, [key]: e.target.value, lastName: e.target.value});
          }
        break;
        case 'phoneNumber':
          if (e.target.value === '' || REGEX.NUMBERSANDSPACE.test(e.target.value)) {
            errors.phoneNumber = 
            e.target.value.length < 10
              ? 'Phone Number must be 10 characters long!'
              : '';
              this.setState({errors, [key]: e.target.value, phoneNumber: e.target.value});
          }
        break;
        case 'occupation':
          if (e.target.value === '' || REGEX.ALPHAANDSAME.test(e.target.value)) {
            errors.occupation = 
            e.target.value.length < 1
              ? 'Qccupation Required!'
              : '';
              this.setState({errors, [key]: e.target.value, occupation: e.target.value});
          }
        break;
        case 'email':
          errors.email = 
          REGEX.VALIDEMAIL.test(e.target.value)
            ? ''
            : 'Email is not valid!';
          this.setState({errors, [key]: e.target.value, email: e.target.value});
        break;
        case 'place':
          this.setState({place: e.target.value});
        break;
        default:
          break;
      }
    }.bind(this);
  }

  handleQnsChange(questionId) {
    return function (e) {
      this.props.updateAnswers(questionId, e.target.value, this.props.answers);
    }.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formattedDate = this.state.startDate.getFullYear() + "-" + (this.state.startDate.getMonth() + 1) + "-" + this.state.startDate.getDate();
    var data = {
      customer: {
        id: this.props.customer.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
        date: formattedDate,
        email: this.state.email,
        occupation: this.state.occupation,
        place: this.state.place,
        type: this.props.customer.type
      },
      feedbackDetails: {
        feedbackQuestions: this.props.answers
      }
    }
    this.props.saveFeedback(data);
  }

  isEnabled = () => {
    const allAnswers = this.props.answers.every(item => item.feedbackAnswer != null);
    return this.state.errors.firstName.length > 0 || this.state.errors.lastName.length > 0 || this.state.errors.phoneNumber.length > 0 || this.state.errors.email.length > 0 || !allAnswers
  }

  render() {
    const feedbackTitle=this.props.feedbackTitle;
    const feedbackDetails=this.props.feedbackDetails;
    this.isEnabled();
    return (
      <LoadingOverlay
        active={this.props.processloading}
        spinner={<ScaleLoader
          color={'#4178be'}
          height={30}
          width={5}
          radius={0}
          margin={'1px'}
        />}
      >
        <form onSubmit={this.handleSubmit}>
          { this.props.success ? 
            <LoadingContainer>
              <Loader>
                <SuccessMessage>{SUCCESSMESSAGE}</SuccessMessage>
              </Loader>
            </LoadingContainer> :
            <MainContainer>
              <Header>
              <a href="https://www.ibm.com/" target="_blank" rel="noopener noreferrer"><Logo>IBM</Logo></a>
              </Header>
              {this.props.posterror && <Error>{this.props.posterror}</Error>}
              <Wrapper>
                <Heading>{COMMON.PAGETITLE}</Heading>
                <Description>{COMMON.PAGEDESCRIPTIONONE}</Description>
                <Description>{COMMON.PAGEDESCRIPTIONTWO}</Description>
                <FlexContainer>
                  <DatePickerContainer>
                    <span>Date</span>
                    <DatePicker
                      showPopperArrow={false}
                      selected={this.state.startDate}
                      onChange={this.handleDateChange}
                      dateFormat="dd/MM/yyyy"
                    />
                  </DatePickerContainer>
                  <PlacePickerContainer>
                    Place 
                    <Select value={this.state.place} onChange={this.handleChange('place')}>
                      {
                        countries.map((item) => <option key={item.code}>{item.name}</option>)
                      }
                    </Select>
                  </PlacePickerContainer>
                </FlexContainer>
                <SecondaryHeading>
                  {COMMON.SECONDARYHEADING}
                </SecondaryHeading>
                <FlexContainer>
                  <FirstNameContainer>
                    First Name
                  </FirstNameContainer>
                  <FieldWrapper>
                    <Input type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} maxLength="20" />
                    {this.state.errors.firstName.length > 0 && 
                      <Span>{this.state.errors.firstName}</Span>}
                  </FieldWrapper>
                  <LastnameContainer>
                    Last Name
                  </LastnameContainer>
                  <FieldWrapper>
                    <Input type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} maxLength="20" />
                    {this.state.errors.lastName.length > 0 && 
                      <Span>{this.state.errors.lastName}</Span>}
                  </FieldWrapper>
                </FlexContainer>
                <FlexContainer>
                  <ContactNumberContainer>
                    Contact Number
                  </ContactNumberContainer>
                  <FieldWrapper>
                    <Input type="text" value={this.state.phoneNumber} onChange={this.handleChange('phoneNumber')} maxLength="10" />
                    {this.state.errors.phoneNumber.length > 0 && 
                      <Span>{this.state.errors.phoneNumber}</Span>}
                  </FieldWrapper>
                  <OccupationContainer>
                    Occupation
                  </OccupationContainer>
                  <FieldWrapper>
                    <Input type="text" value={this.state.occupation} onChange={this.handleChange('occupation')} maxLength="20" />
                    {this.state.errors.occupation.length > 0 && 
                      <Span>{this.state.errors.occupation}</Span>}
                  </FieldWrapper>
                </FlexContainer>
                <FlexContainer>
                  <EmailIdContainer>
                    Email ID
                  </EmailIdContainer>
                  <FieldWrapper>
                    <Input type="email" value={this.state.email} onChange={this.handleChange('email')} maxLength="80"/>
                    {this.state.errors.email.length > 0 && 
                      <Span>{this.state.errors.email}</Span>}
                  </FieldWrapper>
                </FlexContainer>
                <SecondaryHeading>
                  {feedbackTitle}
                </SecondaryHeading>
                <QuestionsHeaderContainer>
                  <QnsHeaderLeftContainer />
                  <QnsLabelContainer>
                    Very Good
                  </QnsLabelContainer>
                  <QnsLabelContainer>
                    Good
                  </QnsLabelContainer>
                  <QnsLabelContainer>
                    Fair
                  </QnsLabelContainer>
                  <QnsLabelContainer>
                    Poor
                  </QnsLabelContainer>
                  <QnsLabelContainer>
                    Very Poor
                  </QnsLabelContainer>
                </QuestionsHeaderContainer>
                {
                  feedbackDetails.map((item, index) => 
                    <div key={index}>
                      <QnsSectionHeading>{item.feedbackQuestionSubCategory}</QnsSectionHeading>
                      {
                        item.questions.map((item, idx) =>
                          <QnsContainer key={idx}>
                            <QuestionDesktopView>
                              {item.feedbackQuestion}
                            </QuestionDesktopView>
                            <QnsInputLabel htmlFor={item.feedbackQuestionId}>{item.feedbackQuestion}</QnsInputLabel>
                              <QnsInput  type="checkbox" id={item.feedbackQuestionId}/>
                            <AnswersWrapper>
                              <Answer>
                                <RadioButton
                                  type="radio"
                                  name={item.feedbackQuestionId}
                                  value="Very Good"
                                  onChange={this.handleQnsChange(item.feedbackQuestionId)}
                                />
                                <RadioButtonLabel />
                                <DisplayLabel>Very Good</DisplayLabel>
                              </Answer>
                              <Answer>
                                <RadioButton
                                  type="radio"
                                  name={item.feedbackQuestionId}
                                  value="Good"
                                  onChange={this.handleQnsChange(item.feedbackQuestionId)}
                                />
                                <RadioButtonLabel />
                                <DisplayLabel>Good</DisplayLabel>
                              </Answer>
                              <Answer>
                                <RadioButton
                                    type="radio"
                                    name={item.feedbackQuestionId}
                                    value="Fair"
                                    onChange={this.handleQnsChange(item.feedbackQuestionId)}
                                />
                                <RadioButtonLabel />
                                <DisplayLabel>Fair</DisplayLabel>
                              </Answer>
                              <Answer>
                                <RadioButton
                                    type="radio"
                                    name={item.feedbackQuestionId}
                                    value="Poor"
                                    onChange={this.handleQnsChange(item.feedbackQuestionId)}
                                />
                                <RadioButtonLabel />
                                <DisplayLabel>Poor</DisplayLabel>
                              </Answer>
                              <Answer>
                                <RadioButton
                                    type="radio"
                                    name={item.feedbackQuestionId}
                                    value="Very Poor"
                                    onChange={this.handleQnsChange(item.feedbackQuestionId)}
                                />
                                <RadioButtonLabel />
                                <DisplayLabel>Very Poor</DisplayLabel>
                              </Answer>
                            </AnswersWrapper>
                          </QnsContainer>
                        )
                      }
                    </div>
                  )
                }
                <SubmitButtonContainer>
                  <Button primary onClick={this.handleSubmit} disabled={this.isEnabled()}>Submit</Button>
                </SubmitButtonContainer>
              </Wrapper>
              <Footer></Footer>
            </MainContainer>
          } 
        </form>
      </LoadingOverlay>
    )
  }
}

FeedbackForm.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  occupation: PropTypes.string,
  place: PropTypes.string,
  startDate: PropTypes.func,
  feedbackTitle: PropTypes.string,
  feedbackDetails: PropTypes.array
}

export default FeedbackForm;
