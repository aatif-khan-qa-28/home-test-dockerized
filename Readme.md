# **WebApp Playwright Automation with Docker**

This repository contains an end-to-end testing framework for a `webapp` using **Playwright**. The setup is fully containerized using **Docker** .

---

## **Table of Contents**
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup and Usage](#setup-and-usage)
  - [Running Locally](#running-locally)
  - [Running with Docker](#running-with-docker)
- [Configuration](#configuration)
- [Test Results](#test-results)

---

## **Features**
- Automated tests using **Playwright**.
- Containerized test and application environment using **Docker**.
- Support for configurable base URLs and headless execution.
- Includes retry, screenshots, and video recording for failed tests.

---

## **Prerequisites**
Before setting up the project, ensure the following are installed on your system:
1. [Node.js](https://nodejs.org/)
2. [Docker](https://www.docker.com/)

---

## **Project Structure**
```plaintext
home-test-dockerized
├── Dockerfile                     # Docker image for Playwright tests
├── docker-compose.yml             # Docker Compose file for multi-container setup
├── playwright.config.js           # Playwright configuration file
├── test-steps/                    # Actions/Steps perfomed on the page
│   ├── CheckoutPageSteps.js       
│   ├── GridPageSteps.js           
│   ├── HomePageSteps.js           
│   ├── LoginPageSteps.js          
│   ├── OrderPageSteps.js          
│   ├── SearchPageSteps.js    
├── test-data/    
│   ├── AssertTexts.js            # Test data with expected texts to assert with actual texts
│   ├── checkoutFormData.js       # Test data to fill the Checkout Form
│   ├── loginData.js              # Test data to Login with various usernames and passwords
│   ├── search.json   
├── pages/
│   ├── CheckoutPage.js            # page object class for Checkout page  
│   ├── GridPage.js                # page object class for Grid page 
│   ├── HomePage.js                # page object class for Home page  
│   ├── LoginPage.js               # page object class for Login page 
│   ├── OrderPage.js               # page object class for Order page  
│   ├── SearchPage.js              # page object class for Search page 
├── tests/
│   ├── CheckoutTestCases.spec.js  #playwright test cases: 4, 5, 6
|   ├── GridTestCases.spec.js      #playwright test cases: 7,8
|   ├── LoginTestCases.spec.js     #playwright test cases: 1,2,3
|   ├── SearchTestCases.spec.js    #playwright test cases: 9,10
├── package.json                   # Node.js dependencies and scripts
├── package-lock.json              # Dependency lock file
├── README.md                      # Project documentation
```

---

## **Setup and Usage**

### **Running Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/aatif-khan-qa-28/home-test-dockerized.git
   cd home-test-dockerized
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the WebApp**:
   If you already have a Docker image for your web application, run it:
   ```bash
   docker run -d -p 3100:3100 your-webapp-image:latest
   ```

4. **Run Playwright Tests**:
   Set the `BASE_URL` environment variable and run the tests:
   ```bash
   export BASE_URL=http://localhost:3100
   npx playwright test
   ```
   To run the tests in `headed` mode:
   ```bash
   npx playwright test --headed
   ```

---

### **Running with Docker**

1. **Build and Run Containers**:
   Use `docker-compose` to set up the `webapp` and Playwright test containers:
   ```bash
   docker-compose up --build
   ```

2. **Stop and Clean Up**:
   Once the tests are complete, stop the containers:
   ```bash
   docker-compose down
   ```

---

## **Configuration**

### **Playwright Configuration**
The Playwright configuration is defined in `playwright.config.js`. Key options include:
- `baseURL`: URL of the application under test. This is set via the `BASE_URL` environment variable.
- `reporter` : Set to `html` for HTML reports.
- `headless`: Set to `true` for non-GUI environments.
- `screenshot`: Captures screenshots for failed tests.
- `video`: Records videos for failed tests.
- `trace` : Trace for failed tests.
- `browserName` : Set the desired browserName to execute it on Chromium/Safari/Webkit

You can customize these options as needed. 
- Set `headless` as `false` to run tests in headed mode.
- Set `browserName` to `firefox` or `webkit` to execute tests in respective browsers

### **Environment Variables**
- `BASE_URL`: The base URL of the application to test (default: `http://localhost:3100`).

---

## **Test Results**
---
### **Test Report**
Below are the sample HTML test reports which will be stored in `/playwright-report/` folder.

<img width="745" alt="report-1" src="https://github.com/user-attachments/assets/cce35018-319e-4a85-9212-94cd8188785b" />

<img width="379" alt="report-2" src="https://github.com/user-attachments/assets/325ac25e-8011-4f17-9db4-07c6dc8acfec" />

---


