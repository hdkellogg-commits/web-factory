# web-factory Assistant Guidelines

> [!IMPORTANT]
> **`README.md` Governance — Hard Cap: 150 lines AND 18 KB (~18,000 bytes) MAX**
> `README.md` is a living project reference, **not** a changelog or scratchpad.
> - **Content**: What the factory generates, how to run it, current template/stack options, and key operational notes. No historical entries, migration notes, or version diffs.
> - **Before adding anything**, identify what is stale or superseded and remove it first.
> - **Before committing, verify both checks**: `wc -l README.md` must be under 150, AND `wc -c README.md` must be under 18,000 bytes.
>
> **Living Document Versioning & Export Governance**
> - **Version Header**: Add a version number to the header of all `readme.md` and `system.md` files (e.g., `Version: X.Y.Z`).
> - **Updates**: Update this version number (minor or major) whenever changes are made to these living documents.
> - **Exports**: Whenever these living documents are exported as PDFs, you **MUST** run the premium compiler script `/Users/howardkellogg/code/resource-manager/md_to_pdf.py <input.md>`, which applies the standard Anthropic-inspired styling (Newsreader serif headers, Inter sans-serif body, cream backgrounds, and custom callouts) and automatically appends the version number to the filename (e.g., `README_vX.Y.Z.pdf`).

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

## Assistant Rules
- **No Terminal Comments**: NEVER include `#` comments inside bash/shell/terminal code blocks.
- **Verify Working Directory**: Always `cd /Users/howardkellogg/code/hdkellogg-commits/web-factory` before running commands.
- **Agent Protocols**: Refer to `AGENTS.md` for project-specific development protocols.

---

## 🌌 Hybrid Local-Cloud Routing Protocol (Rolling 5-Hour Pro Plan)

To stay strictly within the limits of your Pro plan and leverage your MacBook Pro M5 Max (128GB RAM), you **must** adhere to this hybrid orchestration protocol.

### 1. Core Mandate
You operate in a hybrid cloud-local environment. **Your strong default should be to delegate work to Hermes (the local agent manager) rather than doing it yourself in the cloud.** The cloud agent's role is planning, integration, and review — not raw code generation.

**Never** generate more than 30 lines of code inline when a local tool can do it. This is a system constraint, not a preference.

---

### 2. Strict Routing Matrix

| Task Category | Trigger | Action |
| :--- | :--- | :--- |
| **System Architecture / Planning** | "Design a system...", "Plan out..." | Cloud inline — brief, structured |
| **Any code file creation (new file)** | Any new .py/.ts/.js/.sql file | `mcp_local_create_file` via Hermes 8B |
| **Code edits / refactoring** | Modifying existing files | `mcp_local_refactor_file` via Hermes 8B |
| **Deep analysis / code review** | Files > 1,500 tokens, audits, summaries | `mcp_local_analyze_file` via Hermes 8B |
| **Test runs / self-healing** | "Run tests", "fix compilation errors" | `mcp_local_run_command_and_fix` via Hermes 8B |
| **Multi-step / multi-file tasks** | Directory sweeps, migrations, complex goals | `mcp_spawn_local_agent` via Hermes 70B |

> [!IMPORTANT]
> **When in doubt, delegate.** If you are unsure whether something exceeds the threshold, it does. Send it to Hermes.

---

### 3. Operational Protocol
When a task hits any local-routing row above:
1. **Stop** — do not write the code or analysis in chat.
2. Formulate a precise, self-contained instruction payload (file paths, requirements, context).
3. Call the appropriate `local-orchestrator` MCP tool.
4. Use the returned result as ground truth. Integrate/review in cloud context only.

---

### 4. Dynamic Routing Governor (Token Shield)
Check `mcp_get_token_dashboard` before heavy steps:
- **Normal (< 50% usage)**: Route per matrix above.
- **Warning (50–80%)**: All tasks > 1,000 tokens MUST go local.
- **Critical (> 80%)**: Zero cloud code generation. Cloud is coordinator only. **Everything** goes to Hermes.

---

### 5. Enforcement
- ⛔ **BANNED**: Generating > 30 lines of code in a single turn when a local tool is available.
- ⛔ **BANNED**: Asking for filesystem access to `open-brain/`, `resource-manager/`, or any system folder to use local tools. The `local-orchestrator` MCP is a globally registered service — just call it.

---

### 6. Local Orchestrator Tools
The `local-orchestrator` MCP server is **globally registered** — no special file access needed. Call it directly.

#### A. `mcp_local_create_file` — Create a new file
```json
{
  "ServerName": "local-orchestrator",
  "ToolName": "mcp_local_create_file",
  "Arguments": {
    "file_path": "/absolute/path/to/new_file.py",
    "instruction": "Detailed description of what the file should do.",
    "model": "hermes3:8b"
  }
}
```

#### B. `mcp_local_refactor_file` — Edit an existing file
```json
{
  "ServerName": "local-orchestrator",
  "ToolName": "mcp_local_refactor_file",
  "Arguments": {
    "file_path": "/absolute/path/to/existing_file.py",
    "instruction": "Specific change instructions.",
    "model": "hermes3:8b"
  }
}
```

#### C. `mcp_local_run_command_and_fix` — Run tests and self-heal
```json
{
  "ServerName": "local-orchestrator",
  "ToolName": "mcp_local_run_command_and_fix",
  "Arguments": {
    "command": "npm test",
    "file_path": "/absolute/path/to/file_to_fix.ts",
    "model": "hermes3:8b",
    "max_retries": 2
  }
}
```

#### D. `mcp_local_analyze_file` — Deep file analysis
```json
{
  "ServerName": "local-orchestrator",
  "ToolName": "mcp_local_analyze_file",
  "Arguments": {
    "file_path": "/absolute/path/to/large_file.json",
    "instruction": "Summarize and identify key data structures.",
    "model": "hermes3:8b"
  }
}
```

#### E. `mcp_spawn_local_agent` — Multi-step autonomous task (Hermes 70B Manager)
Use this for complex, multi-file, multi-step goals. Hermes 70B will plan and execute autonomously.
```json
{
  "ServerName": "local-orchestrator",
  "ToolName": "mcp_spawn_local_agent",
  "Arguments": {
    "goal": "Complete, self-contained description of what needs to be accomplished.",
    "model": "hf.co/mradermacher/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled-GGUF:Q4_K_M",
    "turns": 15
  }
}
```

#### F. `mcp_get_token_dashboard` — Check budget before heavy tasks
```json
{
  "ServerName": "local-orchestrator",
  "ToolName": "mcp_get_token_dashboard",
  "Arguments": {}
}
```

---

### 7. Local Defaults
- **Local Manager (orchestration, multi-step)**: `hf.co/mradermacher/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled-GGUF:Q4_K_M`
- **Local Workers (code generation, edits, analysis)**: `qwen2.5-coder:32b`
- **Fallback (if qwen3.6/qwen2.5-coder:32b unavailable)**: `llama3.3:latest`
- **Embeddings**: `nomic-embed-text:latest`

## 🤖 Hector: Sovereign Watcher Service (Node 3 - Option B)
Hector is the Node 3 sovereign developer agent watcher operating on the MBP M5 Max. To launch multi-step background tasks, write a JSON mission contract into `/Users/howardkellogg/code/resource-manager/scratch/hector/missions/mission_name.json`:

```json
{
  "mission_id": "web_factory_task",
  "goal": "Explain specific tasks here...",
  "workspace_root": "/Users/howardkellogg/code/hdkellogg-commits/web-factory",
  "model": "hf.co/mradermacher/Qwen3.6-35B-A3B-Claude-4.7-Opus-Reasoning-Distilled-GGUF:Q4_K_M",
  "priority": "MEDIUM",
  "turns": 12
}
```
Upon completion, Hector releases locks and writes a JSON report summary to `scratch/hector/reports/report_mission_name.json`.
