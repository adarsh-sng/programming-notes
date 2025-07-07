
* venv,conda etc can be be used to create virtual environments
* Virtual environments allow you to manage dependencies for different projects separately

> `python3 -m venv myenv` creates a virtual environment named `myenv`
>`source myenv/bin/activate` activates the virtual environment
>`deactivate` deactivates the virtual environment
>`pip freeze > requirements.txt` saves the current environment's packages to a file.
>`pip install -r requirements.txt` installs packages from a requirements file
* To remove a virtual environment, simply delete the directory containing it
* To create a virtual environment with specific Python version, use `python3.x -m venv myenv` where `x` is the minor version number.
---
## uv
* `uv` is a tool for managing Python virtual environments
* `uv init --app` initializes a new  Python application.
`uv init --lib` && `uv init --package` initializes a new Python library or package.
* `uv run` runs a Python script in the virtual environment.
* `uv add` adds a package to the virtual environment.
* `uv remove` removes a package from the virtual environment.
* `uv list` lists all packages in the virtual environment.
* `uv tree` shows the dependency tree of the virtual environment.