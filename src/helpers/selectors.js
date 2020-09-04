import React from "react";

export function getAppointmentsForDay(state, dayName) {
  
  if (state.days.length === 0) return [];
  
  const day = state.days.find(currentDay => currentDay.name === dayName);
  
  if (day === undefined) return [];
  
  const appointmentsForDay = day.appointments.map(appointmentID => state.appointments[appointmentID]);  
  
  return appointmentsForDay;

};

export function getInterview(state, appointmentInterviewObject) {
  
  if (state.interviewers === null) return null;
  if (appointmentInterviewObject === null) return null;

  const interviewerID = appointmentInterviewObject.interviewer;
  
  const interviewer = state.interviewers[interviewerID];
  
  const interviewDetails = {
    student: appointmentInterviewObject.student,
    interviewer: interviewer
  };

  return interviewDetails;

};

export function getInterviewersForDay(state, dayName) {

  if (state.days.length === 0) return [];
  
  const day = state.days.find(currentDay => currentDay.name === dayName);
  
  if (day === undefined) return [];
  
  const interviewersForDay = day.interviewers.map(interviewersID => state.interviewers[interviewersID]);  
  
  return interviewersForDay;

};
