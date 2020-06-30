
import { call, put, takeEvery } from 'redux-saga/effects'

function timeOut(){
    setTimeout(()=>{
        console.log(123)
    },2000)
    return {id:1,text:'测试saga'};
}
 
export function * fetchData(action) {
   try {
      const data = yield call(timeOut)
      yield put({type: 'ADD_TODO', ...data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}

//这个方法进行监听一个action, 然后触发操作
export default function * rootSaga() {
    // while(true){
    //   yield take('INCREMENT_ASYNC');
    //   yield fork(incrementAsync);
    // }
  
    // 在这里监听action success ,
    yield takeEvery("ERROR", fetchData)
}
