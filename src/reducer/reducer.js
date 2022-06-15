

let data = { isFetching: true ,currencies:{currency1:"UAH",currency2:"UAH"},rate:{UAH_UAH:1},number1:0,number2:0};
fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
  .then((res) => res.json())
  .then((res) => (data.rates = res))
  






export function reducer(state = data, action) {
  switch (action.type) {
    case "HIDE_LOADER":{
      return {  ...state,
        isFetching:false}
    }
    case "SET_RATE":{
      return {  ...state,
      rate:action.payload}
    }
    case"NEW_RATE":{
      return{
        ...state,
        exRate:action.payload
      }
    }
    case "NUM1":{
      return {  ...state,
      number1:action.payload}
    }
    case "NUM2":{
      return {  ...state,
     number2:action.payload}
    }
    
    default:
      return state;
  }
}
