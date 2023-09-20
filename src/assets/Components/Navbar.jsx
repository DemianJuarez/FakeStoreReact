import { SearchBar } from "./SearchBar";

export const Navbar = (props) => {
  const { handleInput } = props;
  return (
    <nav
      className="navBar"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#5B0888",
        width: "100%",
        height: "75px",
      }}
    >
      <h1
        className="navBarTitle"
        style={{
          paddingLeft: "20px",
        }}
      >
        TITULO TIENDA GOD
      </h1>
      <SearchBar handleInput={handleInput} />
    </nav>
  );
};
