import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { red } from "@material-ui/core/colors";
import { openPrompt } from "../../actions/prompt/openPrompt";
import { saveTournament } from "../../actions/tournament/saveTournament";

const useStyles = makeStyles({
  card: {
    width: "80%",
    display: "inline-block",
    backgroundColor: "#e4eff2",
    "margin-top": "5%",
    position: "relative"
  },
  media: {
    "margin-top": "2%",
    "margin-left": "2%",
    height: 50,
    width: 50,
    float: "left"
  },
  content: {
    float: "left",
    width: "70%"
  },
  button: {
    position: "absolute",
    top: -10,
    left: "90%"
  },
  iconHover: {
    "&:hover": {
      color: red[900]
    }
  }
});

const imgURL = "https://cdn.mos.cms.futurecdn.net/kRXPaebtQjZ42dBiV4aQxd-970-80.jpg";

function Tournament(props) {
  const {
    data: { title, description, id },
    clickable,
    openPrompt,
    saveTournament
  } = props;
  const classes = useStyles();

  return (
    <div
      onClick={() =>
        clickable ? saveTournament({ title, description, imgURL, id }) : null
      }
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imgURL} title={title} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}>
          {!clickable ? (
            <HighlightOffIcon
              color="error"
              className={classes.iconHover}
              style={{ fontSize: "25", paddingRight: "5" }}
              onClick={() => openPrompt(id)}
            />
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
}

Tournament.propTypes = {
  data: PropTypes.object.isRequired,
  saveTournament: PropTypes.func.isRequired,
  clickable: PropTypes.bool.isRequired,
  openPrompt: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  openPrompt: (id) => dispatch(openPrompt(id)),
  saveTournament: (tournament) => dispatch(saveTournament(tournament))
});

export default connect(null, mapDispatchToProps)(Tournament);
