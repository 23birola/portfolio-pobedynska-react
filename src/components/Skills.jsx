import technologies from './../utils/skills.json'

export default function Contacts() {
  return (
  <section className='page-section about-me' id='skills'>
      <h2>Skills</h2>
      <div className='info-wrapper'>
        <p>
          {technologies.map((data) => (<img src={data.link} alt={data.name} key={data.id} />))}
        </p>
      </div>
  </section>
  );
}