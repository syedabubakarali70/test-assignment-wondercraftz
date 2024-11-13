import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { CircularProgress, Stack, TextField } from "@mui/material";
import upload from "../assets/upload.svg";
import db from "../firebase/app";
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Firestore functions
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddCheckIn = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTitle(""); // Reset title
    setError(""); // Clear error message
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }

    try {
      setIsLoading(true);
      await addDoc(collection(db, "checkins"), {
        title: title,
        uploadedDate: Timestamp.fromDate(new Date()),
      });
      setIsLoading(false);
      //   alert("Check-in added successfully!");
      handleClose();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add check-in. Please try again.");
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Check In
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Check In
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={theme => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <Typography fontWeight={500} mb={1}>
              Title
            </Typography>
            <TextField
              fullWidth
              placeholder="Input Title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
                if (error) setError(""); // Clear error on input change
              }}
              error={!!error} // Display error styling if error exists
              helperText={error} // Show error message below TextField
            />
            <Typography fontWeight={500} my={1} required>
              Upload Image
            </Typography>
            <Stack
              sx={{ border: "2px dashed", borderColor: "divider" }}
              width={"100%"}
              height={"160px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={upload} alt="" />
              <Typography>Click or drag file to this area to upload</Typography>
              <Typography textAlign={"center"} color="text.secondary">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other banned files
              </Typography>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {isLoading ? (
                <CircularProgress color="white" size="24px" />
              ) : (
                "Add"
              )}
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </>
  );
};

export default AddCheckIn;
