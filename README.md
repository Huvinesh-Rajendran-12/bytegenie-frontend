# ByteGenie UI

This repository contains the frontend React application for my ByteGenie FullStack Developer Test. The UI allows users to interact with the API using natural language queries and displays the results in a user-friendly format.

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Axios for API calls
- React Query for state management
- Vite as the build tool

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/your-username/bytegenie-ui.git
   cd bytegenie-ui
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   VITE_API_URL=http://localhost:8000
   ```

4. Run the development server:
   ```
   npm run dev
   ```

The application should now be running on `http://localhost:5173`.

## Building for Production

To create a production build:

```
npm run build
```

The built files will be in the `dist` directory.

## Key Functionalities

The UI provides the following key functionalities:

1. Natural language query input
2. Real-time query processing feedback
3. Formatted display of query results
4. Interactive data visualization (where applicable)
5. User-friendly error handling and suggestions

## API Endpoints

The UI interacts with the following API endpoints:

1. `/query` - POST request to submit natural language queries
2. `/status` - GET request to check query processing status
3. `/results` - GET request to fetch formatted query results

## Key Challenges I Faced

During the development of the front-end, I faced the following challenges:

1. Implementing real-time updates for long-running queries
2. Creating intuitive visualizations for various types of data
3. Handling and displaying errors in a user-friendly manner
4. Optimizing performance for large result sets
5. Ensuring responsive design for various screen sizes

## Future Improvements

If I had more time, I would improve the front-end in the following ways:

1. Implement advanced data visualization options (e.g., interactive charts, graphs)
2. Add a query history feature for easy access to previous searches
3. Develop a more sophisticated autocomplete system for query input
4. Implement user authentication and personalized dashboards
5. Add offline support and progressive web app (PWA) functionality
6. Improve accessibility features for users with disabilities
7. Implement internationalization (i18n) for multi-language support
8. Add unit and integration tests for all components
