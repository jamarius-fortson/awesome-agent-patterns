# AgenticOS Setup Script for Windows 🛠️

Write-Host "🌌 Initializing AgenticOS Expert Stack..." -ForegroundColor Cyan

# 1. Install Engine Dependencies
Write-Host "`n[1/3] Installing Intelligence Engine (packages/engine)..." -ForegroundColor Yellow
cd packages/engine
pip install -e .
cd ..\..

# 2. Install Dashboard Dependencies
Write-Host "`n[2/3] Installing Dashboard (packages/dashboard) via Node.js..." -ForegroundColor Yellow
cd packages/dashboard
cmd /c "npm install"
cd ..\..

# 3. Final Verification
Write-Host "`n[3/3] AgenticOS Platform Ready!" -ForegroundColor Green
Write-Host "`nRun './dev.ps1' to start the concurrent engine & dashboard servers." -ForegroundColor Cyan
