# TaskManagerPlus-Cypress-Video

I use Cypress to create automated tests for a web application. In this project, you will learn about the project structure, how to set up login tests, and how to run tests to validate both the frontend and backend. Cypress is a powerful and easy-to-configure tool, perfect for anyone looking to automate tests for web pages. 📹

## Project Structure

```
taskmanagerplus-cypress-video/
│
├── cypress/
│   ├── fixtures/
│   │   └── loginCredentials.json     # Sample login credentials used for testing
│   ├── integration/
│   │   └── login.spec.js             # Test case for login functionality
│   ├── page-objects/
│   │   ├── dashboardPage.js          # Page Object for the dashboard page
│   │   └── loginPage.js              # Page Object for the login page
│   ├── plugins/
│   ├── reports/
│   │   └── html/
│   ├── screenshots/                  # Stores screenshots of test execution
│   ├── support/
│   │   ├── commands.js               # Custom Cypress commands
│   │   └── e2e.js
│
├── node_modules/                     # Project dependencies
├── videos/
│   └── login.spec.js.mp4             # Video recordings of test executions
├── .gitignore                        # Files and directories ignored by Git
├── cypress.config.js                 # Cypress configuration file
├── package.json                      # Project metadata and dependencies
├── package-lock.json                 # Locked dependencies versions
└── README.md                         # Project documentation
```

## Running the Project

### Prerequisites
- **Node.js** and **npm** should be installed on your machine. You can download Node.js from [here](https://nodejs.org/).
- Cypress is already defined as a dependency in `package.json`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maiconfang/taskmanagerplus-cypress-video.git
   ```
   
2. Navigate into the project directory:
   ```bash
   cd taskmanagerplus-cypress-video
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Tests

1. Open Cypress test runner:
   ```bash
   npx cypress open
   ```
   - This will open the Cypress test runner where you can select and run your tests.

2. Run tests from the command line (headless mode):
   ```bash
   npx cypress run
   ```
   - This will execute all tests in headless mode and generate reports in the `videos` and `screenshots` folders.

### Login Tests

The login tests are located in the `integration/login.spec.js` file. These tests use credentials from the `fixtures/loginCredentials.json` file to automate the login process and validate that the user is directed to the correct page after logging in.

The Page Object pattern is used to separate the test logic from the UI elements, making the tests easier to maintain.
