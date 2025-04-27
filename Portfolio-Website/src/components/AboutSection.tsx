import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a passionate developer with expertise in modern web technologies.
              I love creating beautiful, functional, and user-friendly applications
              that make a difference.
            </p>
            <p>
              With a strong foundation in React, TypeScript, and modern web
              development practices, I'm always looking for new challenges and
              opportunities to grow.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {['React', 'TypeScript', 'Node.js', 'Three.js', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                <motion.div
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary/50 p-3 rounded-lg text-center"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 