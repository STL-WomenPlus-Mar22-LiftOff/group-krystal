# group-krystal

## What is Our App?
Trackfully is a web application that empowers users to manage their own health. Users can easily create an account, choose which symptom to track, and track daily symptoms by severity. Symptom data is visualized using a line graph to help users better understand their symptoms over time.

## Key Features:
- Register a new user using password hashing
- Sign in a user using authentication 
- Log out a user
- Add a symptom to track
- Track daily symptom by: date, symptom name, rating of 0-10
- Store users, symptoms, and daily tracking data in MySQL database
- Display symptom tracking data by symptom severity over time on line graph
- Integrate ChartJS into Angular for data visualization

## Future Plans:
- Allow users to add more than one symptom
- Allow users to track environmental factors or "triggers" along with symptom occurence
- Allow users to see symptom tracking data over a selected period of time
- Host web application 
- Implement Single Sign On

## Tech Stack Used:

### **Front-end aka "Trackfully-Client":**
- Angular Version 12.2.17
- Angular CLI Version 12.2.18
- Node Version 14.15.1
  - if your node version is different, we recommend switching to 14.15.1 using node version manager
- HTML
- CSS

*To run the client (Trackfully-Client), type “ng serve” into your terminal and navigate to http://localhost:4200/home*


### **Back-end aka "Trackfully-Server":**
- Java 11.0.16
- SpringBoot 2.7.7
- Gradle
- MySQL Workbench 8.0.31

*To run the server (Trackfully-Server), select bootRun from your IDE (we recommend IntelliJ)*

## Contributors:
- Emily Hart, Full Stack Developer
- Emma Halsey, Full Stack Developer
- Sarah Lashley, Full Stack Developer
- Marina Nambiar, Full Stack Developer & Tech Co-lead
- Jenny Ryoo, Full Stack Developer & Tech Co-lead
- Krystal White, Liftoff Mentor
