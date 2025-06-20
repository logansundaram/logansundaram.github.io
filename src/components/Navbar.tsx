import React from 'react';

function scroll(contentId: string): void {
  const el = document.getElementById(contentId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with id "${contentId}" not found.`);
  }
}

const Navbar = () => {
  return (
    <div className="z-10 nav max-w-screen container text-left fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
      <button onClick={() => scroll('About')} className="p-4 text-lg">About</button>
      <button onClick={() => scroll('Skills')} className="p-4 text-lg">Skills</button>
      <button onClick={() => scroll('Projects')} className="p-4 text-lg">Projects</button>
      <button onClick={() => scroll('Contact')} className="p-4 text-lg">Contact</button>
    </div>
  );
};

export default Navbar;
