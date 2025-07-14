import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Calendar, Code, Database, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              My Website
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-blue-600 font-medium">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
            <div className="w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
              <Code className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Lester
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Full-Stack TypeScript Developer
          </p>
          <p className="text-lg max-w-2xl mx-auto opacity-80">
            Passionate about building modern web applications with clean code and great user experiences.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in TypeScript, React, and Node.js. 
                I love creating scalable web applications that solve real-world problems and provide 
                excellent user experiences.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Currently working on personal projects to showcase my skills in modern web development 
                technologies including Next.js, NestJS, and PostgreSQL.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a href="https://linkedin.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a href="mailto:contact@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Location: Your City, Country</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Experience: 3+ years</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Specialization: Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Languages: English, Chinese</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Frontend</h3>
              <div className="space-y-2 text-gray-600">
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">TypeScript</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">React</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">Next.js</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">Tailwind CSS</div>
              </div>
            </div>

            {/* Backend */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Code className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Backend</h3>
              <div className="space-y-2 text-gray-600">
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">Node.js</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">NestJS</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">Express</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">TypeORM</div>
              </div>
            </div>

            {/* Database */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Database</h3>
              <div className="space-y-2 text-gray-600">
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">PostgreSQL</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">MongoDB</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">Redis</div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block mx-1">MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Full-Stack Developer</h3>
                    <p className="text-blue-600 font-medium">Personal Projects</p>
                  </div>
                  <span className="text-gray-500 text-sm">2021 - Present</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Developing modern web applications using TypeScript, React, and Node.js. 
                  Focus on clean architecture, scalable solutions, and excellent user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">NestJS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm always interested in new opportunities and collaborations
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              View My Projects
            </Link>
            <a
              href="mailto:contact@example.com"
              className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}