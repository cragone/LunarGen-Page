import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-white">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/">Lunar Gen</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/">HomePage</a></li>
          <li>
            <details>
              <summary>
                Search List
              </summary>
              <ul className="p-2 bg-primary text-white rounded-t-none">
                <li><a href="/StoryPage">Our Story</a></li>
                <li><a href="/ContactPage">Contact Page</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;