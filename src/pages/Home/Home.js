import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { Form, Notes } from "../../components";

// Mock data for notes
const notes = new Array(3).fill("").map((_, i) => ({
  id: i,
  title: "Note",
  date: new Date().toLocaleDateString(),
}));

const Home = () => {
  return (
    <Container maxWidth="sm" component="main">
      <Form />

      <Box marginTop="25px">
        <Notes notes={notes} />
      </Box>
    </Container>
  );
};

export default Home;
