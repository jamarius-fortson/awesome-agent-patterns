# Contributing to awesome-agent-patterns

Thank you for contributing! This project aims to be the canonical reference for multi-agent AI design patterns.

## How to Contribute

### Adding a New Pattern

1. **Fork** this repository
2. Create a new file in `patterns/` following the naming convention: `XX-pattern-name.md`
3. Follow the [pattern template](#pattern-template) exactly
4. Add your pattern to the table in `README.md`
5. Submit a **Pull Request** with:
   - Title: `Add pattern: [Pattern Name]`
   - Description: Where you've used this pattern and why it matters

### Pattern Requirements

Every pattern MUST include:
- [ ] Clear one-sentence description
- [ ] "The Problem" section explaining when this pattern is needed
- [ ] Architecture diagram (Mermaid preferred, ASCII acceptable)
- [ ] "When to Use" with specific scenarios
- [ ] "When NOT to Use" with specific scenarios (this is critical)
- [ ] Working code example in **at least one** framework (LangGraph or CrewAI)
- [ ] Production considerations (cost, latency, failure modes)
- [ ] Related patterns section

Bonus (appreciated):
- [ ] Code examples in multiple frameworks
- [ ] Real-world examples from production systems
- [ ] Benchmark data (token usage, latency)

### Improving Existing Patterns

- Fix errors or clarify descriptions
- Add code examples for frameworks we don't cover yet
- Add real-world production examples
- Add benchmark data

### Adding Anti-Patterns

Document patterns you've seen fail in production. Include:
- What the anti-pattern looks like
- Why it fails
- What to do instead (link to the correct pattern)

## Pattern Template

```markdown
# Pattern Name

> One-sentence description of what this pattern does.

## The Problem
What situation calls for this pattern? What goes wrong without it?

## Architecture
[Mermaid diagram or ASCII diagram showing agent topology and data flow]

## When to Use
- Specific scenario 1
- Specific scenario 2

## When NOT to Use
- Scenario where this is the wrong choice
- Why a simpler pattern would be better

## Key Design Decisions
Important choices and their tradeoffs.

## Implementation

### LangGraph
[Working Python code with comments]

### CrewAI
[Working Python code with comments]

## Production Considerations
Token costs, latency, failure modes, monitoring recommendations.

## Real-World Examples
| System | How They Use It |
|--------|----------------|
| Example | Description |

## Related Patterns
- [Pattern Name](XX-pattern-name.md) — How it relates
```

## Code Style

- Python code must be runnable (no pseudocode)
- Include all imports
- Add comments explaining non-obvious decisions
- Use type hints
- Keep examples focused — show the pattern, not a full application

## Quality Standards

- **Accuracy**: Every claim must be verifiable. Link to sources.
- **Honesty**: Include limitations and failure modes. Don't oversell patterns.
- **Clarity**: A senior engineer should understand the pattern in under 5 minutes.
- **Practicality**: Code examples must work. No theoretical-only patterns.

## Review Process

1. PRs are reviewed within 7 days
2. At least one maintainer must approve
3. Code examples are tested before merge
4. Patterns must include "When NOT to Use" — this is non-negotiable

## Code of Conduct

Be respectful, constructive, and focused on making this resource better for everyone. We welcome contributors of all experience levels.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
