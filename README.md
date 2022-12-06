My first hackathon project


![](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/284/666/datas/original.png)

Inspiration

Biking is one the core transportation methods in the heart of any city. Yet, it is extremely dangerous to travel through narrow streets filled other vehicles. Noticing this, our team decided to develop software that would make biking safer by informing drivers about their surrounding bikers. In doing so, we hope to reduce the number of collisions between drivers and bikers caused by low light conditions, negligence, and extreme weather.

What it does

In essence, "Ride Safe" is an extension to Google Maps, that broadcasts the location of nearby bikers to any drivers. Since drivers already utilize GMaps for route planning, it is a practical way of informing drivers about nearby bikers in undesirable conditions. In GMaps, bikers show up as anonymous flags alerting the driver about any biker that may be behind them, in their blind spot, or in any other direction. From the perspective of the biker, all they need to do is to enable location services, allowing them to Ride Safe.

How we built it

Ride Safe is a Progressive Web Application (depicted as a GMaps extension) was developed using the React Framework for the frontend, where bootstrap was applied for formatting and styling. On the backend, Google Cloud Platform services were heavily utilized in the form of the Google Maps API, Firebase, and Firestore for database services. The Heroku Cloud Application Platform was used for hosting our App and Github was used for source control.

Challenges we ran into

There are several challenges we ran into. One of the first roadblocks was pinpointing static GPS location using GMaps API. Due to the lack of clear documentation, it was particularly challenging to integrate the APIs for our idea. GPS drift and lack of accuracy also lead to slow development. On the frontend side, we faced difficulties with creating custom UI elements, that were required to change based on state.

Accomplishments that we're proud of

One of the accomplishments that we are super proud of is implementing a full stack application (complete with database services) to create a real-time location broadcasting app. Considering that all of us were new to the React Framework, developing an application that heavily relies on dynamic states was a tough, yet rewarding experience. We are also very proud of the innovative solutions that we came up with to solve bugs during integration of the API.

What we learned

Building Ride Safe helped our team members really learn how to integrate code fragments without causing merge conflicts through an efficient use of GitHub. Alongside this, the experience was a great opportunity for each of our group members to try out new frameworks and strengthen their weaknesses, since the

What's next for Ride Safe

Ideally, we want to work towards a product that can be adopted by GMaps. To accomplish this, our goals for the future are as follows:

customizable icons
dealing with lag/delay
centering the screen around driver through a button
tilting the map so that it looks more realistic and easy to visualise
finding an appropriate radius

Built With

bootstrap
firebase
firestore
google-cloud
google-maps
node.js
react
