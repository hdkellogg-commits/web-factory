# Web Factory
Version: 1.2.0


A system for programmatically generating web applications and assets.

## 🌌 Git Synchronization & Compute Scheduling (Global Rules)
To prevent overwrite conflicts in this multi-node cluster, all agents MUST adhere to these Git WIP Lock rules:

1. **Before making code edits:** Mark the repo as DIRTY.
   ```bash
   /Users/howardkellogg/code/hdkellogg-commits/open-brain/.venv/bin/python /Users/howardkellogg/code/hdkellogg-commits/open-brain/scheduler/gravity_schedule.py --git-lock web-factory
   ```
2. **Before running git pull:** Check if another agent has uncommitted work.
   ```bash
   /Users/howardkellogg/code/hdkellogg-commits/open-brain/.venv/bin/python /Users/howardkellogg/code/hdkellogg-commits/open-brain/scheduler/gravity_schedule.py --git-check web-factory
   ```
3. **After committing and pushing:** Release the lock to mark the repo as CLEAN.
   ```bash
   /Users/howardkellogg/code/hdkellogg-commits/open-brain/.venv/bin/python /Users/howardkellogg/code/hdkellogg-commits/open-brain/scheduler/gravity_schedule.py --git-unlock web-factory
   ```

## Documentation
- `AGENTS.md`: Detailed instructions for agent-driven development.
- `GEMINI.md`: Specific guidelines for Google Gemini models.

## 📈 Project Evolution Timeline
- **2026-06-18**: Integrated `taste-skill` dynamic dials and anti-slop guidelines into the global constitution. The core agent profiles (@architect, @innovator, @coder, and @auditor) have been updated to enforce micro-aesthetic check constraints (Doppelrand nested containers, Button-in-Button, Eyebrow limits, and Em-dash bans). Global output completeness rules were introduced to prevent code truncation.