import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-60 text-white py-3 px-4 text-center text-sm fixed bottom-0 z-50">
      <p>
        © {new Date().getFullYear()}  Made with <span className="text-red-500">❤️</span> by <span className="text-2xl">Jawad Shaikh</span> |
        GTA VI Fan Project |{' '}
        <a
          href="https://github.com/asynchronousJavascriptor/GTAVI"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 hover:underline"
        >
          Source Code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
