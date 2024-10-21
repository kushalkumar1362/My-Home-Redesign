// HomeRight.js
import React from 'react';
import { Link } from 'react-router-dom';

const MyNetwork = () => {
  return (
    <div className="space-y-1 w-full flex flex-col extraSm:flex-row gap-4 md:gap-0 md:flex-col">
      {/* Followers Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Followers</h3>
        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Replace these with dynamic images or data later */}
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Ram" alt="Follower 1" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Sham" alt="Follower 2" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Mohan" alt="Follower 3" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Sohan" alt="Follower 4" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Sohan" alt="Follower 4" className="mt-2 w-10 h-10 rounded-full" />
          <Link to={'/followers'} className="text-blue-500 block text-center">Show All</Link>
        </div>
      </div>

      {/* People You Follow Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">People You Follow</h3>
        <div className="flex items-center justify-between flex-wrap gap-2">
          {/* Replace these with dynamic images or data later */}
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Alice" alt="Following 1" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Bob" alt="Following 2" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Charlie" alt="Following 3" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=David" alt="Following 4" className="mt-2 w-10 h-10 rounded-full" />
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=David" alt="Following 4" className="mt-2 w-10 h-10 rounded-full" />
          <Link to={'/followers'} className="text-blue-500 block text-center">Show All</Link>
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;
