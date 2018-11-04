import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import * as routes from "../constants/routes";
import CHARACTERS from "../constants/characters";
import OptionCard from "./OptionCard";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class CharacterSelect extends Component {
  onExit = () => {
    this.props.history.push(routes.LANDING);
  };

  render() {
    return (
      <div>
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          <h3>Choose Your Character</h3>
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {CHARACTERS.map((character) => (
            <OptionCard {...character} handleSelect={this.props.handleCharacterSelect} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
          <Button variant="outlined" color="primary" onClick={this.onExit}>
            Return to Main Page
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(CharacterSelect);
