export const Types = {
  GET_CUSTOMER_REQUEST: 'customer/get_customer_request',
  GET_CUSTOMER_SUCCESS: 'customer/get_customer_success',
  UPDATE_ANSWERS: 'customer/update_answers',
  SAVE_FEEDBACK: 'customer/save_feedback',
  GET_SERVICE_ERROR: 'customer/get_service_error',
  POST_SERVICE_ERROR: 'customer/post_service_error',
  POST_SERVICE_SUCCESS: 'customer/post_service_success',
  ACTIVE_PROCESS_LOADING: 'customer/active_process_loading',
  DEACTIVE_PROCESS_LOADING: 'customer/deactive_process_loading'
};

export const getCustomerRequest = () => ({
  type: Types.GET_CUSTOMER_REQUEST
});

export const getCustomerSuccess = ({details, questions, answers, feedbackTitle, appLoading}) => ({
  type: Types.GET_CUSTOMER_SUCCESS,
  payload: {
    details,
    questions,
    answers,
    feedbackTitle,
    appLoading
  }
});

export const updateAnswers = (questionId, value, answers) => ({
  type: Types.UPDATE_ANSWERS,
  questionId,
  value,
  answers
})

export const saveFeedback = (data) => ({
  type: Types.SAVE_FEEDBACK,
  payload: {
    data
  }
});

export const getServiceError = ({geterror}) => ({
  type: Types.GET_SERVICE_ERROR,
  payload: {
    geterror
  }
});

export const postServiceError = ({posterror}) => ({
  type: Types.POST_SERVICE_ERROR,
  payload: {
    posterror
  }
});

export const postServiceSuccess = ({success, processLoading}) => ({
  type: Types.POST_SERVICE_SUCCESS,
  payload: {
    success,
    processLoading
  }
});

export const activeProcessLoading = () => ({
  type: Types.ACTIVE_PROCESS_LOADING,
  payload: {
    processLoading: true
  }
});

export const deactiveProcessLoading = () => ({
  type: Types.DEACTIVE_PROCESS_LOADING,
  payload: {
    processLoading: false
  }
});

