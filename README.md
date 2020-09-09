# Interview Scheduler

Interview Scheduler is a single-page application built using React. It allows users to schedule interviews with selected interviewers as well as view, edit, and delete appointments. 

Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. Jest tests were used through the development of the project.

## Final Product

### Main page with Monday selected as default.
!["Main page with Monday selected as default."](https://github.com/rtnrtn/scheduler/blob/master/docs/main.png?raw=true)

### Adding a new appointment. 
!["Adding a new appointment."](https://github.com/rtnrtn/scheduler/blob/master/docs/add-appointment.png?raw=true)

### New appointment details before saving. 
!["New appointment details before saving."](https://github.com/rtnrtn/scheduler/blob/master/docs/add-appointment-filled-out.png?raw=true)

### Saving new appointment. 
!["Saving new appointment."](https://github.com/rtnrtn/scheduler/blob/master/docs/saving-appointment.png?raw=true)

### New appointment saved in list of appointments. 
!["New appointment saved in list of appointments."](https://github.com/rtnrtn/scheduler/blob/master/docs/added-appointment.png?raw=true)

### Editing appointment by selecting different interviewer.
!["Editing appointment by selecting different interviewer."](https://github.com/rtnrtn/scheduler/blob/master/docs/edit-appointment.png?raw=true)

### Edited appointment saved in list of appointments.
!["Edited appointment saved in list of appointments."](https://github.com/rtnrtn/scheduler/blob/master/docs/edited-appointment.png?raw=true)

### Deleting appointment.
!["Deleting appointment."](https://github.com/rtnrtn/scheduler/blob/master/docs/deleting-appointment.png?raw=true)

## Getting Started

1. Install dependencies using the `npm install` command.
2. Clone [this repo] (https://github.com/rtnrtn/scheduler-api) and follow the instructions to set up and run the database server to handle get, put, and delete requests. 
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.
4. Go to <http://localhost:8000/> in your browser.

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts
- react-test-renderer
- @testing-library/react-hooks
