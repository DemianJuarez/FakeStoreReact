export const SearchBar = (props) => {
  const { handleInput } = props;

  return (
    <div
      className="searchBar"
      style={{ display: "flex", paddingRight: "20px" }}
    >
      <input
        className="inputSearchBar"
        placeholder="Buscar"
        onChange={handleInput}
      ></input>
    </div>
  );
};
