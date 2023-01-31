import { useQuery } from "react-query";
import requests from "../services/httpServices";

const useFetch = (key, url, body, options = {}) => {
    const { data, isLoading, isSuccess, isError, refetch } = useQuery(key, () =>
        requests.get(url, body)
    );
    return {
        data,
        isLoading,
        isSuccess,
        isError,
        refetch,
    };
};

export default useFetch;
