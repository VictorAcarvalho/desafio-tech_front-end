
import axios from 'axios';

 const apiEndpoint =  "https://mystique-v2-americanas.juno.b2w.io/autocomplete?source=nanook"


export default async function handleProductSearch(query){
  const response = await axios.get(`${apiEndpoint}&content=${query}`);
  return response.data;
};