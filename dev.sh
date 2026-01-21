#!/bin/bash

PORT=3000
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "🌙 Moon Takeout Dev Server"
echo "=========================="

if lsof -i :$PORT -t > /dev/null 2>&1; then
    echo "⚠️  Found existing process on port $PORT"
    PID=$(lsof -i :$PORT -t)
    echo "   Killing PID: $PID"
    kill -9 $PID 2>/dev/null
    sleep 1
    echo "✅ Killed existing server"
else
    echo "✅ Port $PORT is free"
fi

if pgrep -f "next dev" > /dev/null 2>&1; then
    echo "⚠️  Found running 'next dev' process"
    pkill -f "next dev"
    sleep 1
    echo "✅ Killed next dev process"
fi

echo ""
echo "🚀 Starting dev server..."
echo "   URL: http://localhost:$PORT"
echo ""

cd "$PROJECT_DIR"
npm run dev
