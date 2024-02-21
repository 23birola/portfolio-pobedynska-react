import { Link } from 'react-router-dom';

export default function WorkCard({ data }) {
  return (
    <div className='project'>
      <div className="card">
       
        <img src={data.img} alt={data.name} className='card-img' />
          <div className="card-body work-info">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.skills.join(', ')}</p>
          <Link to={data.pageUrl} className='project-page'>Project page</Link> | <Link to={data.url} className='project-github'>GitHub Link</Link> 
          </div>
      </div>
    </div>
  );
}
