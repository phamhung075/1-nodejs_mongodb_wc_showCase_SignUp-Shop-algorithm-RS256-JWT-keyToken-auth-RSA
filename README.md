# Node.js MongoDB Showcase with Authentication (RS256)
This is a personal project created based on the series of lessons by @anonystick (https://github.com/anonystick).
## Introduction

`nodejs_mongodb_wc_showCase_auth_RS256` is a Node.js application demonstrating user authentication and data management using MongoDB. It leverages the RS256 algorithm for secure and robust authentication.
### [version use algorithm HS256 ](https://github.com/phamhung075/2-nodejs_mongodb_wc_showCase_Dynamic_for_ApiKey_and_Permissions_HS256)
## Installation

To set up this project, please follow these steps:

1. Clone the repository:
    
    bashCopy code
    
    `git clone https://github.com/phamhung075/1-nodejs_mongodb_wc_showCase_SignUp-Shop-algorithm-RS256-JWT-keyToken-auth-RSA.git`
    
2. Change to the project directory:
    
    bashCopy code
    
    `cd 1-nodejs_mongodb_wc_showCase_SignUp-Shop-algorithm-RS256-JWT-keyToken-auth-RSA-master`
    
3. Install necessary dependencies:
    
    bashCopy code
    
    `npm install`
    

## Usage

The project consists of various modules and services, each managing different aspects of the application.

### Access Service (`./services/access.service.js`)

Handles user authentication, including signup processes. It uses bcrypt for password hashing and crypto for key generation.

### Models

- **Shop Model** (`./models/shop.model.js`): Manages shop data in MongoDB.

### Utilities

- **Lodash Utility** (`./utils/index.js`): Provides functions like `getInfoData` for data handling.

### Controllers

- **Access Controller** (`./controllers/access.controller.js`): Manages access routes and authentication logic.

### Routes

- **Access Routes** (`./routes/access.route.js`): Defines user access and authentication routes.

### Authentication and Token Management

- **Auth Utils** (`./auth/authUtils.js`): Contains token generation and authentication utilities.
- **KeyToken Service** (`./services/keyToken.service.js`): Manages token creation and validation.
- **KeyToken Model** (`./models/keyToken.model.js`): Schema for key tokens in MongoDB.

### MongoDB Connection

Connect to the MongoDB server using: `mongodb://localhost:27017`

### Postman Example for SignUp

jsonCopy code

```
@url_dev=http://localhost:3052/v1/api/  
### signup POST {{url_dev}}/shop/signup 
Content-Type: application/json  
{     
	"name": "cartepopup",     
	"email": "cartepopup@gmail.com",     
	"password": "abc123" 
}
```

For more detailed examples, refer to the provided Postman collection.

For more detailed examples, refer to see [README.png](./help01-rs256.png).
