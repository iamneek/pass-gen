import React, { useState } from "react";

const Options = ({
  handleIncludeNumbersChange,
  handleIncludeSymbolsChange,
  handlePassLengthChange,
  passLength,
}) => {
  return (
    <div className="options_pass">
      <div className="password_length_option">
        <span>Password Length: {passLength}</span>
        <input
          type="range"
          min={6}
          max={30}
          value={passLength}
          onChange={(e) => {
            handlePassLengthChange(e);
          }}
          className="range_pass"
        />
      </div>
      <div className="additions">
        <div className="numbers_option">
          <input
            type="checkbox"
            name="radio"
            id="numbers_radio"
            onChange={handleIncludeNumbersChange}
          />
          <label htmlFor="numbers_radio">Numbers</label>
        </div>
        <div className="symbols_option">
          <input
            type="checkbox"
            name="radio2"
            id="symbols_radio"
            onChange={handleIncludeSymbolsChange}
          />
          <label htmlFor="symbols_radio">Symbols</label>
        </div>
      </div>
    </div>
  );
};

export default Options;
