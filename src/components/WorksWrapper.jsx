import WorkCard from './WorkCard';
import workData from './../utils/works.json';

//const workData = JSON.parse(data);
console.log(workData);
export default function WorksWrapper() {
  return (
    <section className='page-section' id='work'>
        <h2>Work</h2>
        <div className='work-list info-wrapper'>
        {workData.map((data) => (<WorkCard data={data} key={ data.id} />))}
        </div>
      </section>
  );
}

