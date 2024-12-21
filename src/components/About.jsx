import technologies from './../utils/skills.json'

export default function About() {
  return (
    <section className='page-section about-me' id='about'>
      <h2>About Me</h2>
      <div className='info-wrapper'>
        <p>I am a passionate frontend developer specializing in creating responsive
        and user-friendly web applications. With a strong focus on modern
        technologies like HTML, CSS, Java Script, React, Tailwind, Superbase, MongoDB and Next.js , I aim to deliver
        exceptional user experiences.</p>
      </div>
      <h2>Skills</h2>
      <div className='info-wrapper'>
        <p>Terminal, Git, GitHub, HTML5, CSS3, Flexbox, Grid, Bootstrap, JavaScript, jQuery, APIs, Node.js, NPM, JSON, ECMAScript6, Object-Oriented Programing, Test-Driven Development, React.js, React Hooks, JSX</p>
        <p className='icons'>
          {technologies.map((data) => (<img src={data.link} alt={data.name} key={data.id}/>))}
        </p>
        <div>icons by <a target="_blank" href="https://icons8.com">Icons8</a></div>
      </div>
    </section>
  );
}
