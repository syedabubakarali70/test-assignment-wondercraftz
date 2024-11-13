import { Stack, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
const LabelTextField = ({ label, value }) => {
  return (
    <Stack
      flexDirection="row"
      gap={1}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography>{label}</Typography>
      <TextField value={value} />
    </Stack>
  );
};

LabelTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

export default LabelTextField;
