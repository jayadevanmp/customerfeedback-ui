import {Types} from '../actions/customer';

const INITIAL_STATE = {
  details: [],
  questions: [],
  answers: [],
  feedbackTitle: '',
  appLoading: true,
  geterror: '',
  posterror: '',
  success: '',
  processLoading: false
}

export default function customer(state = INITIAL_STATE, action){
  switch(action.type) {
    case Types.GET_CUSTOMER_SUCCESS: {
      return {
        details: action.payload.details,
        questions: action.payload.questions,
        answers: action.payload.answers,
        feedbackTitle: action.payload.feedbackTitle,
        appLoading: action.payload.appLoading,
      }
    }
    case Types.UPDATE_ANSWERS: {
      const questionId = action.questionId;
      const value = action.value;
      let answers = action.answers;

      answers.forEach((element, index) => {
        if(element.feedbackQuestionId === questionId) {
          answers[index].feedbackAnswer = value;
        }
      });
      return {
        ...state,
        answers: answers
      }
    }
    case Types.GET_SERVICE_ERROR: {
      return {
        ...state,
        geterror: action.payload.geterror
      }
    }
    case Types.POST_SERVICE_ERROR: {
      return {
        ...state,
        posterror: action.payload.posterror
      }
    }
    case Types.POST_SERVICE_SUCCESS: {
      return {
        ...state,
        success: action.payload.success,
        processLoading: action.payload.processLoading
      }
    }
    case Types.ACTIVE_PROCESS_LOADING: {
      return {
        ...state,
        processLoading: action.payload.processLoading
      }
    }
    case Types.DEACTIVE_PROCESS_LOADING: {
      return {
        ...state,
        processLoading: action.payload.processLoading
      }
    }
    default: {
      return state;
    }
  }
}