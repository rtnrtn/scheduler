// eslint-disable-next-line
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
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    })
  }, []);

  function bookInterview(id, interview) {
    
    const existingAppt = state.appointments[id];
    const existingInterview = existingAppt.interview;
    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    let days = state.days;
    if (!existingInterview) {
      const indexOfDayToUpdate = state.days.findIndex(currentDay => currentDay.name === state.day);
      const newDay = { ...state.days[indexOfDayToUpdate] };
      newDay.spots--;
      days = [...state.days.slice(0, indexOfDayToUpdate), newDay, ...state.days.slice(indexOfDayToUpdate + 1)];
    } 

    return Promise.all([
      axios.put(`/api/appointments/${appointment.id}`, { interview })
    ]).then((all) => {
      setState({ ...state, appointments, days });
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
    
    const indexOfDayToUpdate = state.days.findIndex(currentDay => currentDay.name === state.day);
    const newDay = { ...state.days[indexOfDayToUpdate] };
    newDay.spots++;
    const days = [...state.days.slice(0, indexOfDayToUpdate), newDay, ...state.days.slice(indexOfDayToUpdate + 1)];
    
    return Promise.all([
      axios.delete(`/api/appointments/${appointment.id}`, { interview: null })
    ]).then((all) => {
      setState({ ...state, appointments, days });
    });

  };

  return { state, setDay, bookInterview, cancelInterview };

};
