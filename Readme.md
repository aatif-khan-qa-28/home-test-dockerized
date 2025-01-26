# **WebApp Playwright Automation with Docker and GitHub Actions**

This repository contains an end-to-end testing framework for a `webapp` using **Playwright**. The setup is fully containerized using **Docker** and includes a **GitHub Actions** workflow for continuous integration.

---

## **Table of Contents**
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup and Usage](#setup-and-usage)
  - [Running Locally](#running-locally)
  - [Running with Docker](#running-with-docker)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- Automated tests using **Playwright**.
- Containerized test and application environment using **Docker**.
- Continuous integration with **GitHub Actions**.
- Support for configurable base URLs and headless execution.
- Includes retry, screenshots, and video recording for failed tests.

---

## **Prerequisites**
Before setting up the project, ensure the following are installed on your system:
1. [Node.js](https://nodejs.org/) (v16 or higher)
2. [Docker](https://www.docker.com/)
3. [Git](https://git-scm.com/)

---

## **Project Structure**
```plaintext
home-test-dockerized
├── Dockerfile                     # Docker image for Playwright tests
├── docker-compose.yml             # Docker Compose file for multi-container setup
├── playwright.config.js           # Playwright configuration file
├── tests/
│   ├── example.spec.js            # Example Playwright test
├── .github/
│   └── workflows/
│       └── playwright.yml         # GitHub Actions workflow for CI/CD
├── package.json                   # Node.js dependencies and scripts
├── package-lock.json              # Dependency lock file
├── README.md                      # Project documentation
```

---

## **Setup and Usage**

### **Running Locally**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
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

## **CI/CD with GitHub Actions**

This repository includes a GitHub Actions workflow (`.github/workflows/playwright.yml`) that:
1. Builds and runs the `webapp` and Playwright containers.
2. Executes the Playwright tests.
3. Automatically triggers on every push to the `main` branch or pull request.

To enable the workflow:
1. Push your code to a GitHub repository.
2. The workflow will run automatically for every push or pull request.

---

## **Configuration**

### **Playwright Configuration**
The Playwright configuration is defined in `playwright.config.ts`. Key options include:
- `baseURL`: URL of the application under test. This is set via the `BASE_URL` environment variable.
- `headless`: Set to `true` for non-GUI environments.
- `screenshot`: Captures screenshots for failed tests.
- `video`: Records videos for failed tests.
- `trace` : Trace for failed tests.

You can customize these options as needed.

### **Environment Variables**
- `BASE_URL`: The base URL of the application to test (default: `http://localhost:3100`).

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---