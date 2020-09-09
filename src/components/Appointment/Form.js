import React, { useState } from "react";

import InterviewerList from "../InterviewerList";
import Button from "../Button";

// Form within the Appointment component: validates student name has been entered.
export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const reset = () => {
    setName("");
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  const validate = () => {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    const interviewerID = interviewer ? interviewer.id : null;
    props.onSave(name, interviewerID);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={handleChange}
            data-testid="student-name-input"
            />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList interviewers={props.interviewers} value={interviewer ? interviewer.id : null} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger
            onClick={cancel}
          >Cancel</Button>
          <Button confirm
            onClick={validate}
          >Save</Button>
        </section>
      </section>
    </main>
  )
};
