import React from "react";
import "./App.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

function App() {
  const downloadImage = () => {
    const method = "GET";
    const url = "https://source.unsplash.com/user/erondu/1920x1080";

    axios
      .request({
        url,
        method,
        responseType: "blob", //important
      })
      .then(({ data }) => {
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "Wallpaper.jpg"); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  };
  return (
    <div className="App">
      <h2>Click on the button below to download Random Wallpaper</h2>
      <br />
      <Button
        color="primary"
        size="large"
        variant="contained"
        startIcon={<GetAppIcon />}
        onClick={() => downloadImage()}
      >
        Download
      </Button>
    </div>
  );
}

export default App;
