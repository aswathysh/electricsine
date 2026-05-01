import { useQuery } from '@tanstack/react-query';
import { registerUser } from './AuthenticationServices';

export const useRegistration = () => {
    return useQuery({ queryKey: ['auth'], queryFn: registerUser });
  };
  