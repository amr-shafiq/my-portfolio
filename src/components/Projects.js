import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchRepos();
  }, []);

  useEffect(() => {
    filterRepos();
  }, [repos, searchTerm, selectedCategory]);

  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/amr-shafiq/repos?sort=updated&per_page=100');
      const data = await response.json();
      
      // Filter out forked repositories and add additional metadata
      const filteredData = data
        .filter(repo => !repo.fork)
        .map(repo => ({
          ...repo,
          category: getCategoryFromTopics(repo.topics || []),
          languageColor: getLanguageColor(repo.language)
        }));
      
      setRepos(filteredData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching repositories:', error);
      setLoading(false);
    }
  };

  const getCategoryFromTopics = (topics) => {
    if (topics.includes('web-app') || topics.includes('react') || topics.includes('frontend')) return 'web';
    if (topics.includes('api') || topics.includes('backend') || topics.includes('server')) return 'backend';
    if (topics.includes('mobile') || topics.includes('react-native')) return 'mobile';
    if (topics.includes('machine-learning') || topics.includes('ai')) return 'ai-ml';
    if (topics.includes('tool') || topics.includes('utility')) return 'tools';
    return 'other';
  };

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#178600',
      'PHP': '#4F5D95',
      'Ruby': '#701516',
      'Go': '#00ADD8',
      'Rust': '#dea584',
      'Swift': '#ffac45',
      'Kotlin': '#F18E33',
      'HTML': '#e34c26',
      'CSS': '#563d7c',
      'SCSS': '#c6538c',
      'Vue': '#2c3e50',
      'React': '#61dafb'
    };
    return colors[language] || '#586069';
  };

  const filterRepos = () => {
    let filtered = repos;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(repo => 
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(repo => repo.category === selectedCategory);
    }

    setFilteredRepos(filtered);
  };

  const categories = [
    { id: 'all', name: 'All Projects', count: repos.length },
    { id: 'web', name: 'Web Apps', count: repos.filter(r => r.category === 'web').length },
    { id: 'backend', name: 'Backend', count: repos.filter(r => r.category === 'backend').length },
    { id: 'mobile', name: 'Mobile', count: repos.filter(r => r.category === 'mobile').length },
    { id: 'ai-ml', name: 'AI/ML', count: repos.filter(r => r.category === 'ai-ml').length },
    { id: 'tools', name: 'Tools', count: repos.filter(r => r.category === 'tools').length },
    { id: 'other', name: 'Other', count: repos.filter(r => r.category === 'other').length }
  ];

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and learning experience in my journey as a developer.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredRepos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No projects found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {repo.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {repo.language && (
                        <div className="flex items-center space-x-1">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: repo.languageColor }}
                          ></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {repo.language}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {repo.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {repo.description}
                    </p>
                  )}

                  {/* Topics/Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>
                    <span>
                      Updated {new Date(repo.updated_at).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      View Code
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/amr-shafiq?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 