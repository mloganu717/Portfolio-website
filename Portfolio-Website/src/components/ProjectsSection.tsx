import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'A modern web application built with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'An interactive 3D experience using Three.js.',
    technologies: ['Three.js', 'React', 'Framer Motion'],
    image: '/project2.jpg',
  },
  {
    title: 'Project 3',
    description: 'A full-stack application with modern architecture.',
    technologies: ['Node.js', 'React', 'MongoDB'],
    image: '/project3.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 