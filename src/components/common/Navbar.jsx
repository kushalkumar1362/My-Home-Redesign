import React, { useState, useCallback, memo } from 'react';
import { FaBell, FaSearch, FaChevronDown, FaPlus, FaStar } from 'react-icons/fa';
import Logo from "../../assets/makerble_logo.png"
import { Link } from 'react-router-dom';
import { contacts } from '../../data/contacts'
import { projectsData } from '../../data/projects'
import { albumsData } from '../../data/albums'
import { organisationData } from '../../data/organisation'
import { boardData } from '../../data/board'

import ModalComponent from '../Modal'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMyAppOpen, setMyAppOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const [contactOpen, setContactOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [albumsOpen, setAlbumsOpen] = useState(false);
  const [organisationOpen, setOrganisationOpen] = useState(false);
  const [boardOpen, setBoardOpen] = useState(false);

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <nav className="bg-white shadow-md py-3 px-5 flex justify-between items-center sticky top-0 z-50 flex-wrap">
      {/* Left Section (Logo) */}
      <div className="flex justify-start lg:justify-between items-center">
        <img src={Logo} alt="Logo" className="h-10" />

        <div
          className="relative inline-block"
          onMouseEnter={() => setMyAppOpen(true)}
          onMouseLeave={() => setMyAppOpen(false)}
        >
          <button
            className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 hover:bg-[#bad6f3] px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          >
            <span>My Apps</span>
            <FaChevronDown className="flex items-center justify-center" />
          </button>

          {isMyAppOpen && (
            <div className="absolute left-0  w-32 max-w-48 bg-white border rounded shadow-lg z-10"
            >
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">App 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">App 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">App 3</li>
              </ul>
            </div>
          )}
        </div>

        <Link
          to={"/"}
          className="text-gray-700 hover:text-gray-900  hover:bg-[#bad6f3] px-4 py-2 rounded-lg transition duration-300 ease-in-out "
        >
          Home
        </Link>

        {/* Explore Link */}
        <Link to={"/explore"}
          className="text-gray-700 hover:text-gray-900  hover:bg-[#bad6f3] px-4 py-2 rounded-lg transition duration-300 ease-in-out "
        >
          Explore
        </Link>
      </div>


      {/* Center Section (Search Bar) */}
      <div className="flex-1 flex justify-center w-full max-w-md ml-2 lg:ml-4">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for contacts"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Right Section (Icons & Profile) */}
      <div className=" flex justify-between w-full lg:w-fit items-center space-x-2 md:space-x-8 text-xl flex-wrap mt-4 lg:mt-0">
        <div className="text-gray-700 hover:text-gray-900  hover:bg-[#bad6f3] px-4 py-2 rounded-lg transition duration-300 ease-in-out"
          onClick={() => {
            setAlbumsOpen(false)
            setProjectsOpen(false)
            setOrganisationOpen(false)
            setBoardOpen(false)
            setContactOpen(true)
          }}
        >
          Contacts
        </div>

        <button className="flex items-center px-3 py-[6px] rounded-lg text-[16px] font-bold text-white bg-red-500 border-2 border-transparent hover:text-red-500 hover:bg-white hover:border-red-500 transition duration-500 ease-in-out">
          <FaPlus className="mr-2" />
          Create
        </button>

        <div className='relative'>
          <FaBell className="text-gray-600 cursor-pointer hover:text-gray-800" />
          <div
            className="absolute -top-2 -right-3 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white">
            5
          </div>
        </div>

        <button className="flex items-center  text-[16px] font-bold text-[#212121] transition duration-500 ease-in-out hover:text-yellow-500">

          <FaStar className="mr-1" />

          <span className='text-[#212121]'>Upgrade</span>
        </button>

        <div
          className="relative"
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}
        >
          <img
            src="https://api.dicebear.com/9.x/initials/svg?seed=Makerble"
            alt="Logo"
            className="h-10 rounded-full"
          />
          {isProfileOpen && (
            <div className="absolute right-0 w-40 max-w-48 bg-white border rounded shadow-lg z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <p
                    onClick={() => {
                      setAlbumsOpen(false)
                      setContactOpen(false)
                      setOrganisationOpen(false)
                      setBoardOpen(false)
                      setProjectsOpen(true)
                    }}
                  >Projects</p>

                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setProjectsOpen(false)
                    setContactOpen(false)
                    setOrganisationOpen(false)
                    setBoardOpen(false)
                    setAlbumsOpen(true)
                  }}
                >Albums</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setProjectsOpen(false)
                    setContactOpen(false)
                    setAlbumsOpen(false)
                    setBoardOpen(false)
                    setOrganisationOpen(true)
                  }}
                >Organisations</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setProjectsOpen(false)
                    setContactOpen(false)
                    setAlbumsOpen(false)
                    setOrganisationOpen(false)
                    setBoardOpen(true)
                  }}
                >Boards</li>
              </ul>
            </div>
          )}
        </div>


        <ModalComponent isOpen={contactOpen} closeModal={() => setContactOpen(false)} title="My Contacts" items={contacts} newItemText="+ New Contact"
        />

        <ModalComponent isOpen={projectsOpen} closeModal={() => setProjectsOpen(false)} title="My Projects" items={projectsData} newItemText="+ New Project"
        />

        <ModalComponent isOpen={albumsOpen} closeModal={() => setAlbumsOpen(false)} title="My Albums" items={albumsData} newItemText="+ New Album"
        />

        <ModalComponent isOpen={organisationOpen} closeModal={() => setOrganisationOpen(false)} title="Organisation" items={organisationData} newItemText=""
        />

        <ModalComponent isOpen={boardOpen} closeModal={() => setBoardOpen(false)} title="Board" items={boardData} newItemText="+ New Board"
        />

      </div>

    </nav>
  );
};

export default memo(Navbar);
