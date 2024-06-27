import { useEffect, useState } from "react";
import apiClient from "../utils/api-client";

//url에 서버의 뒷주소(endpoint)를 적어서 GET으로 데이터를 가져옴
//현재 로딩상태를 추가
const useData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};

export default useData;
