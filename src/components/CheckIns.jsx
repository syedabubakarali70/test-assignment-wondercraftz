import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import CheckInCard from "./CheckInCard";
import { Typography } from "@mui/material";
import Bars from "../assets/Bars.svg";
import db from "../firebase/app";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; // Firestore functions
import CircularProgress from "@mui/material/CircularProgress";
const CheckIns = () => {
  const [checkIns, setCheckIns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Define the query to order check-ins by uploadedDate in descending order
    const checkInsQuery = query(
      collection(db, "checkins"),
      orderBy("uploadedDate", "desc") // Order by uploadedDate in descending order
    );

    const unsubscribe = onSnapshot(
      checkInsQuery,
      querySnapshot => {
        const checkInData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCheckIns(checkInData);
        setIsLoading(false);
      },
      error => {
        console.error("Error fetching check-ins: ", error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <Stack gap={2}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h5" fontWeight={500}>
          Added CheckIns
        </Typography>
        <img src={Bars} alt="" />
      </Stack>
      {isLoading ? (
        <CircularProgress sx={{ mx: "auto" }} />
      ) : (
        <Grid container columns={{ xs: 1, sm: 2, md: 4 }} spacing={4}>
          {checkIns.map((checkIn, index) => (
            <CheckInCard info={checkIn} key={index} />
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default CheckIns;
