interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return <div className="px-4 py-2 bg-orange-300 rounded-lg">{tag}</div>;
};

export default Tag;
