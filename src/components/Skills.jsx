import technologies from './../utils/skills.json'

export default function Contacts() {
  return (
  <section className='page-section about-me' id='skills'>
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