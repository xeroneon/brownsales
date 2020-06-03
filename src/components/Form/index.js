import React, { useState } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  &::before {
    height: ${(props) => (props.hasValue ? "100%" : "4px")};
  }

  &::after {
    opacity: ${(props) => (props.hasValue ? 1 : 0)};
    transform: rotate(-90deg)
      ${(props) =>
        props.hasValue ? "translate(85%, -45%)" : "translate(50%, -20%)"};
  }
`;

const Form = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [confirm, setConfirm] = useState();
  const [error, setError] = useState();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => {
        props.toggleForm(false);
      })
      .catch((error) => alert(error));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const checkForm = () => {
    if (
      !form.name.match(/([\u00c0-\u01ffA-Za-z']{1,30})\w+/g) ||
      !form.email.match(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/) ||
      !form.phone.match(
        /(\(?)([2-9{1}0-9{2}])(\)?)(-?\s?\.?)([\d{3}])(-?\s?\.?)(\d{4})/
      ) ||
      form.message.length < 5
    ) {
      setConfirm(false);
      return setError(
        "Please make sure all the fields are filled out and valid!"
      );
    }

    return setConfirm(true);
  };

  return (
    <div className="inquiry">
      {!error && confirm && (
        <div className="inquiry--confirm">
          <p>Are you sure you want to send an inquiry?</p>

          <button
            onClick={() => setConfirm(false)}
            className="inquiry--confirm__cancel"
          >
            Let me think about it more
          </button>
          <button onClick={handleSubmit} className="inquiry--confirm__submit">
            yes I'm sure!
          </button>
        </div>
      )}
      <div className="inquiry--title">send us an inquiry.</div>
      <form className="inquiry--form">
        <div className="inquiry--input__container">
          <input
            className="inquiry--input"
            disabled={confirm}
            name="name"
            value={form.name}
            onChange={handleInput}
          />
          <StyledLabel
            className="inquiry--input__label"
            htmlFor="name"
            name="name"
            hasValue={form.name.length > 0 ? true : false}
          >
            Name:
          </StyledLabel>
        </div>
        <div className="inquiry--input__container">
          <input
            className="inquiry--input"
            disabled={confirm}
            name="email"
            value={form.email}
            onChange={handleInput}
          />
          <StyledLabel
            className="inquiry--input__label"
            htmlFor="email"
            name="email"
            hasValue={form.email.length > 0 ? true : false}
          >
            Email:
          </StyledLabel>
        </div>
        <div className="inquiry--input__container">
          <input
            className="inquiry--input"
            disabled={confirm}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleInput}
          />
          <StyledLabel
            className="inquiry--input__label"
            htmlFor="phone"
            name="phone"
            hasValue={form.phone.length > 0 ? true : false}
          >
            Phone:
          </StyledLabel>
        </div>
        <div className="inquiry--input__container">
          <textarea
            className="inquiry--input"
            disabled={confirm}
            name="message"
            value={form.message}
            onChange={handleInput}
          />
          <StyledLabel
            className="inquiry--input__label"
            htmlFor="message"
            name="message"
            hasValue={form.message.length > 0 ? true : false}
          >
            Message:
          </StyledLabel>
        </div>
        {error && <span>{error}</span>}

        <button type="button" onClick={checkForm} className="inquiry--submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
