import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const validationSchema = Yup.object({
  note: Yup.string().trim().required("Required"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      note: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

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
