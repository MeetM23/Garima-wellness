@echo off
title Garima Wellness Center - Development Server
echo ====================================================
echo Starting Garima Wellness Center Next.js Dev Server...
echo ====================================================

set PATH=C:\Program Files\nodejs;%PATH%

if not exist "node_modules" (
    echo Installing dependencies...
    call npm.cmd install
)

echo Starting server on http://localhost:3000
call npm.cmd run dev
pause

