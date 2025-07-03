import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 65, color: "from-yellow-500 to-yellow-600" },
        { name: "Python", level: 65, color: "from-indigo-500 to-indigo-600" },
        { name: "Java", level: 60, color: "from-orange-500 to-orange-600" },
        { name: "C++", level: 55, color: "from-blue-600 to-blue-700" },
        { name: "HTML/CSS", level: 80, color: "from-emerald-500 to-emerald-600" },
        { name: "Dart", level: 75, color: "from-teal-500 to-teal-600" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", level: 65, color: "from-cyan-500 to-cyan-600" },
        { name: "Node.js", level: 70, color: "from-green-500 to-green-600" },
        { name: "PHP", level: 65, color: "from-purple-500 to-purple-600" },
        { name: "Laravel", level: 70, color: "from-pink-600 to-pink-700" },
        { name: "SQL", level: 75, color: "from-red-400 to-red-500" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-blue-600" },
        // { name: "Docker", level: 60, color: "from-blue-500 to-blue-600" },
        { name: "Google Cloud Platform", level: 55, color: "from-blue-300 to-blue-400" },
        { name: "Linux", level: 60, color: "from-lime-500 to-lime-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Throughout my academic journey, I've developed proficiency in various programming languages, 
            frameworks, and tools. I'm constantly learning and expanding my skill set.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Academic & Other Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Data Structures", "Algorithms", "Object-Oriented Programming", "Database Design", "REST APIs", "GraphQL",
              "UI/UX Design", "Webpack", "Babel", "Data Analysis", "Agile Methodology",
              "Problem Solving", "Critical Thinking", "Team Collaboration", "Technical Writing", "Documentation",
              "Windows", "Command Line", "Version Control", "Code Review", "Debugging",
              "Machine Learning", "Cloud Computing", "System Design"
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-3 rounded-lg text-center text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">
            Currently Learning
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Exploring AI/ML concepts and practical applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Computing</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">GCP services and cloud architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">System Design</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Scalable architecture and design patterns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 