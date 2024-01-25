import { useParams } from 'react-router-dom';
import jobs from '../components/data.json';
import { Link } from 'react-router-dom';

export default function JobDetails() {
    const { position } = useParams();
    const job = jobs.find (job => job.position === position)
    return(
        <>
            <div className='container'>
            <div className="detail-wrapper">
                <div className="detail-top">
                    <img src = {job.logo} alt="logo" />
                    <div>
                        <h1>{job.company}</h1>
                        <h4>{job.company}.com</h4>
                    </div>

                    <button className='detail-top-btn'>
                        <Link to={job.website}>Şirket Sitesi</Link>
                    </button>
                </div>
            </div>

        
            <div className="job-detail">
                <div className="about-job">
                    <div>
                        <h6>{job.postedAt} . {job.contract}</h6>
                        <h1>{job.position}</h1>
                        <span>{job.location}</span>
                    </div>
                    <button className='btn'>Şimdi Başvur</button>
                </div>
                <p className='job-desc'>{job.description}</p>

                <div className="requir">
                    <h1>Gereksinimler</h1>
                    <p>{job.requirements && job.requirements.content}</p>
                    <ul className='requir-item'>
                        {job.requirements && job.requirements.items && job.requirements.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div type="1" className='respons'>
                    <h1>Ne Yapacaksınız</h1>
                    <p>{job.role && job.role.content}</p>
                    <ol className='respons-item'>
                        {job.role && job.role.items && job.role.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>

            </div>
       </div>
       
       <div className='footer'>
        <div className='footer-content'>
            <div className='footer-text'>
                    <h4>{job.position}</h4>
                    <p>So Digital Inc.</p>
                </div>
                <div className='footer-btn'>
                    <button className='btn'>Şimdi Başvur</button>           
                </div>
            </div>
       </div>
        </>
       
    )
}