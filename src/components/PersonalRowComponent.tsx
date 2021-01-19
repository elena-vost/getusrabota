import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Paper, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

interface IItem {
  original: string;
  thumbnail: string;
}

interface IProps {
  items: IItem[];
  vidUrl?: string;
  text?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paperRow: {
      padding: theme.spacing(3),
    },
  })
);

function PersonalRow({ items, vidUrl, text }: IProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperRow} elevation={3}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ImageGallery items={items} />
        </Grid>
        <Grid item xs={6}>
          <Box className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={vidUrl}
              controls
              width="100%"
              height="100%"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">{text}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default PersonalRow;