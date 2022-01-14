import React from "react";

import "./form-input.styles.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        className="form-input"
        value={otherProps.value}
        onChange={handleChange}
        {...otherProps}
      />

      {label ? (
        <label
          className={`${
            typeof otherProps.value !== undefined
              ? otherProps.value.length
                ? "shrink"
                : ""
              : null
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
