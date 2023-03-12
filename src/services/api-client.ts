import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '210d29afa0a944f78b2d2414b9faef48',
  },
});
