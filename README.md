# CS465
Full Stack Development with MEAN

Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
  Both Express and Angular were used to implement front-end features. Express uses server-side HTML and JavaScript for simple web browser based interactions, while Angular provides a SPA that is dynamically updated on the client. The SPA offers a seamless and fast experience for smooth navigaiton and execution. 
  

Why did the backend use a NoSQL MongoDB database?
  The backend uses MongoDB, a NoSQL db that is flexible and scalable. This flexibility allows the application to easily grow with the size of the application. 

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
  JSON differd from JavaScript in that is is purely used for the storage and exchange of data, especially useful for the transferral of data between the front and back end. JSON is connects Angular to Express, allowsing data from MongoDB to display in real-time on the SPA and to the other front-end components.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  I refactored code to improve efficciency such as making the login, edit, and add trip UI components reusable. This allowed a more consistent and streamlined workflow to scale the UI features with the db and the front end. Allowing each trip to be fully featured without having to hard code much more. 

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
  Testing the web application required verifying the API endpoings with Postman and the browser console. I ensured the connection was successfull witht he frontend and backend and then ensure the GET, PUT, or POST mehtods were successful as well. For example, ensuring the GET request for the list of trips was successful was done by verifying the trips were updated even after adding/editing. Once the JWT authenticatiosn was added the layers of eecuirty ensured that only authorized users would be the only ones to add or edit trips. Done so by verifying the user is logged in successfully and allowing the operation thereafter.  


Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has been instrumental in helping me rech my professional goals by further solidifiying my ability to torubleshoot across different intermingling frameworks and API's, as well as having the strengthened confidence on developing a full-stack application from the ground up with MEAN. As well as integrating security with the authentication and authroization using JWT. These skills improve my confidence as a developer to be a more marketable candidate by allowing me to see how each layer works together to deliver a robust and user-friendly experience.
