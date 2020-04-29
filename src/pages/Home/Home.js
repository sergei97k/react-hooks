import React from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { AlertProvider, NotesProvider } from "context";
import { Form, Notes, AlertMessage } from "components";

const Home = () => {
  return (
    <AlertProvider>
      <NotesProvider>
        <Container maxWidth="sm" component="main">
          <Box margin="25px 0">
            <AlertMessage type="error" />
          </Box>

          <Form />

          <Box marginTop="25px">
            <Notes />
          </Box>
        </Container>
      </NotesProvider>
    </AlertProvider>
  );
};

export default Home;
