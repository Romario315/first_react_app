import React, { useState } from "react";
import "./CostForm.css";

const CostForm = () => {
  const [inputDesciption, setInputDesciption] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputDate, setInputDate] = useState("");

  const descriptionChangeHandler = (e) => {
    setInputDesciption(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setInputPrice(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      name: inputDesciption,
      price: inputPrice,
      date: new Date(inputDate),
    };

    console.log(costData);
    setInputDesciption("");
    setInputPrice("");
    setInputDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            type="text"
            value={inputDesciption}
            onChange={descriptionChangeHandler}
          />
        </div>
      </div>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            value={inputPrice}
            onChange={priceChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
      </div>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input
            value={inputDate}
            onChange={dateChangeHandler}
            type="date"
            min="2019 - 01 - 01"
            max="2023 - 7 - 31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
