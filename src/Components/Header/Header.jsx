import React from 'react';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="text-5xl">Knowledge Hub</a>
  </div>
  <div className="flex-none gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
     
    </div>
  </div>
</div>
   
  );
};

export default Header;