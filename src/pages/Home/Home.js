import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { AlertProvider } from "../../context";
import { Form, Notes, AlertMessage } from "../../components";

// Mock data for notes
const notes = new Array(3).fill("").map((_, i) => ({
  id: i,
  title: "Note",
  date: new Date().toLocaleDateString(),
}));

const Home = () => {
  return (
    <AlertProvider>
      <Container maxWidth="sm" component="main">
        <Box margin="25px 0">
          <AlertMessage type="error" />
        </Box>

        <Form />

        <Box marginTop="25px">
          <Notes notes={notes} />
        </Box>
      </Container>
    </AlertProvider>
  );
};

export default Home;
