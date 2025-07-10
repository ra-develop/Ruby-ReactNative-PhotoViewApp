# Photo Viewer App

Key App Design Decisions
--------------------

1.  **Navigation Structure**:
    
    *   Used React Navigation for a native-like experience
        
    *   Three screens provide clear user flow (Home → Category → Photo Detail)
        
2.  **API Design**:
    
    *   RESTful endpoints with JSON responses
        
    *   Separate endpoints for categories and photos by category
        
    *   Used CORS middleware for cross-origin requests
        
3.  **State Management**:
    
    *   Kept it simple with local component state
        
    *   For a larger app, would consider Context API or Redux
        
4.  **UI/UX Considerations**:
    
    *   Responsive grid layout for photos
        
    *   Clear visual hierarchy
        
    *   Loading states for better user experience
        
5.  **Code Organization**:
    
    *   Separated screens into individual files
        
    *   Consistent styling approach
        
    *   Clear component structure


Installation and test (Expo)
-----------------------------
1. Navigate to the `mobile` directory
2. Install dependencies: `npm install`
3. Start the app: `npx expo start`
4. Scan the QR code with the Expo Go app or run on emulator
