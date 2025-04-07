# Django + React Todo App

A simple Todo app with Django REST Framework backend and React frontend.

## Setup and Installation

### Backend Setup

1. Clone the repository
2. Create a virtual environment:
   ```
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```
3. Install the dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```
   python manage.py migrate
   ```
5. Create a superuser (for admin access):
   ```
   python manage.py createsuperuser
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Build the frontend:
   ```
   npm run build
   ```

## Running the Application

1. Start the Django development server:
   ```
   python manage.py runserver
   ```
2. Access the application at http://localhost:8000
3. Access the admin panel at http://localhost:8000/admin

## Development Workflow

### Backend Development

- Run the Django server for backend development:
  ```
  python manage.py runserver
  ```

### Frontend Development

- Run the React development server:
  ```
  cd frontend
  npm start
  ```
- Access the frontend at http://localhost:3000

## API Endpoints

- `GET /api/todos/` - List all todos
- `POST /api/todos/` - Create a new todo
- `GET /api/todos/:id/` - Retrieve a specific todo
- `PUT /api/todos/:id/` - Update a specific todo
- `DELETE /api/todos/:id/` - Delete a specific todo