import { useState } from "react";
import Errorcomponent from "./ErrorComponent";

const DEFAULT_FORM_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
};

const DEFAULT_FORM_ERROR_VALUES = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};

const DEFAULT_FORM_TOUCHED_VALUES = {
  firstname: false,
  lastname: false,
  email: false,
  phone: false,
};

function Form() {
  // SOURCE OF TRUTH OF FORM VALUE
  const [form, setForm] = useState(DEFAULT_FORM_VALUES);
  // SOURCE OF TRUTH FOR ERRORS
  const [error, setError] = useState(DEFAULT_FORM_ERROR_VALUES);
  //   Source of truth for touch
  const [touched, setTouched] = useState(DEFAULT_FORM_TOUCHED_VALUES);

  console.log(form, error, "form + error  STATE");

  function isErrorInForm() {
    for (let key in error) {
      if (error[key]) {
        return true;
      }
    }

    return false;
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    console.log("handleFormSubmission");

    // validate(); // Required field are there and no error in error state.
    for (let key in error) {
      if (error[key]) {
        return;
      }
    }

    async function submitForm() {
      const resposne = await fetch("google.com", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await resposne.json();
    }

    submitForm();
  }

  function onChangeHandler(event, key) {
    const value = event.target.value;
    setForm((old) => {
      return {
        ...old,
        [key]: value,
      };
    });

    validate(String(value), key);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function validate(val, key) {
    const value = String(val);

    const localError = {};

    if (key === "firstname" || key === "lastname") {
      const nameRegex = /^[A-Za-z ]+$/;
      const regexVal = value.match(nameRegex); // null. , []

      if (!value) {
        localError[key] = "REQUIRED*";
      } else if (value && !regexVal) {
        localError[key] = "Name should not have special character";
      } else if (value && regexVal) {
        localError[key] = "";
      }
    }

    if (key === "email") {
      if (!value && touched.email) {
        localError[key] = "REQUIRED*";
      } else if (value && !validateEmail(value) && touched.email) {
        localError[key] = "Enter valid Email";
      } else if (value && validateEmail(value)) {
        localError[key] = "";
      }
    }

    if (key === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      const regexVal = value.match(phoneRegex); // [] , null
      if (!value) {
        localError[key] = "REQUIRED*";
      } else if (value && !regexVal) {
        localError[key] = "Enter Correct number*";
      } else if (value && regexVal) {
        localError[key] = "";
      }
    }

    setError((old) => {
      return {
        ...old,
        ...localError,
      };
    });
  }

  return (
    <>
      <h1>FORM</h1>

      <form onSubmit={handleFormSubmission}>
        <label htmlFor="firstname">FirstName:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "firstname");
          }}
          id="firstname"
          type={"text"}
          placeholder="firstname"
          value={form.firstname}
        />

        {<div style={{ color: "red" }}>{error.firstname}</div>}

        <br />
        <br />
        <br />

        <label htmlFor="lastname">LastName:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "lastname");
          }}
          id="lastname"
          type={"text"}
          placeholder="lastname"
          value={form.lastname}
        />
        <Errorcomponent message={error.lastname} />

        <br />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "email");
          }}
          onBlur={() => {
            setTouched((old) => {
              return {
                ...old,
                email: true,
              };
            });
          }}
          id="email"
          type={"email"}
          placeholder="email"
          value={form.email}
        />
        {<div style={{ color: "red" }}>{error.email}</div>}

        <br />
        <br />
        <br />

        <label htmlFor="phone">Phone:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "phone");
          }}
          id="phone"
          type={"tel"}
          placeholder="phone"
          value={form.phone}
        />
        {<div style={{ color: "red" }}>{error.phone}</div>}

        <br />
        <br />
        <br />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          onChange={(event) => {
            onChangeHandler(event, "gender");
          }}
          value={form.gender}
        >
          <option value={0}>Choose From Below</option>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
          <option value={3}>Do not want to say</option>
        </select>

        <br />
        <br />
        <br />

        <label htmlFor="dob">DateOfBirth:</label>
        <input
          onChange={(event) => {
            onChangeHandler(event, "dob");
          }}
          id="dob"
          type={"date"}
          placeholder="dob"
          value={form.dob}
        />

        {/* <button>
            Submit
        </button> */}

        <br />
        <br />
        <br />

        <input disabled={isErrorInForm()} type="submit" value={"Submit"} />
      </form>
    </>
  );
}

export default Form;

/*
    1. State management
    2. How to crete form Elements
    3. Validation and error display
*/
