import { motion } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import Navigation from './components/Navigation'
import './App.css'
// Assuming you have social icons components or svgs
// import { GithubIcon, LinkedinIcon, DevpostIcon } from './components/Icons';
// Assuming profile image is in public folder
const profileImageUrl = '/profile-pic.jpg'; // Replace with your actual image path

function App() {
  return (
    <MainLayout>
      {/* Add social icons top left */}
      <div className="absolute top-8 left-8 flex space-x-4 text-white">
        {/* Replace with actual icons or text */}
        <a href="https://devpost.com/billzhang" target="_blank" rel="noopener noreferrer" className="hover:text-primary">D</a> {/* Placeholder link */}
        <a href="https://github.com/billzhang" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GH</a> {/* Placeholder link */}
        <a href="https://linkedin.com/in/billzhang" target="_blank" rel="noopener noreferrer" className="hover:text-primary">in</a> {/* Placeholder link */}
      </div>

      <Navigation />

      {/* Add Scroll to Explore - Adjusted rotation and positioning */}
      <div className="absolute bottom-10 left-[-30px] text-white text-xs tracking-widest flex items-center transform -rotate-90 origin-top-left">
        <span className="mr-4">SCROLL TO EXPLORE</span> {/* Added margin */}
        <div className="w-16 h-px bg-primary"></div> {/* Horizontal line (rotated to vertical) */}
      </div>


      <main className="max-w-6xl mx-auto px-4 py-20 flex items-center min-h-screen text-white">
        {/* Hero Section */}
        <section className="flex-1 pr-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hello There! I'm <span className="text-primary">Bill Zhang</span> {/* Updated Name */}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl" // Lighter gray for description
          >
            {/* Updated Description */}
            An MSCS student at USC, blending machine learning with full-stack web development to craft future-ready applications. With a toolkit spanning NextJS, FastAPI, and Google Cloud, I refine my skills through intense hackathons. Explore with me the symphony of code and creativity!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full font-semibold" // Purple button, rounded
          >
            Contact
          </motion.button>
        </section>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0" // Circular image
        >
          <img src={profileImageUrl} alt="Logan" className="w-full h-full object-cover" />
        </motion.div>

        {/* Remove or comment out other sections if not needed for the landing page */}
        {/*
        <section className="py-20">...</section> // Projects
        <section className="py-20">...</section> // Skills
        <section className="py-20">...</section> // Contact Form (if different from button)
        */}
      </main>
    </MainLayout>
  )
}

export default App
