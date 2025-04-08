import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Mail, Github, Linkedin, Download, ExternalLink } from 'lucide-react';

// Components
import HolographicSphere from './components/HolographicSphere';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import ExperienceCard from './components/ExperienceCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <HolographicSphere />
            </Suspense>
          </Canvas>
        </div>
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Yassine Azzouz
            </h1>
            <h2 className="text-2xl mb-8 text-cyan-300">Full Stack & IoT Developer</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors"
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-cyan-300">Education</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-800 rounded-lg backdrop-blur-lg bg-opacity-50">
                    <h4 className="text-xl font-semibold">Université Paris-Saclay</h4>
                    <p className="text-gray-400">Computer Engineering</p>
                    <p className="text-cyan-400">2023 - Present</p>
                  </div>
                  <div className="p-4 bg-gray-800 rounded-lg backdrop-blur-lg bg-opacity-50">
                    <h4 className="text-xl font-semibold">Faculty of Sciences of Tunis</h4>
                    <p className="text-gray-400">Computer Science</p>
                    <p className="text-cyan-400">2019 - 2023</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-cyan-300">Profile</h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate Full Stack Developer with expertise in IoT technologies. 
                  Experienced in building scalable web applications and developing 
                  innovative IoT solutions. Committed to creating efficient, user-friendly 
                  applications that solve real-world problems.
                </p>
                <div className="flex space-x-4">
                  <a href="/resume.pdf" download className="flex items-center text-cyan-400 hover:text-cyan-300">
                    <Download className="w-5 h-5 mr-2" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <SkillCard name="React" progress={90} />
            <SkillCard name="TypeScript" progress={85} />
            <SkillCard name="Spring Boot" progress={80} />
            <SkillCard name="PostgreSQL" progress={85} />
            <SkillCard name="ESP32" progress={75} />
            <SkillCard name="Firebase" progress={80} />
            <SkillCard name="Docker" progress={70} />
            <SkillCard name="IoT" progress={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Real-time Stock Tracker"
              description="Live stock market tracking application with real-time updates and analytics"
              tech={['React', 'TypeScript', 'WebSocket', 'Firebase']}
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard
              title="IoT Machine Control"
              description="Industrial machine monitoring and control system using ESP32"
              tech={['ESP32', 'MQTT', 'React', 'Spring Boot']}
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard
              title="Delivery Tracker"
              description="Real-time delivery tracking system with Firebase integration"
              tech={['React', 'Firebase', 'Google Maps API']}
              image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Experience
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              company="ETS"
              position="Software Engineering Intern"
              period="2023"
              description="Developed IoT solutions for industrial automation and monitoring systems"
              tech={['React', 'Spring Boot', 'ESP32', 'MQTT']}
            />
            <ExperienceCard
              company="Dawaya"
              position="Full Stack Developer Intern"
              period="2022"
              description="Built and maintained e-commerce platform features and integrations"
              tech={['React', 'Node.js', 'PostgreSQL', 'Docker']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-300">Get in touch</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                  ></textarea>
                </div>
                <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-cyan-300">Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:yassine.azzouz.dev@gmail.com"
                  className="flex items-center text-gray-300 hover:text-cyan-400"
                >
                  <Mail className="w-6 h-6 mr-3" />
                  yassine.azzouz.dev@gmail.com
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-400"
                >
                  <Github className="w-6 h-6 mr-3" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyan-400"
                >
                  <Linkedin className="w-6 h-6 mr-3" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Yassine Azzouz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;