import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {

  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID a746fd07abce4dba19f187cc5bcd41a3a5a58a97daa97b2749bf9c40555195ce'
      }
    });

    this.setState({images: response.data.results});
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
};

export default App;
