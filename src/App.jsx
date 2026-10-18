import { useState } from 'react'
import './App.css'

const expertise = [
  'C# & .NET Development',
  'ASP.NET Core/MVC',
  'Web API & REST',
  'React.js',
  'SQL Server',
  'Entity Framework',
  'AWS Serverless',
  'Lambda & S3',
  'Dependency Injection',
  'MVC Architecture',
  'API Integration',
  'Production Support',
  'Agile',
  'Microservices',
  'Client Collaboration',
]

const skillGroups = [
  ['Languages', 'C#, JavaScript, SQL'],
  ['.NET', '.NET Core, ASP.NET MVC Core, ASP.NET Web API, ADO.NET, Entity Framework, LINQ'],
  ['Frontend', 'React.js, JavaScript ES6+, HTML5, CSS3, Bootstrap, jQuery, AJAX'],
  ['Database', 'Microsoft SQL Server, Stored Procedures, Views'],
  ['Cloud & DevOps', 'AWS Lambda, S3, AWS Serverless, GitHub, IIS'],
  ['Architecture & Concepts', 'RESTful API Design, Dependency Injection, MVC, Test-Driven Development, Agile'],
  ['Tools', 'Visual Studio, VS Code, Postman, ServiceNow, TFS, SVN'],
]

const jobs = [
  { company: 'Infosys', role: 'Technology Lead', place: 'Hyderabad, India', date: 'Feb 2022 - Present', type: 'infosys', summary: 'Build and support enterprise applications using React, Node.js, and AWS services. Deliver business-critical features, production fixes, and releases in collaboration with cross-functional teams and clients.' },
  { company: 'RIG Enterprise Applications (OnBlick)', role: 'Software Engineer', place: 'Hyderabad, India', date: 'Jul 2020 - Feb 2022', type: 'rig', summary: 'Developed SaaS features for HR compliance using C#, ASP.NET MVC, Web API, and MongoDB. Delivered payroll and invoice workflows, API enhancements, and production support.' },
  { company: 'Technoxis', role: 'Software Engineer', place: 'Visakhapatnam, India', date: 'May 2017 - Mar 2020', type: 'technoxis', summary: 'Built enterprise web applications and REST APIs with C#, ASP.NET MVC, and SQL Server. Contributed to database design, client requirements, testing, and production support.' },
]

const projects = [
  { name: 'Manarural', title: 'Wellness & Lifestyle Brand', stack: 'React.js, Vite, Responsive UI, Deployment', description: 'Built a polished product showcase for a lifestyle brand focused on natural wellness and modern consumer engagement.', site: 'https://udaykirandev.github.io/manarural/', badge: 'Live', thumbnail: 'images/ManaRural.png' },
  { name: 'EventBazar', title: 'Event Discovery Platform', stack: 'React.js, UI Components, Responsive Layout, Deployment', description: 'Created a clean event landing experience with a browsing-first layout that highlights featured experiences and clear conversions.', site: 'https://udaykirandev.github.io/eventbazar/', badge: 'Live', thumbnail: 'images/EventBazar.png' },
]

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

const iconShapes = {
  home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></>,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></>,
  work: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
  book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 4.5v17M8 6h8M8 10h8" /></>,
  education: <><path d="m2 9 10-5 10 5-10 5zM6 11v5c3.3 2.7 8.7 2.7 12 0v-5M22 9v6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
  github: <><path fill="currentColor" stroke="none" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.82.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.58c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></>,
  linkedin: <><path fill="currentColor" stroke="none" d="M5.2 7.8a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.5 9.3h3.4v11.2H3.5zM9 9.3h3.3v1.5h.05a3.62 3.62 0 0 1 3.25-1.8c3.48 0 4.12 2.29 4.12 5.27v6.23h-3.44v-5.52c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.92v5.62H9z" /></>,
  twitter: <><path fill="currentColor" stroke="none" d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.4L5.58 22H2.45l7.25-8.28L1.8 2h6.4l4.43 6.76zM17.8 19.86h1.73L7.27 4.03H5.42z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></>,
  facebook: <><path fill="currentColor" stroke="none" d="M13.6 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.26-1.5 1.55-1.5h1.66V3.62A22 22 0 0 0 14.4 3c-2.4 0-4.05 1.47-4.05 4.18V9.9H7.63V13h2.72v8z" /></>,
  reddit: <><path d="M20.2 12a2 2 0 0 0-3.4-1.42 11.4 11.4 0 0 0-4.2-1.3l.7-3.3 2.3.5a1.6 1.6 0 1 0 .2-1.2l-3-.65a.6.6 0 0 0-.72.46l-.9 4.1a11.3 11.3 0 0 0-4.1 1.38A2 2 0 1 0 4.5 14a4.1 4.1 0 0 0-.2 1.2c0 3.2 3.45 5.8 7.7 5.8s7.7-2.6 7.7-5.8a4.1 4.1 0 0 0-.2-1.2 2 2 0 0 0 .7-2Z" /><path d="M9 15.5h.01M15 15.5h.01M9.5 18c1.4.9 3.6.9 5 0" /></>,
  moon: <><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
  hand: <><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12m0-6.5a1.5 1.5 0 0 1 3 0V12m0-4a1.5 1.5 0 0 1 3 0V13m0-2a1.5 1.5 0 0 1 3 0v4a6 6 0 0 1-6 6h-2c-2 0-3.5-1-4.5-2.5L4 14a1.5 1.5 0 0 1 2.5-1.5L8 14" /></>,
  arrowDown: <><path d="M12 5v14m-7-7 7 7 7-7" /></>,
  arrowUpRight: <><path d="M7 17 17 7M7 7h10v10" /></>,
}

function Icon({ name, className = '' }) {
  const strokeIcons = ['home', 'code', 'work', 'book', 'education', 'mail', 'instagram', 'reddit', 'moon', 'sun', 'hand', 'arrowDown', 'arrowUpRight']

  return (
    <svg
      className={`icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={strokeIcons.includes(name) ? 'none' : 'currentColor'}
      stroke={strokeIcons.includes(name) ? 'currentColor' : 'none'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {iconShapes[name]}
    </svg>
  )
}

function Mark({ type }) {
  const logoMap = {
    infosys: 'images/infosys.png',
    rig: 'images/rig.png',
    technoxis: 'images/technoxis.png',
  }

  return (
    <img
      className={`company-mark ${type}`}
      src={publicAsset(logoMap[type])}
      alt={type === 'infosys' ? 'Infosys logo' : type === 'rig' ? 'RIG logo' : 'Technoxis logo'}
      loading="lazy"
      decoding="async"
    />
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [expandedJobs, setExpandedJobs] = useState({})
  const [hoveredJob, setHoveredJob] = useState(null)
  const handleNavMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const nav = event.currentTarget
    const bounds = nav.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 6
    nav.style.setProperty('--nav-x', `${x}px`)
    nav.style.setProperty('--nav-y', `${y}px`)
    nav.style.setProperty('--nav-rotate', `${x * 0.35}deg`)
  }
  const resetNav = (event) => {
    event.currentTarget.style.setProperty('--nav-x', '0px')
    event.currentTarget.style.setProperty('--nav-y', '0px')
    event.currentTarget.style.setProperty('--nav-rotate', '0deg')
  }

  return (
    <div className={dark ? 'portfolio dark' : 'portfolio'}>
      <header className="header"><a href="#home" className="logo">UK<span>.</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#contact">Contact</a><button className="theme-button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title={`Switch to ${dark ? 'light' : 'dark'} theme`}><Icon name={dark ? 'moon' : 'sun'} /></button></nav></header>
      <main>
        <section className="intro" id="home"><div className="intro-text"><p className="kicker">Senior Full Stack .NET Developer <span>·</span> React | SQL Server | AWS</p><h1>Hi, I&apos;m Uday Kiran <span className="wave"><Icon name="hand" /></span></h1><p className="lead">Senior Full Stack .NET Developer with 9+ years of experience designing, developing, enhancing, and supporting enterprise web applications.</p>
        <div className="intro-links"><a href="#about">View profile  
          <b><Icon name="arrowDown" /></b>
          </a><a href="#contact" className="outline-link">Let&apos;s talk <b><Icon name="arrowUpRight" /></b></a></div></div><img className="avatar" src={publicAsset('images/cropped_circle_image.png')} alt="Uday Kiran Konchada" /></section>

        <section className="about content-section" id="about"><div className="section-title"><span>01</span><h2>Professional Summary</h2></div><div className="about-body"><p>Senior Full Stack .NET Developer with 9+ years of experience designing, developing, enhancing, and supporting enterprise web applications using <strong>C#, ASP.NET MVC, .NET Core, Web API, SQL Server, Entity Framework, React.js, and AWS</strong>. Experienced in RESTful API development, backend business logic, database development, dependency injection, production troubleshooting, and end-to-end application delivery. Currently working as a Technology Lead at Infosys, contributing to React.js and AWS-based enterprise applications. Experienced in Agile delivery, requirement analysis, client collaboration, production support, and implementation of business-critical features.</p><div className="availability"><span className="status-dot"></span><span>Senior developer · Enterprise applications · Hyderabad</span></div></div><h3 className="subheading">Core Expertise</h3><div className="expertise">{expertise.map((item) => <span key={item}>{item}</span>)}</div><h3 className="subheading">Technical Skills</h3><div className="skill-groups">{skillGroups.map(([label, value]) => <div className="skill-group" key={label}><h3>{label}</h3><p>{value}</p></div>)}</div></section>

        <section className="work content-section" id="work"><div className="section-title"><span>02</span><h2>Professional Experience</h2></div><div className="jobs">{jobs.map((job) => { const isExpanded = Boolean(expandedJobs[job.type]); const isVisible = isExpanded || hoveredJob === job.type; const summaryId = `job-summary-${job.type}`; return <article className={`job detailed-job${isVisible ? ' is-open' : ''}`} key={job.company} onMouseEnter={() => setHoveredJob(job.type)} onMouseLeave={() => setHoveredJob(null)}><Mark type={job.type} /><div className="job-main"><div className="job-heading"><button className="job-toggle" type="button" aria-label={isExpanded ? 'Hide experience summary' : 'Show experience summary'} title={isExpanded ? 'Hide experience summary' : 'Show experience summary'} aria-expanded={isVisible} aria-controls={summaryId} onClick={() => setExpandedJobs((current) => ({ ...current, [job.type]: !current[job.type] }))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="job-toggle-icon" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button><h3>{job.company}</h3><span className="tag">{job.role}</span><span className="tag job-location">{job.place}</span></div>{isVisible && <p className="job-summary" id={summaryId}>{job.summary}</p>}</div><time>{job.date}</time></article> })}</div></section>

        <section className="projects content-section" id="projects"><div className="section-title"><span>03</span><h2>My Projects</h2></div><p className="projects-intro">I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my individual projects.</p><div className="project-grid">{projects.map((project) => <article className="project-card" key={project.name}><div className="project-thumb"><img className="project-thumb-image" src={publicAsset(project.thumbnail)} alt={`${project.name} website preview`} loading="lazy" decoding="async" /><span className="project-badge">{project.badge}</span><span className="project-thumb-label">{project.name}</span></div><div className="project-card-body"><h3>{project.name}</h3><p className="project-title">{project.title}</p><p className="project-stack"><strong>Tech Stack:</strong> {project.stack}</p><p>{project.description}</p><a href={project.site} target="_blank" rel="noreferrer" className="project-link">Website</a></div></article>)}</div></section>

        <section className="education content-section" id="education"><div className="section-title"><span>04</span><h2>Education</h2></div><div className="education-list"><article className="education-row"><img className="school-logo" src={publicAsset('images/sitm.png')} alt="SITM logo" /><div><h3>Bachelor of Technology - Electronics & Communication Engineering</h3><p>Sarada Institute of Science, Technology & Management (JNTU-K), Srikakulam</p></div><time>2015</time></article></div><h3 className="subheading learning-title">Additional Learning</h3><ul className="learning-list"><li>AWS: Hands-on production experience with AWS Serverless.</li><li>React.js: Hands-on production experience with component-based UI development, hooks, state management, and application integration.</li></ul></section>

        <section className="contact content-section" id="contact"><span className="contact-pill">Contact</span><h2>Get in Touch</h2><p>I&apos;m open to conversations about full-stack development, cloud-native applications, and new opportunities.</p>
        
        <div className="socials"><a href="https://github.com/UdaykiranDev" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a className="linkedin-social" href="https://www.linkedin.com/in/uday-kiran-konchada/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href="https://x.com/MeUdayKonchada" target="_blank" rel="noreferrer" aria-label="Twitter"><Icon name="twitter" /></a><a href="https://www.instagram.com/me_konchadaudaykiran/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a><a href="https://www.facebook.com/udaykiran.konchad" target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" /></a><a href="https://www.reddit.com/user/meUdayKiranKonchada/" target="_blank" rel="noreferrer" aria-label="Reddit"><Icon name="reddit" /></a><a href="mailto:udaykirankonchada@outlook.com" aria-label="Email"><Icon name="mail" /></a></div></section>
      </main>
      <nav className="floating-nav" aria-label="Quick navigation" onMouseMove={handleNavMove} onMouseLeave={resetNav}><a href="#home" aria-label="Home"><Icon name="home" /></a><a href="#about" aria-label="About"><Icon name="code" /></a><a href="#work" aria-label="Experience"><Icon name="work" /></a><a href="#projects" aria-label="Projects"><Icon name="book" /></a><a href="#education" aria-label="Education"><Icon name="education" /></a><span className="nav-divider"></span><a href="https://github.com/UdaykiranDev" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a><a href="https://www.linkedin.com/in/uday-kiran-konchada/?isSelfProfile=true" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a><a href="https://x.com/MeUdayKonchada" target="_blank" rel="noreferrer" aria-label="Twitter"><Icon name="twitter" /></a><a href="https://www.instagram.com/me_konchadaudaykiran/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a><a href="https://www.facebook.com/udaykiran.konchad" target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" /></a><a href="https://www.reddit.com/user/meUdayKiranKonchada/" target="_blank" rel="noreferrer" aria-label="Reddit"><Icon name="reddit" /></a><button onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title={`Switch to ${dark ? 'light' : 'dark'} theme`}><Icon name={dark ? 'moon' : 'sun'} /></button></nav>
      <footer><span>© {new Date().getFullYear()} Uday Kiran Konchada</span><span>Built with React · Hyderabad, India</span></footer>
    </div>
  )
}

export default App
