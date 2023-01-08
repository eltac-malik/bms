import React from 'react'
import './GoBack.css'
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function GoBack() {
    const navigate = useNavigate();
    return (
        <div className="operations">
        <Button
          className="button-mui return"
          variant="contained"
          onClick={() => navigate(-1)}
        >
          Geri
        </Button>
        <p></p>
      </div>
    )
}

export default GoBack
