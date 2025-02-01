
# Quiz Application - Assignment

## Overview

This is an interactive quiz application with gamification features using the React Vite project. This application fetches quiz data from an API and presents it with an engaging user interface. Taking inspiration from Testline App, it allows seamless attempts at quizzes and displays their scores.

## Features
- User-friendly and stylish quiz interface
- Fetches quiz questions dynamically from an API
- Displays quiz results with animations based on performance
- Supports multiple question categories
- Interactive score summary screen
- Responsive design for desktop and mobile

## Technologies Used
- **React** (with Vite for fast development)
- **Styled-components** for styling
- **React Router** for navigation

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and visit `http://localhost:5173`.

## Usage
- Start a quiz by selecting a category.
- Answer the questions and submit.
- View your score with dynamic animations.
- Click **Play Again** to restart the quiz.

## File Structure
```
quiz-app/
│-- src/
│   │-- components/      # Reusable components (Quiz, ScoreSummary, etc.)
│   │-- pages/           # Pages (Home, QuizPage, ResultsPage)
│   │-- App.jsx          # Main app component
│   │-- main.jsx         # React entry point
│-- public/              # Static assets
│-- package.json         # Dependencies and scripts
│-- README.md            # Project documentation
```

## Deployment
To build for production:
```sh
npm run build
# or
yarn build
```
This will generate an optimized `dist/` folder that can be deployed to **Netlify**, **Vercel**, or any static hosting service.

## Internship Assignment Requirements
- Ensure the application is fully functional and responsive.
- Add an additional feature of your choice to enhance user experience.
- Write clean, maintainable code following best practices.
- Document any changes you make.

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-new-ui` or `bugfix-score`).
3. Commit your changes and push.
4. Open a pull request.

## License
This project is open-source.



