# AgenticOS Master Makefile 🚀
# High-Efficiency Management for FAANG-Grade Monorepo

PROJECT_NAME := AgenticOS
VERSION := 1.0.0
PYTHON := python
NPM := npm

.PHONY: help install build test dev clean deploy-docs

# --- Meta ---
help:
	@echo "$(PROJECT_NAME) v$(VERSION)"
	@echo "-------------------------"
	@echo "install      - Install all dependencies (Engine & Dashboard)"
	@echo "build        - Build Engine & Dashboard for production"
	@echo "test         - Run unit & integration tests"
	@echo "dev          - Start full stack in dev mode"
	@echo "clean        - Remove all build artifacts and caches"
	@echo "deploy-docs  - Build and deploy documentation"

# --- Setup ---
install:
	@echo "[SETUP] Installing Python dependencies..."
	cd packages/engine && pip install -e .
	@echo "[SETUP] Installing Dashboard dependencies..."
	cd packages/dashboard && $(NPM) install

# --- Development ---
dev-backend:
	cd packages/api && $(PYTHON) -m uvicorn main:app --reload

dev-frontend:
	cd packages/dashboard && $(NPM) run dev

dev: 
	@echo "[DEV] Starting concurrent dev servers (use CTRL+C to stop)..."
	make -j2 dev-backend dev-frontend

# --- Testing ---
test-engine:
	cd packages/engine && pytest tests/

test-dashboard:
	cd packages/dashboard && $(NPM) test

test: test-engine test-dashboard

# --- Build ---
build: 
	@echo "[BUILD] Building production artifacts..."
	cd packages/dashboard && $(NPM) run build
	@echo "[BUILD] Building Docker containers..."
	docker compose build

# --- Documentation ---
deploy-docs:
	@echo "[DOCS] Building documentation..."
	mkdocs build
