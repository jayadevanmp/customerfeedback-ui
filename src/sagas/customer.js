import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put
} from 'redux-saga/effects';
import * as actions from '../actions/customer';
import * as api from '../api/customer';
import ansList from '../mocks/answers'
//import customerDetails from '../mocks/customerDetails'; // use to fetch mock data
import { FEEDBACKTITLE } from '../constants/common';

function* getCustomer() {
  try {
    const result = yield call(api.getCustomer);
    const answersList = ansList.answers.filter(
        e => e.feedbackQuestionCategory === result.data.customer.type);
    const feedbackQuestionSubCategoryList = [...new Set(answersList.map(item =>item.feedbackQuestionSubCategory))];
    const questionsList = feedbackQuestionSubCategoryList.map(item => {
    const qns = answersList.filter(e => e.feedbackQuestionSubCategory === item);
      return {
        feedbackQuestionSubCategory: item,
        questions: qns
      }
    });

    var feedbackTitle = ''
    if (result.data.customer.type === 'AP') {
      feedbackTitle = FEEDBACKTITLE.AP
    } else if (result.data.customer.type === 'PS') {
      feedbackTitle = FEEDBACKTITLE.PS
    } else feedbackTitle = FEEDBACKTITLE.CS

    yield put(actions.getCustomerSuccess({
      details: result.data.customer,
      questions: questionsList,
      answers: answersList,
      feedbackTitle,
      appLoading: false,
      geterror: '',
      posterror: '',
      success: ''
    }));
  }catch(e){
    yield put(actions.getServiceError({
      geterror: 'An error occurred when trying to connect to server. Please try again!'
    }));
  }
}

function* watchGetCustomerRequest() {
  yield takeEvery(actions.Types.GET_CUSTOMER_REQUEST, getCustomer);
}

function* saveFeedback({payload}) {
  try{
    yield put(actions.activeProcessLoading());
    const result = yield call(api.saveFeedback, {
      data: payload.data
    })
    yield put(actions.postServiceSuccess({
      processLoading: false,
      success: result.data.status,
    }));
  }catch(e){
    yield put(actions.deactiveProcessLoading());
    yield put(actions.postServiceError({
      posterror: 'An error occurred when trying to connect to server. Please submit again!'
    }));
  }
}

function* watchSaveFeedbackRequest() {
  yield takeLatest(actions.Types.SAVE_FEEDBACK, saveFeedback);
}

const customerSagas = [
  fork(watchGetCustomerRequest),
  fork(watchSaveFeedbackRequest)
];

export default customerSagas;