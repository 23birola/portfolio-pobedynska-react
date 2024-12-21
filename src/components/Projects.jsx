import ProjectCard from './ProjectCard';
import workData from '../utils/works.json';

export default function WorksWrapper() {
  return (
    <section className="py-5" id="work">
      <h2 className="text-primary text-4xl mb-4" style={{ fontFamily: 'Satisfy' }}>Projects</h2>
      
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {workData.map((data) => (
            <div key={data.id}>
              <ProjectCard data={data}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
