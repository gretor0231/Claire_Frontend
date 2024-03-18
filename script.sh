#!/bin/bash

# Start frontend
cd typehead-frontend
npm start &
cd ..

# Start backend
cd typehead-backend
node server.js