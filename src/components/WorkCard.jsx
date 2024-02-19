import { Link } from 'react-router-dom';

export default function WorkCard({ data }) {
  return (
    <Link to={data.url} className={`${data.name} project`}>
      <div className="card">
              <div className="card-body work-info">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.skills.join(', ')}</p>
              </div>
            </div>
    </Link>
    
  );
}
