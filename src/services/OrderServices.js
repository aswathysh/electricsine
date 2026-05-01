import axiosInstance from './Api';

export const createUserOrder = async (orderData) => {
    try {
      const response = await axiosInstance.post('orders', orderData);
      console.log("response",response)
      return response.data;
    } catch (error) {
      throw error;
    }
    };
    
    export const updateUserOrder = async (orderData) => {
          try {      
            const response = await axiosInstance.put(`orders/${orderData.id}`, orderData);
            console.log("response",response)
            return response.data;
          } catch (error) {
            throw error;
          }
          };

export const getUserOrders = async () => {
    try {
      const response = await axiosInstance.get('orders');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export const getUserProfile = async () => {
    try {
      const response = await axiosInstance.get('profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  