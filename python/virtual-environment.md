- venv,conda etc can be be used to create virtual environments
- Virtual environments allow you to manage dependencies for different projects separately

**The activate file is just a shell script. When you run it, it does one main thing: it creates a new PATH variable by shoving the .venv folder to the very front of the list.**

> `python3 -m venv myenv` creates a virtual environment named `myenv` >`source myenv/bin/activate` activates the virtual environment
> `deactivate` deactivates the virtual environment
> `pip freeze > requirements.txt` saves the current environment's packages to a file.
> `pip install -r requirements.txt` installs packages from a requirements file

- To remove a virtual environment, simply delete the directory containing it
- To create a virtual environment with specific Python version, use `python3.x -m venv myenv` where `x` is the minor version number.

---

## uv

- `uv` is a tool for managing Python virtual environments
- `uv init --app` initializes a new Python application.
  `uv init --lib` && `uv init --package` initializes a new Python library or package.
- `uv run` runs a Python script in the virtual environment.
- `uv add` adds a package to the virtual environment.
- `uv remove` removes a package from the virtual environment.
- `uv list` lists all packages in the virtual environment.
- `uv tree` shows the dependency tree of the virtual environment.


I’m in read‑only plan mode, so here’s the plan to add the CLI command. Tell me to proceed when you want it implemented.
Plan
1. Update pyproject.toml to add:
   - [project.scripts]
   - rsearch = "main:main"
2. (Optional) Remove any other script names if present (none currently).
3. Install locally so the command becomes available:
   - pip install -e . (or uv sync if you’re using uv)
4. Verify:
   - rsearch keyword build
   - rsearch semantic search_chunked "space adventure"

uv sync
warning: Skipping installation of entry points (`project.scripts`) because this project is not packaged; to install entry points, set `tool.uv.package = true` or define a `build-system`
Resolved 61 packages in 12ms


Keyword search
- rsearch keyword build
- rsearch keyword search "space adventure"
- rsearch keyword bm25search "space adventure"
Semantic search (needs model deps)
- rsearch semantic embed_chunks
- rsearch semantic search_chunked "space adventure"