import axios from 'axios'

const baseURL = 'https://youtube-v31.p.rapidapi.com'

export const fetchFromAPI = async (url) => {
   const { data } = await axios.get(`${baseURL}/${url}`,
      {
         headers: {
            'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
         },
         params: {
            maxResults: '50'
         }
      }
   )

   return data;
}
