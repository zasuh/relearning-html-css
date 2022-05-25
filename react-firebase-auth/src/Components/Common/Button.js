import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({ title, onAction }) {
  return (
    <Button variant="contained" onClick={onAction}>
      {title}
    </Button>
  );
}
