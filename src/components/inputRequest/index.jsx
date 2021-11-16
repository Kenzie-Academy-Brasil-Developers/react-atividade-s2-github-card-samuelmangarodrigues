import Cards from "../card";
const InputRequest = ({ repoName }) => {
  return (
    <div>
      {repoName.map((repo) => (
        <Cards
          name={repo.full_name}
          img={repo.owner.avatar_url}
          description={repo.description}
        />
      ))}
    </div>
  );
};
export default InputRequest;
