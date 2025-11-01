import React from 'react';
import { LinkedInIcon, GitHubIcon } from '../icons';

const Header = () => (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-10" id="home">
      <div className="flex items-center gap-4 text-white">
        <span className="material-symbols-outlined text-primary text-2xl"> data_object </span>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Leo Zhang</h2>
      </div>
      <nav className="hidden flex-1 justify-end gap-8 md:flex">
        <div className="flex items-center gap-9">
          <a className="text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#about">About</a>
          <a className="text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#skills">Skills</a>
          <a className="text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#projects">Projects</a>
          <a className="text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex gap-2">
          <a aria-label="LinkedIn Profile" className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white/5 text-white transition-colors hover:bg-white/10" href="#">
            <LinkedInIcon />
          </a>
          <a aria-label="GitHub Profile" className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-white/5 text-white transition-colors hover:bg-white/10" href="#">
            <GitHubIcon />
          </a>
        </div>
      </nav>
    </header>
);

export default Header;
