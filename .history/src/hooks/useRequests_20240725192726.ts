// src/hooks/useRequests.ts
import toast from '../helpers/toast';
import useGlobal from './useGlobal';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestConfig {
  method: RequestMethod;
  headers?: Record<string, string>;
  body?: string;
}

const useRequests = () => {
  const { token } = useGlobal();

  const fetchData = async (route: string, config: RequestConfig) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/${route}`, {
        ...config,
        headers: {
          'Authorization': `Bearer ${token}`,
          ...config.headers
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data);
      }

      return data;
    } catch (error: any) {
      toast.messageError(error.message);
      return null; // Optionally handle the return value in case of error
    }
  };

  const get = async (route: string) => {
    return fetchData(route, { method: 'GET' });
  };

  const getOne = async (route: string, id: string | number) => {
    return fetchData(`${route}/${id}`, { method: 'GET' });
  };

  const post = async (route: string, body: any, withToken: boolean = true) => {
    const config: RequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(withToken && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify(body)
    };

    return fetchData(route, config);
  };

  const del = async (route: string, id: string | number) => {
    return fetchData(`${route}/${id}`, { method: 'DELETE' });
  };

  const put = async (route: string, body: any, id: string | number) => {
    const config: RequestConfig = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    };

    return fetchData(`${route}/${id}`, config);
  };

  return {
    get,
    getOne,
    post,
    del,
    put
  };
};

export default useRequests;
