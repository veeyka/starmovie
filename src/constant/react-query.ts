import { QueryClient } from "react-query";

const reactQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        cacheTime: 1000 * 60 * 60 * 24, 
      },
    },
  });

export default reactQueryClient;
