# Web Factory

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
