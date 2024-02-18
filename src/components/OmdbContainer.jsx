import { useState } from 'react';
import Container from './Container';
import Row from './Contacts';
import Col from './About';
import Card from './WorkCard';
import SearchForm from './ContactForm';
import MovieDetail from './WorkDetails';
import API from '../utils/API';

export default function OmdbContainer() {
  const [searchData, setSearchData] = useState({
    search: '',
    results: [],
  });

  // Add searchMovies function

  const searchMovies = (query) => {
    (query) => {
      API.search(query)
        .then((res) => setSearchData({ ...searchData, results: res.data.data }))
        .catch((err) => console.log(err));
    };
    // Add handleInputChange function

    const handleInputChange = (event) => {
      const { name, value } = event.target;

      setSearchData({
        ...searchData,
        [name]: value,
      });
    };

    // Add handleFormSubmit function

    const handleFormSubmit = (event) => {
      event.preventDefault();
      searchMovies(searchData.search);
    };

    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={searchData.results.Title || 'Search for a Movie to Begin'}
            >
              <MovieDetail
                title={searchData.results.Title}
                src={searchData.results.Poster}
                director={searchData.results.Director}
                genre={searchData.results.Genre}
                released={searchData.results.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={searchData.search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}