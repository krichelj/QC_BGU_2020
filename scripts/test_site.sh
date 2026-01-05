#!/bin/bash

# Navigate to the project root (assuming script is in scripts/ folder)
cd "$(dirname "$0")/.."

echo "Starting local server to simulate GitHub Pages..."
echo "Open http://localhost:8000 in your browser."
echo "Press Ctrl+C to stop."

# Use Ruby's built-in httpd (available on macOS)
# This serves the current directory at port 8000
ruby -run -e httpd . -p 8000
