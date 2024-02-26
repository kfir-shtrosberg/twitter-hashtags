import axios from 'axios';

const getTweets = async () => {
    try {
      const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
        params: {
          query: '#bloomberg',
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TWITTER_BEARER_TOKEN}`,
        },
      });
  
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching tweets', error);
    }
  };
  
export default getTweets
  
