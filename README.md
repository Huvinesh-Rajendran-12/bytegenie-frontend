# ByteGenie UI

This repository contains the frontend React application for my ByteGenie FullStack Developer Test. The UI allows users to interact with the API using natural language queries and displays the results in a user-friendly format.

## Demo 

![FB64CFF5-D52E-4433-B4C4-81853E4DB4EF_1_102_o](https://github.com/user-attachments/assets/56e59d4d-55a5-402c-9769-5f9e03d3dacb)


## Technology Stack

- React 18
- JavaScript
- Tailwind CSS
- Native fetch API for network requests
- Bun as the JavaScript runtime and package manager
- Vite as the build tool

## Prerequisites

- Bun: Make sure you have Bun installed. If not, you can install it by following the instructions on the [official Bun website](https://bun.sh/).

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/Huvinesh-Rajendran-12/bytegenie-frontend.git
   cd bytegenie-frontend
   ```

2. Install dependencies:

   ```
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   BACKEND_PYTHON_API=http://127.0.0.1:8000/query
   ```

4. Run the development server:
   ```
   bun run start
   ```

The application should now be running on `http://localhost:3000` (or another port if 3000 is occupied).

## Building for Production

To create a production build:

```
bun run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```
bun run preview
```

## Key Functionalities

The UI provides the following key functionalities:

1. Natural language query input
2. Real-time query processing feedback, such as the different stages of query processing handled by the model.
3. Formatted display of query results, using tables, list etc.
4. User-friendly error handling and suggestions

## API Interaction

The UI interacts with the backend API using a single endpoint:

- `/query` - POST request to submit natural language queries and receive results

The application uses the native fetch API to make this request, allowing for efficient and straightforward network communication.

## Key Challenges I Faced

During the development of the front-end, I faced the following challenges:

1. Implementing real-time updates for long-running queries using fetch API
2. Handling streaming responses from the backend, the streaming responses had to be in the correct format to be displayed in the frontend.
3. Managing state for ongoing queries and results without additional state management libraries
4. Displaying structured data results in a user-friendly manner
5. Ensuring responsive design for various screen sizes

## Future Improvements

If I had more time, I would improve the front-end in the following ways:

1. Implement data visualization options (e.g., charts, graphs) for applicable query results
2. Add a query history feature for easy access to previous searches
3. Develop an autocomplete system for query input based on common patterns
4. Implement user authentication for personalized experiences
5. Implement error boundary components for better error handling
6. Add unit and integration tests for all components
7. Optimize the build process further using Bun's capabilities
8. Explore advanced features of the fetch API, such as AbortController for cancellable requests

## Notes on Using Bun

Bun offers several advantages over traditional Node.js setups:

1. Faster installation times for dependencies
2. Improved performance for JavaScript execution
3. Built-in testing capabilities
4. Native support for `.env` files

To leverage these benefits, I've adjusted the scripts in `package.json` to use Bun. If you encounter any issues related to Bun, please refer to the [official Bun documentation](https://bun.sh/docs).
