@echo off
title Garima Wellness Center - Production Server
echo ====================================================
echo Starting Garima Wellness Center Production Server...
echo ====================================================

set PATH=C:\Program Files\nodejs;%PATH%

echo Running on http://localhost:3000
call npm.cmd run start
pause

