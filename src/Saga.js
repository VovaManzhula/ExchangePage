import { all, put, takeEvery } from "redux-saga/effects";
 

   
async function getRate(currencies) {
 
   const request = await fetch(`https://free.currconv.com/api/v7/convert?q=${currencies.payload.currency1}_${currencies.payload.currency2}&compact=ultra&apiKey=de6c1b8ecae59707e604`)
   .catch((error) => {
      alert("plz 'json-server --w db.json -p 3002'");
    });
    const data = await request.json();
    return data;

 
 }

 function* takeCurrencies(payload){

     let data = yield getRate(payload);
     yield put({ type:"SET_RATE", payload: data });
 }
 
function* inputChangeListener1(payload){
 yield takeEvery("SET_CURRENCY",takeCurrencies)

}

  
   export function* rootSaga() {
       yield all([ inputChangeListener1()
   ]) }