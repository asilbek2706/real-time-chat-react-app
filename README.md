# Real-Time Chat

This repository contains a React chat application located in `real-time-chat/`. The app uses Google authentication with Firebase Auth and stores chat messages in Firestore for real-time updates.

## Features

- Google sign-in with Firebase Auth
- Public login route and protected chat route
- Real-time message list backed by Firestore
- Material UI components for the interface

## Project Structure

```text
.
|-- README.md
`-- real-time-chat/
    |-- package.json
    |-- public/
    `-- src/
```

## Tech Stack

- React
- React Router
- Firebase
- `react-firebase-hooks`
- Material UI
- Create React App

## Getting Started

1. Open a terminal in `real-time-chat/`.
2. Install dependencies if needed:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will run at `http://localhost:3000`.

## Available Scripts

Run these commands inside `real-time-chat/`:

- `npm start` starts the development server.
- `npm test` runs the test runner.
- `npm run build` creates a production build.
- `npm run eject` exposes the Create React App configuration.

## Firebase Notes

Firebase is initialized in `real-time-chat/src/index.js`. The current code uses an inline Firebase config and expects:

- Google sign-in to be enabled in Firebase Authentication
- A Firestore collection named `messages`
- Firestore security rules that allow the intended read/write access

## Main App Flow

- Unauthenticated users are redirected to `/login`.
- Authenticated users are redirected to `/chat`.
- Sending a message writes a document to the `messages` collection with the user profile and a server timestamp.
