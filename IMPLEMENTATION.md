# Photo Viewer App

A mobile app for food enthusiasts to discover and explore delicious dish photos.

## Problem Statement
Food enthusiasts often struggle to find high-quality photos of specific dishes or cuisines. They want an easy way to browse, discover, and save food photos for inspiration or reference.

## Solution
Photo Viewer App provides:
- Curated collection of high-quality food photos
- Organized by categories (breakfast, lunch, dinner, desserts, etc.)
- Simple and intuitive interface
- Detailed view with descriptions and likes

## Tech Stack
- Frontend: React Native (Expo)
- Backend: Ruby on Rails API

## Setup Instructions

### Backend (Ruby on Rails)
1. Navigate to the `backend` directory
2. Install dependencies: `bundle install`
3. Setup database: `rails db:setup`
4. Seed data: `rails db:seed`
5. Start server: `rails s`

### Mobile (Expo)
1. Navigate to the `mobile` directory
2. Install dependencies: `npm install`
3. Start the app: `npx expo start`
4. Scan the QR code with the Expo Go app or run on emulator

## App Screens
1. **Home Screen**: Shows featured photos and categories
2. **Category Screen**: Displays all photos in a selected category
3. **Photo Detail Screen**: Shows full photo with details

## Evaluation Criteria
- Clean, modular code structure
- Proper separation of concerns
- Efficient data fetching
- Good UI/UX practices
- Clear navigation flow