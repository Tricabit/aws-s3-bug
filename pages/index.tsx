import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        marginTop: 100,
      }}
    >
      <a style={{ fontSize: 100 }} href="/my-entity">
        CLICK HERE
      </a>
    </div>
  );
};

export default Home;
