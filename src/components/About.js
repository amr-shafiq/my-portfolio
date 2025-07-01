import React from 'react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Universiti Teknologi Malaysia",
      period: "2020 - 2024",
      description: "Graduated. Focused on software engineering, algorithms, and web development. Completed capstone project in full-stack development.",
      gpa: "3.29/4.0"
    }
  ];

  const experiences = [
    {
      title: "Vacation Trainee",
      school: "KPMG Malaysia",
      period: "2023 - 2024",
      description: "Took the internship from one of the KPMG branches in Malaysia, which is in Petaling Jaya with 6 months internship. Has been assigned as one of the digital team of KPMG Malaysia, Developed multimedia content and interactive digital materials used across internal departments; collaborated with creative and technical teams to meet client specifications and compliance requirements.",
      allowance: "RM1,000"
    }
  ];

  const experiences1 = [
    {
      title: "Webmaster Intern",
      school: "AMK Holidays Sdn Bhd",
      period: "2019 - 2020",
      description: "Maintained an agency website with the domain name 'goholidaymalaysia'. Regularly updated data and contracts from hotels that worked with AMK Holidays Sdn Bhd",
      allowance: "RM450"
    }
  ];

  const academicProjects = [
    {
      title: "SAgile Project Management Tool",
      description: "Developed a local project management tool using Laravel Blade, Node.js, Bootstrap, Vue.js and MySQL. Implemented user authentication, some features such as kanban board, team management, task management, access control list and more, along with MVC principles.",
      technologies: ["Laravel Blade", "Node.js", "MySQL", "Vue.js", "Bootstrap"]
    },
    {
      title: "LabSync: A lab appointment scheduling and management system",
      description: "Implemented an appointment scheduling system in real time in Dart, with database management in Firebase. Created efficient solutions for complex meetup or meeting problems.",
      technologies: ["Dart", "Firebase", "Flutter"]
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      name: "React Development",
      issuer: "Meta",
      date: "2023"
    },
    {
      name: "Python Programming",
      issuer: "Coursera",
      date: "2023"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Who Am I?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a recent Computer Science graduate with a passion for software development and problem-solving. 
                Throughout my academic journey, I've developed a strong foundation in programming fundamentals, 
                data structures, and modern web technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm excited to start my professional career and contribute to innovative projects. I'm particularly 
                interested in full-stack development, machine learning, and creating user-friendly applications 
                that solve real-world problems.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4.0</div>
                <div className="text-gray-600 dark:text-gray-300">Years of Study</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">7</div>
                <div className="text-gray-600 dark:text-gray-300">Academic Projects + My other projects</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">3.29</div>
                <div className="text-gray-600 dark:text-gray-300">GPA</div>
              </div>
            </div>
            {experiences.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                        {edu.school}
                      </span>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.period}
                    </div>
                    {/* <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                      Allowance: {edu.allowance}
                    </div> */}
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
            {experiences1.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                        {edu.school}
                      </span>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.period}
                    </div>
                    {/* <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                      Allowance: {edu.allowance}
                    </div> */}
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
          </div>

          

          {/* Right Column - Education & Projects */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.school}
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium mb-2">
                      GPA: {edu.gpa}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Projects */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Academic Projects
              </h3>
              <div className="space-y-6">
                {academicProjects.map((project, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-purple-600">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 