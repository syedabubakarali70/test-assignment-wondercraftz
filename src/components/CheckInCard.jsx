import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import Avatar from "../assets/Avatar.png";
import React from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import LabelTextField from "./TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const CheckInCard = ({ info }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const uploadedDate = info.uploadedDate?.toDate();

  const formattedDate = uploadedDate
    ? uploadedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        // hour: "2-digit",
        // minute: "2-digit",
      })
    : "No date available";
  return (
    <>
      <Grid
        size={1}
        onClick={handleClickOpen}
        sx={{ ":hover": { cursor: "pointer" } }}
      >
        <Paper elevation={4} sx={{ borderRadius: 4, p: 2 }}>
          <Stack gap={1}>
            <Box
              sx={{
                backgroundImage: "url(heroSectionImage.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4,
                width: "100%",
                height: "160px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                p: 1,
              }}
            >
              <Button variant="contained" sx={{ pointerEvents: "none" }}>
                Checked In
              </Button>
            </Box>
            <Typography variant="h6">{info.title}</Typography>
            <Typography color="text.secondary">{formattedDate}</Typography>
            <Stack flexDirection="row" alignItems="center">
              <Box
                sx={{
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                }}
              >
                <img src={Avatar} width={"100%"} height={"100%"} />
              </Box>
              <Typography fontWeight={600} ml={1}>
                Owner:{" "}
              </Typography>
              <Typography fontWeight={400}>James Doe</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Grid>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Check In Details
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
        <DialogContent dividers>
          <Stack flexDirection="row" justifyContent={"space-between"} gap={2}>
            <Stack flex={1} gap={1}>
              <LabelTextField label="Booking Id" value={1234567} />
              <LabelTextField label="Room" value={4} />
              <LabelTextField label="Number of Guests" value={4} />
              <LabelTextField label="Booked Date" value={formattedDate} />
            </Stack>
            <Stack width={"50%"} justifyContent={"center"}>
              <img
                src="heroSectionImage.png"
                alt=""
                width="100%"
                height={"70%"}
              />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

CheckInCard.propTypes = {
  info: PropTypes.object,
};

export default CheckInCard;
