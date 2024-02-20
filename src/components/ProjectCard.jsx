import { Link } from 'react-router-dom';

export default function WorkCard({ data }) {
  const cardStyle = {
    backgroundImage: `url(${data.img})`, // Set the background image URL here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className='project'>
      <div className="card">
       <img src={data.img} alt={data.name} className='card-img' />
          <div className="card-body work-info">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.skills.join(', ')}</p>
          <Link to={data.url} className='project-github'>GitHub Link</Link>
          <Link to={data.pageUrl} className='project-page'>Project page</Link>
          </div>
      </div>
    </div>
    
  );
}
