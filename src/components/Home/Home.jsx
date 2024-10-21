import React from 'react';
import HomeRight from './HomeRight';
import NewsFeed from './NewsFeed';

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full h-full p-4 md:space-x-4'>
      {/* Left Section (News Feed) */}
      <div className="w-full md:w-2/3 h-[700px] md:h-full overflow-y-auto bg-white p-6 rounded-lg shadow-lg">
        <NewsFeed />
      </div>

      {/* Right Section (Tasks) */}
      <div className="w-full md:w-1/3 md:px-6  h-full overflow-y-auto">
        <HomeRight />
      </div>
    </div>
  );
};

export default Home;
