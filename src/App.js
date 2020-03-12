import React from "react";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Main from "./components/Main";
import SearchBox from "./components/SearchBox";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Main>
          <SearchBox></SearchBox>
          <DataTable></DataTable>
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;

