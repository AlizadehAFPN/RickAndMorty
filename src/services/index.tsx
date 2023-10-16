import {ResponseData} from '../Interface';
import axiosInstance from './axiosConfig';

export const testFinByte = async (
  address: string,
  search: string,
  status: string,
): Promise<ResponseData> => {
  try {
    const response = await axiosInstance.get(address, {
      params: {
        name: search, // Pass the search query as a parameter
        status,
      },
      timeout: 2500, // Set a timeout (e.g., 10 seconds)
    });
    return response.data;
  } catch (error: any) {
    // Now you have access to AxiosError-specific properties
    // You can also access Axios-specific error details, e.g., error.response
    if (error.response) {
      console.log('Response data:', error.response.data);
      console.log('Response status:', error.response.status);
    }
    throw error;
  }
};
