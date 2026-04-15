from typing import Any, Dict, List
from .base import BasePattern, PatternResult
import asyncio

class DebatePattern(BasePattern):
    """
    Multiple agents argue opposing positions on a question.
    A judge agent evaluates the arguments and reaches a verdict.
    """
    
    def __init__(self, advocate_models: List[str], judge_model: str):
        super().__init__(
            name="Adversarial Debate",
            description="Multi-agent adversarial evaluation for high-stakes decision making."
        )
        self.advocate_models = advocate_models
        self.judge_model = judge_model

    async def _setup_positions(self, question: str) -> Dict[str, str]:
        """Dynamically identify positions A and B."""
        # In production, this would use an LLM call.
        self.log_step("Setup", {"question": question})
        return {"pos_a": "Affirmative", "pos_b": "Negative"}

    async def _get_argument(self, model: str, position: str, question: str) -> str:
        """Fetch argument from a specific model/agent."""
        self.log_step("Arguing", {"model": model, "position": position})
        # Simulate LLM call
        await asyncio.sleep(0.5)
        return f"Argument by {model} for '{position}' on '{question}'"

    async def _get_rebuttal(self, model: str, original_arg: str, opponent_arg: str) -> str:
        """Fetch rebuttal from an agent."""
        self.log_step("Rebutting", {"model": model})
        await asyncio.sleep(0.3)
        return f"Rebuttal by {model}: '{opponent_arg}' is flawed because..."

    async def _get_verdict(self, judge_model: str, debate_content: Dict[str, Any]) -> str:
        """Final judge evaluation."""
        self.log_step("Judging", {"model": judge_model})
        await asyncio.sleep(0.8)
        return f"Verdict by {judge_model}: Based on evidence, Position A wins."

    async def execute(self, input_data: str, **kwargs) -> PatternResult:
        """Executes a full 2-round debate."""
        # Round 1: Setup and Opening
        positions = await self._setup_positions(input_data)
        
        # Parallel Argument Generation
        arg_a_task = self._get_argument(self.advocate_models[0], positions["pos_a"], input_data)
        arg_b_task = self._get_argument(self.advocate_models[1], positions["pos_b"], input_data)
        arg_a, arg_b = await asyncio.gather(arg_a_task, arg_b_task)

        # Round 2: Rebuttals
        rebut_a_task = self._get_rebuttal(self.advocate_models[0], arg_a, arg_b)
        rebut_b_task = self._get_rebuttal(self.advocate_models[1], arg_b, arg_a)
        rebut_a, rebut_b = await asyncio.gather(rebut_a_task, rebut_b_task)

        # Final Round: Judging
        verdict = await self._get_verdict(self.judge_model, {
            "q": input_data,
            "args": [arg_a, arg_b],
            "rebuttals": [rebut_a, rebut_b]
        })

        return PatternResult(
            final_output=verdict,
            metadata={
                "advocates": self.advocate_models,
                "judge": self.judge_model,
                "rounds": 2
            }
        )
