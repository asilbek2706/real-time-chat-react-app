import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { initializeApp } from 'firebase/app'
import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const app = initializeApp({
    apiKey: 'AIzaSyCtWMiKoauRgAZuN5Tgmoc9w2N0-8ebqn4',
    authDomain: 'real-time-chat-4650b.firebaseapp.com',
    projectId: 'real-time-chat-4650b',
    storageBucket: 'real-time-chat-4650b.firebasestorage.app',
    messagingSenderId: '550863214867',
    appId: '1:550863214867:web:0a50b2cc2967432f7de2e6',
    measurementId: 'G-89DPQC5YW7',
})

const auth = getAuth(app)
const firestore = getFirestore(app)

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Context.Provider value={{ auth, firestore }}>
        <App />
    </Context.Provider>
)
