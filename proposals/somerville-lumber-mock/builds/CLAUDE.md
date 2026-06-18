@AGENTS.md
---

## 🔄 Automated Context Maintenance

At the conclusion of every major feature implementation, compilation fix, or coding session, you MUST execute a background documentation cycle:
- Update README.md: Append a highly compressed, 3-4 sentence high-level summary of the architectural evolution to a '## 📈 Project Evolution Timeline' section (include the date). Keep this strictly high-level for human stakeholders.
- Prune memory.md: Update the active focus state and blockers, then compress the file to keep it under 150 lines by aggressively deleting completed micro-tasks and temporary syntax bugs.
- Log Decisions: When logging session work to memory.md, also extract and append any binding architectural decisions to the '## 📜 Decisions' section. Use the numbered format (### DN. Title — Month Year) with status: confirmed. Update the '## 🧊 Cold Start' section to reflect the current state of the project.
