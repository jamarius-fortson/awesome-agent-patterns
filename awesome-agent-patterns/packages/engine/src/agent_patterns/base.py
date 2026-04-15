import abc
import time
import uuid
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field

class AgentState(BaseModel):
    """The thread-safe, immutable-ish state passed between agents."""
    data: Dict[str, Any] = Field(default_factory=dict)
    history: List[Dict[str, Any]] = Field(default_factory=list)

class PatternResult(BaseModel):
    """Standardized output for all patterns."""
    final_output: str
    metadata: Dict[str, Any] = Field(default_factory=dict)
    confidence: float = 1.0
    trace_id: str

class BasePattern(abc.ABC):
    """Abstract base class for all agent patterns with built-in Observability."""
    
    def __init__(self, name: str, description: str):
        self.name = name
        self.description = description
        self.trace_id = str(uuid.uuid4())
    
    @abc.abstractmethod
    async def execute(self, input_data: str, **kwargs) -> PatternResult:
        """The core execution logic for the pattern."""
        pass

    def start_span(self, span_name: str) -> str:
        """Standardized OpenTelemetry (OTel) Span initialization."""
        span_id = str(uuid.uuid4())
        print(f"[OTEL] [{self.name}] SPAN_START: {span_name} | TraceID: {self.trace_id} | SpanID: {span_id}")
        return span_id

    def end_span(self, span_id: str, status: str = "ok"):
        """Finalize an observability span."""
        print(f"[OTEL] [{self.name}] SPAN_END:   {span_id} | Status: {status}")

    def log_telemetry(self, key: str, value: Any):
        """Unified metrics logging for Prometheus/Grafana integration."""
        print(f"[METRICS] [{self.name}] {key}: {value}")
