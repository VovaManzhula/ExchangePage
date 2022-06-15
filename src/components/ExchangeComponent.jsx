import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ExchangeComponent({ data }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const currencies = { currency1: "UAH", currency2: "UAH" };
  var rateObj = state.rate;
  var key = Object.keys(rateObj);
  const rate = rateObj[key[0]];

  function calc1(number1, rate) {
    dispatch({ type: "NUM1", payload: number1 });
    let number2 = number1 * rate;
    dispatch({ type: "NUM2", payload: number2 });
  }

  function calc2(number1, rate) {
    dispatch({ type: "NUM2", payload: number1 });
    let number2 = number1 / rate;
    dispatch({ type: "NUM1", payload: number2 });
  }

  return (
    <div className="ExchangeComponent">
      <form className="ExchangeForm">
        <div>
          <select
            onChange={(e) => {
              currencies.currency1 = e.target.value;
              dispatch({ type: "SET_CURRENCY", payload: currencies });
            }}
          >
            <option value={"UAH"}>UAH</option>
            {data.map((post) => (
              <option key={post.r030 + "1"} value={post.cc}>
                {post.cc}
              </option>
            ))}
          </select>
        </div>
        <input
          type={"text"}
          value={state.number1}
          onChange={(e) => calc1(e.target.value, rate)}
        ></input>
        =
        <input
          type={"text"}
          value={state.number2}
          onChange={(e) => calc2(e.target.value, rate)}
        ></input>
        <div>
          <select
            onChange={(e) => {
              currencies.currency2 = e.target.value;
              dispatch({ type: "SET_CURRENCY", payload: currencies });
            }}
          >
            <option value={"UAH"}>UAH</option>
            {data.map((post) => (
              <option key={post.r030 + "2"} value={post.cc}>
                {post.cc}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}

export default ExchangeComponent;
