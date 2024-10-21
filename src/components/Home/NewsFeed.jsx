import React, { useState } from 'react';
import { news as initialNews } from '../../data/newsData';
import Logo from '../../assets/makerble_logo.png';
import toast from 'react-hot-toast';

const NewsFeed = () => {
  const [news, setNews] = useState(initialNews);
  const [newStory, setNewStory] = useState('');
  const [expandedStory, setExpandedStory] = useState(null);

  const handleExpandStory = (story) => {
    if (expandedStory === story.id) {
      setExpandedStory(null); 
    } else {
      setExpandedStory(story.id); 
    }
  };

  const handlePostStory = () => {
    if (newStory.trim() === '') return; 
    let id;
    toast.dismiss(id)
    if (newStory.length < 3) {
      id = toast.error("Story Length must be greater than 3 character");
      return;
    } 
    const newPost = {
      id: news.length + 1, 
      name: 'Yoel', 
      date: new Date().toLocaleDateString(),
      firstPosted: new Date().toLocaleTimeString(),
      lastEdited: new Date().toLocaleTimeString(),
      description: newStory,
      attachments: [],
    };

    setNewStory(''); 
    setNews([newPost, ...news]);
    toast.success("Story posted successfully"); 
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">What's New</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <input
            type="text"
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
            placeholder="Share your progress, Yoel!"
            className="flex-grow border border-gray-300 p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
            onClick={handlePostStory}
          >Post</button>
        </div>
        {news.map((story) => (
          <div key={story.id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition space-y-4">
            <div className="flex items-center space-x-4">
              <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">{story.name}</h3>
                <p className="text-sm text-gray-600">Activity on {story.date}</p>
                <p className="text-xs text-gray-500">Posted: {story.firstPosted} | Edited: {story.lastEdited}</p>
              </div>
            </div>
            <div className="transition-all duration-500">
              <p className="text-gray-800">
                {expandedStory === story.id ? (
                  <>
                    {story.description}{' '}
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleExpandStory(story)}
                    >
                      Show Less
                    </button>
                  </>
                ) : (
                    <>
                    {story.description.length < 200 ? 
                      story.description
                      : `${story.description.slice(0, 200)}...`
                    }
                    {story.description.length > 200 && (
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => handleExpandStory(story)}
                      >
                        Show More
                      </button>
                    )}
                  </>
                )}
              </p>
            </div>
            {story.attachments.length > 0 && (
              <div className="space-y-2">
                {story.attachments.map((file, index) => (
                  <a key={index} href={`/files/${file}`} className="text-blue-600 hover:underline text-sm">
                    {file}
                  </a>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between mt-4 gap-2">
              <div className="flex-grow flex items-center space-x-3">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="flex-grow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition">Post</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
