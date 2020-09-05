import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState(prev => ({ days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, []);

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return Promise.all([
      axios.put(`/api/appointments/${appointment.id}`, { interview })
    ]).then((all) => {
      setState({ ...state, appointments });
    });

  };

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return Promise.all([
      axios.delete(`/api/appointments/${appointment.id}`, { interview: null })
    ]).then((all) => {
      setState({ ...state, appointments });
    });

  };

  return { state, setDay, bookInterview, cancelInterview };

};
