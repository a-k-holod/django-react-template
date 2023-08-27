# Use the official Python image as base
FROM python:3.9

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install project dependencies
RUN pip install -r requirements.txt

# Copy the project code into the container
COPY . /app/

# Copy the React static files into the correct static directory
RUN mkdir -p /app/myproject/static/frontend
COPY frontend/build /app/myproject/static/frontend

# Run migrations
RUN python manage.py makemigrations
RUN python manage.py migrate

# Expose the port the app runs on
EXPOSE 8000

# Run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
