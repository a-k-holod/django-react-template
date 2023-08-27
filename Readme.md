# Django and React App Template

This template provides a basic setup for creating a Django and React web application. It combines the power of Django's backend with the interactive user interfaces of React. The template includes a Docker configuration for easy development and deployment.

## Getting Started

To run the application locally for development, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Make sure you have Docker and Node.js installed on your system.

4. Run the `start.sh` script to build and run the application:

   ```bash
   ./start.sh
   ```

   This script does the following:

    - Builds the React app using Webpack.
    - Builds a Docker container for the Django backend.
    - Runs the Docker container and the Django development server.

    To run development version of React app:

   ```bash
   cd frontend npm start
   ```
   

   The Django app will be accessible at `http://localhost:8000`, and the React app will be accessible at `http://localhost:3000`.

5. Access the application in your web browser. The Django app's API endpoints are available at `http://localhost:8000/api/items/`.

## Directory Structure

The template follows a directory structure that separates the Django backend and the React frontend:

- `myapp/`: Django app containing backend code, models, views, and API endpoints.
- `frontend/`: React app containing frontend code and components.
- `myproject/`: Django project settings and configuration.

## React Routing

The React app is set up with React Router for handling different routes. You can define routes and components in `frontend/src/index.js`.

## Django Views

The Django backend includes a simple API view for retrieving items. The `myapp/views.py` file contains the API view class.

## Docker Configuration

The included Dockerfile simplifies development and deployment. It sets up the environment, installs dependencies, and runs the Django development server.

## Gitignore

The `.gitignore` file has been configured to exclude unnecessary files and directories from version control, including virtual environment directories and compiled files.

## Customization

Feel free to customize the templates, styles, and components to suit your project's needs. As you build your application, you can expand upon the provided structure and add new views, models, and components.

For more information on Django and React, refer to their respective documentation:

- [Django Documentation](https://docs.djangoproject.com/en/4.2/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

Happy coding!