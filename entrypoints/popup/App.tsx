import React from "react";
import { Github, Linkedin, Coffee } from "lucide-react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <div className="text-center">
        <a
          href="https://wxt.dev"
          target="_blank"
          className="inline-block hover:opacity-80 transition-opacity"
        >
          <img src="/wxt.svg" alt="WXT logo" className="h-16 w-16 mb-4" />
        </a>
        <h1 className="text-3xl font-bold mb-2">FB QuickStory</h1>
        <h3 className="text-lg text-gray-300">Follow Me on Social Media</h3>
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/nomandhoni-cs/FB-QuickStory"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-900 transition-colors"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/nomandhoni/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="https://buymeacoffee.com/nomandhoni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:text-yellow-600 transition-colors"
        >
          <Coffee
            className="text-yellow-500 hover:text-yellow-600 "
            size={32}
          />
        </a>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-semibold mb-2">
          Want to contribute to this project?
        </h4>
        <p className="text-gray-300">
          This project is open-source and you can contribute by{" "}
          <a
            href="https://github.com/nomandhoni-cs/FB-QuickStory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            submitting a pull request
          </a>{" "}
          or creating an issue you're facing.
        </p>
      </div>
    </div>
  );
};

export default App;
