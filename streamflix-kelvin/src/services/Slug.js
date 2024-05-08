import { useParams } from "react-router-dom";

export const SlugId = () => {
  const Slug = useParams();

  return Slug.Id;
};
