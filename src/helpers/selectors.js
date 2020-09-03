import React from "react";


export function getAppointmentsForDay(state, dayName) {
  
  if (state.days.length === 0) return [];
  
  const day = state.days.find(currentDay => currentDay.name === dayName);
  
  if (day === undefined) return [];
  
  const appointmentsForDay = day.appointments.map(appointmentID => state.appointments[appointmentID]);  
  
  return appointmentsForDay;

};
