import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID a746fd07abce4dba19f187cc5bcd41a3a5a58a97daa97b2749bf9c40555195ce'
  }
})
