import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9D3SqQ-n63RRlgtSIZsPITK-3DEyssQ_I7gkeU7rOYE',
  },
});
