import React, { useContext, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

import { AlertContext, NotesContext } from "../../context";

const validationSchema = Yup.object({
  note: Yup.string().trim().required(true),
});

const Form = () => {
  const alertContext = useContext(AlertContext);
  const showAlert = useCallback(alertContext.showAlert, []);
  const { addNote } = useContext(NotesContext);

  const formik = useFormik({
    initialValues: {
      note: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      addNote(values.note);
      resetForm();
      showAlert("Saved", "success");
    },
  });

  useEffect(() => {
    if (formik.errors.note) {
      showAlert("Please, enter value", "error");
    }
  }, [formik.errors, showAlert]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <Input
          id="note"
          name="note"
          type="text"
          placeholder="Enter note"
          onChange={formik.handleChange}
          value={formik.values.note}
          error={formik.errors.note}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="submit" type="submit">
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

export default Form;
