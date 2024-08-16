Taskly API Documentation
Taskly is a comprehensive task management platform designed to streamline project workflows and enhance team collaboration. This documentation provides a detailed overview of the Taskly API, including endpoints, request/response formats, and error handling.

Authentication
To access the Taskly API, you'll need an API token. Obtain one by:

Creating a Taskly account.
Generating an API token in your account settings.
Endpoints
Boards
GET /boards: Retrieve all accessible boards.
POST /boards: Create a new board.
GET /boards/{boardId}: Get a specific board.
PUT /boards/{boardId}: Update a board.
DELETE /boards/{boardId}: Delete a board.
Tasks
GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task.
GET /tasks/{taskId}: Get a specific task.
PUT /tasks/{taskId}: Update a task.
DELETE /tasks/{taskId}: Delete a task.
Users
GET /users: Retrieve all users in the organization.
POST /users: Invite a new user.
GET /users/{userId}: Get a specific user.
Notifications
GET /notifications: Retrieve notifications.
POST /notifications: Create a new notification.
Analytics
GET /analytics: Retrieve analytics data.
Error Handling
The Taskly API uses standard HTTP status codes. For example:

200 OK: Request was successful.
400 Bad Request: Invalid request.
401 Unauthorized: Authentication failed.
403 Forbidden: User lacks permission.
404 Not Found: Resource not found.
500 Internal Server Error: Server-side error.
Rate Limiting
To prevent abuse, the Taskly API has a rate limit. Exceeding this limit may result in temporary throttling or account suspension.
