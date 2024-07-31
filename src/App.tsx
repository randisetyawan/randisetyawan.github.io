import './App.css'

const dummyProjects = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects and skills. Built with HTML, CSS, JavaScript, and React.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
        githubLink: 'https://github.com/yourusername/portfolio-website',
        liveDemo: 'https://yourusername.github.io/portfolio-website/'
    },
    {
        id: 2,
        title: 'E-commerce Store',
        description: 'An online store for electronics with features like product listings, shopping cart, and checkout. Developed using Node.js, Express, and MongoDB.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
        githubLink: 'https://github.com/yourusername/ecommerce-store',
        liveDemo: 'https://yourusername.github.io/ecommerce-store/'
    },
    {
        id: 3,
        title: 'Blog Platform',
        description: 'A full-featured blog platform with user authentication, post creation, and comments. Built with Django and PostgreSQL.',
        technologies: ['Django', 'PostgreSQL', 'Bootstrap'],
        githubLink: 'https://github.com/yourusername/blog-platform',
        liveDemo: 'https://yourusername.github.io/blog-platform/'
    },
    {
        id: 4,
        title: 'Task Manager App',
        description: 'A task manager app to track daily tasks and goals. Features include task categorization, reminders, and progress tracking. Created using Angular and Firebase.',
        technologies: ['Angular', 'Firebase', 'Material Design'],
        githubLink: 'https://github.com/yourusername/task-manager-app',
        liveDemo: 'https://yourusername.github.io/task-manager-app/'
    },
    {
        id: 5,
        title: 'Chat Application',
        description: 'A real-time chat application with support for private and group messaging. Developed using Socket.io and Node.js.',
        technologies: ['Socket.io', 'Node.js', 'Express'],
        githubLink: 'https://github.com/yourusername/chat-application',
        liveDemo: 'https://yourusername.github.io/chat-application/'
    }
];

function App() {
  return (
    <div className="app">
      <header>
        <h1>M Randi Setyawan</h1>
        <p>Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer with experience in various modern web technologies.
          I love creating responsive and user-friendly web applications that solve real-world problems.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Django</li>
          <li>PostgreSQL</li>
          <li>Angular</li>
          <li>Firebase</li>
        </ul>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>
        <div className="projects">
          {dummyProjects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Contact me at: your.email@example.com</p>
      </footer>
    </div>
  )
}

export default App