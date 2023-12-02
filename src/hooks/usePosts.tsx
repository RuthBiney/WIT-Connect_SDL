import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../utils/dtos";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Post[]>("http://localhost:9000/posts")
      .then(({ data }) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  return { posts, isLoading, error };
};
