import SearchIcon from '../../public/img/search-icon.svg';
import MapIcon from '../../public/img/map-icon.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import jobs from '../components/data.json';

export default function JobLists() {
  const [showFullTime, setShowFullTime] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs.slice(0, 6));
  const [jobsToDisplay, setJobsToDisplay] = useState(5); // Başlangıçta görüntülenecek iş sayısı
  const [jobsToLoad, setJobsToLoad] = useState(5); // "Daha Fazla Yükle" tıklandığında yüklenecek iş sayısı

  const handleCheckboxChange = () => {
    setShowFullTime(!showFullTime);
  };

  const handleSearch = () => {
    const filtered = jobs.filter((item) => {
      const titleMatch = item.position.toLowerCase().includes(searchTerm.toLowerCase());
      const companyMatch = item.company.toLowerCase().includes(searchTerm.toLowerCase());
      const fullTimeMatch = showFullTime ? item.contract === 'Full Time' : true;
      const locationMatch = item.location.toLowerCase().includes(searchLocation.toLowerCase());

      // Eğer herhangi bir arama terimi, tam zamanlı işler veya konum girildiyse
      // başlık, şirket ve konumla ilgili filtreleri de kontrol ederek geri döndür
      if (searchTerm || showFullTime || searchLocation) {
        return titleMatch && companyMatch && fullTimeMatch && locationMatch;
      }

      // Eğer hiçbir filtre uygulanmamışsa, tüm işleri göster
      return true;
    });

    setFilteredJobs(filtered.slice(0, jobsToDisplay)); // Belirtilen iş sayısını göster
  };

  const handleLoadMore = () => {
    const newJobsToDisplay = jobsToDisplay + jobsToLoad;
    setJobsToDisplay(newJobsToDisplay);
    setFilteredJobs(jobs.slice(0, newJobsToDisplay));
  };

  return (
    <>
      <div className="job-list">
        <div className="container">
          <div className="list-wrapper">
            <div className="search-panel">
              <div className="search-filter">
                <span>
                  <img src={SearchIcon} alt="searchIcon" />
                </span>
                <input
                  type="text"
                  placeholder="Başlık, şirket, uzmanlık filtrele"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="search-location">
                <span>
                  <img src={MapIcon} alt="mapIcon" />
                </span>
                <input
                  type="text"
                  placeholder="Konuma göre filtrele…"
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>

              <div className="search-checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={showFullTime}
                    onChange={handleCheckboxChange}
                  />{' '}
                  Sadece Tam Zamanlı
                </label>
                <button className="btn" onClick={handleSearch}>
                  Ara
                </button>
              </div>
            </div>
          </div>

          <div className="jobs-wrapper">
            {filteredJobs.map((item) => (
              <div className="job-item" key={item.id}>
                <img src={item.logo} alt="" />
                <div className="job-content">
                  <h6>{item.postedAt} . {item.contract}</h6>
                  <h1>
                    <Link to={`/jobDetails/${item.position}`}>{item.position}</Link>
                  </h1>
                  <p>{item.company}</p>
                </div>

                <div className="location">
                  <p>
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="loadMore">
            <button className="btn" onClick={handleLoadMore}>Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}
