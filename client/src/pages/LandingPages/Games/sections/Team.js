import React, { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import "./game.css";

function Team() {
  const [gameUrl, setGameUrl] = useState("");
  const [selectedGame, setSelectedGame] = useState(null);
  const url1 = "https://www.retrogames.cz/play_253-NES.php?language=EN";
  const url2 = "https://www.retrogames.cz/play_078-NES.php?language=EN";
  const url3 = "https://www.retrogames.cz/play_022-NES.php#";
  const url4 = "https://www.retrogames.cz/play_1185-NES.php?language=EN";
  const url5 = "https://www.retrogames.cz/play_041-NES.php?language=EN";
  const url6 = "https://www.retrogames.cz/play_1372-NES.php?language=EN";
  const url7 = "https://www.smbgames.be/super-mario-bros.php";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/games");
        const data = await response.text();
        setGameUrl(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  function handleGameSelect(url) {
    setSelectedGame(url);
    setGameUrl(url);
  }

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid item xs={12} md={8} sx={{ mb: 6 }}>
          <MKTypography variant="h3" color="white">
            Games
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8}>
            To access the desired game, click/tap on the options below and enjoy the game.
          </MKTypography>

          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <button className="game-select-button" onClick={() => handleGameSelect(url1)}>
              Adventure Island
            </button>
            <button className="game-select-button" onClick={() => handleGameSelect(url2)}>
              Circus
            </button>
            <button className="game-select-button" onClick={() => handleGameSelect(url3)}>
              Contra
            </button>
            <button className="game-select-button" onClick={() => handleGameSelect(url4)}>
              Duck Hunt
            </button>
            <button className="game-select-button" onClick={() => handleGameSelect(url5)}>
              Ice Climber
            </button>
            <button className="game-select-button" onClick={() => handleGameSelect(url6)}>
              Ninja JaJa Maru-kun
            </button>
            <button className="game-select-button" onClick={() => handleGameSelect(url7)}>
              Super Mario Bros
            </button>

            {/* {url ? (
              <iframe className="gamingSize" src={gameUrl} title="game" allow="gamepad"></iframe>
            ) : (
              <p>Loading...</p>
            )} */}

            {selectedGame && (
              <iframe className="gamingSize" src={gameUrl} title="game" allow="gamepad"></iframe>
            )}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
