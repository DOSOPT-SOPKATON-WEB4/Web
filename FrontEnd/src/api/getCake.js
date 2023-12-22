import axios from 'axios';

const getCake = async (setTag) => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/cake`);
  console.log(response);
  setTag(response.data.data.cake_list);
};
export default getCake;
