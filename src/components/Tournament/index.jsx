import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "80%",
    display: "inline-block",
    backgroundColor: "#e4eff2",
    "margin-top": "5%"
  },
  media: {
    height: 140
  }
});

const imgURL = "https://cdn.mos.cms.futurecdn.net/kRXPaebtQjZ42dBiV4aQxd-970-80.jpg";

export default function SearchCard(props) {
  const { title, description } = props.data;
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imgURL} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

SearchCard.propTypes = {
  data: PropTypes.object.isRequired
};
