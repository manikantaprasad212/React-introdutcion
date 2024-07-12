import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
<h1> Hello world!</h1>
 <h1>Hi</h1> 
 <img className="img" src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"></img>
 <p><h2>1. Download Node.js Installer</h2>
Visit the Node.js website: Go to https://nodejs.org/.
Download the installer: You’ll see two versions available – LTS (Long Term Support) and Current. LTS is recommended for most users as it is more stable.
 <h2>2. Install Node.js</h2>
<strong>Run the installer: </strong>Double-click the downloaded .msi file to start the installation.<br></br>
<strong>Follow the setup wizard:</strong> Click “Next” through the prompts.
Accept the license agreement.<br></br>
<strong>Choose the installation location:</strong> The default location is usually fine.<br></br>
<strong>Select components:</strong> It’s recommended to keep the default settings, which will install the Node.js runtime, npm package manager, and optionally add to the PATH environment variable.<br></br>
<strong>Install tools for Native Modules:</strong> This step is optional and involves additional tools for native module builds. You can check this option if you plan to use modules that need to be compiled from C/C++ source code.<br></br>
<h2>3. Verify the Installation</h2>
<strong>Open Command Prompt:</strong> Press Win + R, type cmd, and press Enter.
<strong>Check Node.js version:</strong> Type node -v and press Enter. You should see the version number of Node.js.
<strong>Check npm version:</strong> Type npm -v and press Enter. You should see the version number of npm.<br></br>
<h2>4. Update npm (Optional)</h2>
<strong>Although the Node.js installer includes npm, you might want to update it to the latest version:</strong>
<strong>Update npm:</strong> In the command prompt, type npm install -g npm and press Enter.<br></br>
<h2>5. Install Development Tools (Optional)</h2>
For some Node.js modules that need to be compiled from source, you might need additional tools:
Install Windows Build Tools: Open a command prompt as Administrator and run:
npm install -g windows-build-tools<br></br>
<h2>6. Setting Up Your First Node.js Project</h2>
<strong>Create a project folder:</strong> In the command prompt, navigate to the location where you want to create your project and run:
mkdir my-node-project
cd my-node-project<br></br>
<strong>Initialize a new Node.js project: Run:</strong>
npm init -y
This will create a package.json file with default settings.<br></br>
<h2>7. Write a Simple Node.js Application</h2>
<strong>Create an index.js file:</strong> In the project folder, create a file named index.js.
<strong>Add some code:</strong> Open index.js in a text editor and add the following code:
console.log('Hello, Node.js!');
<strong>Run your application:</strong> In the command prompt, run:
node index.js
You should see Hello, Node.js! printed in the terminal.
<h2>Troubleshooting Tips</h2>
<strong>Permission issues:</strong> If you encounter permission issues, try running the command prompt as an administrator.<br></br>
<strong>PATH environment variable:</strong> Ensure that the Node.js and npm paths are added to the PATH environment variable. The installer should handle this, but you can check by opening the Environment Variables settings and looking for C:\Program Files\nodejs.<br></br>
<h2>Useful Commands</h2>
<strong>Check installed packages:</strong> npm list -g --depth=0
Install a package: npm install package-name
Update npm: npm install -g npm@latest
Following these steps should help you get Node.js up and running on your Windows machine.
</p>
 </div>
  );
}
export default App;
