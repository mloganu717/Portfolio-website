import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Keep if using mobile menu

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // Keep for mobile if needed

  // Update nav items based on the image
  const navItems = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'RESUME', href: '#resume' }, // Assuming a resume section or link
  ];

  return (
    // Position top right, adjust padding/margin as needed
    <nav className="absolute top-8 right-8 z-50">
      {/* Remove glass effect container if not desired */}
      {/* <div className="glass-effect mx-4 my-4 rounded-lg"> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16"> {/* Justify end */}
            {/* Remove brand name */}
            {/* <div className="flex-shrink-0">...</div> */}

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              {/* Adjust spacing and styling */}
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wider" // White/light gray text
                    whileHover={{ scale: 1.05, color: '#FFFFFF' }} // Brighter white on hover
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {/* Add slash separator except for the last item */}
                    {index < navItems.length - 1 && <span className="ml-6">/</span>}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile menu button (keep if needed, style for dark mode) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md bg-gray-800 hover:bg-gray-700" // Example dark styling
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (keep if needed, style for dark mode) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5" // Example dark dropdown
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      {/* Remove closing div for glass effect if removed */}
      {/* </div> */}
    </nav>
  );
};

export default Navigation;