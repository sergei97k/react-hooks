import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

import { AlertContext } from "../../context";

const validationSchema = Yup.object({
  note: Yup.string().trim().required(true),
});

const Form = () => {
  const { showAlert } = useContext(AlertContext);

  const formik = useFormik({
    initialValues: {
      note: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      resetForm();
      showAlert("Saved", "success");
    },
  });

  useEffect(() => {
    if (formik.errors.note) {
      showAlert("Please, enter value", "error");
    }
    // TODO: Need to fix
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.errors]);

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
