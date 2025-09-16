# Express Test Bench

A simple Express.js application for testing and benchmarking purposes.

## Description

This is a minimal Express.js application that serves a JSON "Hello World" response. It's designed to be used for testing, benchmarking, and demonstrating containerization with Docker.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Docker (optional, for containerization)
- Docker Compose (optional, for container orchestration)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your browser

### Docker Support

This application includes Docker configuration for containerization:

1. Build and run with Docker:
   ```bash
   docker build -t express-test-bench .
   docker run -p 3000:3000 express-test-bench
   ```

2. Or use Docker Compose:
   ```bash
   docker-compose up --build
   ```

## API Endpoints

- `GET /` - Returns a JSON "Hello World" response with timestamp
- `GET /user/:id` - Returns a JSON response with the provided user ID and timestamp

## Testing

### Load Testing with Autocannon

To perform load testing with autocannon:

1. Install autocannon globally:
   ```bash
   npm install -g autocannon
   ```

2. Run the application:
   ```bash
   npm start
   ```

3. In another terminal, run autocannon:
   ```bash
   autocannon -c 50 -d 30 http://localhost:3000
   ```

## Project Structure

```
.
├── index.js          # Main application file
├── package.json      # Project dependencies and scripts
├── Dockerfile        # Docker configuration
├── docker-compose.yml # Docker Compose configuration
├── .gitignore        # Git ignore patterns
├── README.md         # This file
└── QWEN.md           # Qwen Code context
```

## License

This project is licensed under the MIT License.