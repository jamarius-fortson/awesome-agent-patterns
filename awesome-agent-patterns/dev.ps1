# AgenticOS Dev Server Runner (Windows) 🚀

$jobs = @()

# 1. Start Engine (FastAPI)
Write-Host "🌌 Starting AetherFlow Engine (FastAPI)..." -ForegroundColor Cyan
$jobs += Start-Job -ScriptBlock {
    cd "c:\Users\Ismail Sajid\Downloads\awesome-agent-patterns\awesome-agent-patterns\packages\api\src"
    uvicorn main:app --reload --port 8000
}

# 2. Start Dashboard (Vite)
Write-Host "🖥️ Starting AetherFlow Dashboard (Vite)..." -ForegroundColor Magenta
$jobs += Start-Job -ScriptBlock {
    cd "c:\Users\Ismail Sajid\Downloads\awesome-agent-patterns\awesome-agent-patterns\packages\dashboard"
    cmd /c "npm run dev -- --port 3000"
}

Write-Host "`nServers are running in background jobs!" -ForegroundColor Green
Write-Host "Dashboard: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Backend: http://localhost:8000/docs" -ForegroundColor Yellow

# Keep script alive just to show user logs (optional but helpful)
Write-Host "`nPress Ctrl+C to stop the servers..." -ForegroundColor Gray
try {
    while ($true) {
        # Receive-Job -Job $jobs -Wait # This would block, just sleep instead
        Start-Sleep -Seconds 1
    }
} finally {
    Write-Host "`n🛑 Shutting down AgenticOS Cluster..." -ForegroundColor Red
    Stop-Job -Job $jobs
    Remove-Job -Job $jobs
}
