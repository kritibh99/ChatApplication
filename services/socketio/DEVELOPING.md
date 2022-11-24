Developer's Guide
We use Visual Studio Code for developing LoopBack and recommend the same to our users.

VSCode setup
Install the following extensions:

eslint
prettier
Development workflow
Visual Studio Code
Start the build task (Cmd+Shift+B) to run TypeScript compiler in the background, watching and recompiling files as you change them. Compilation errors will be shown in the VSCode's "PROBLEMS" window.

Execute "Run Rest Task" from the Command Palette (Cmd+Shift+P) to re-run the test suite and lint the code for both programming and style errors. Linting errors will be shown in VSCode's "PROBLEMS" window. Failed tests are printed to terminal output only.

Other editors/IDEs
Open a new terminal window/tab and start the continuous build process via npm run build:watch. It will run TypeScript compiler in watch mode, recompiling files as you change them. Any compilation errors will be printed to the terminal.

In your main terminal window/tab, run npm run test:dev to re-run the test suite and lint the code for both programming and style errors. You should run this command manually whenever you have new changes to test. Test failures and linter errors will be printed to the terminal.