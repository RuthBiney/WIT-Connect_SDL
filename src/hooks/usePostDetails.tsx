import { useParams } from "react-router";
import { usePosts } from "./usePosts";

export const usePostDetails = () => {
  const { id } = useParams();

  const { posts, isLoading, error } = usePosts();

  // Get the data of a specific post
  const details = posts?.filter((post) => post.id === Number(id));
  const post = details[0];

  return { post, isLoading, postError: error };
};
