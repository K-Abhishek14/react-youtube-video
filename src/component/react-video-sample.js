import React, { Component } from 'react';
import { GridList, GridListTile, Typography, GridListTileBar,  Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Youtube from 'react-youtube';

const videoList = [
	{
		title: 'Matt Bevin - The Leadership Briefing',
		url: 'https://www.youtube.com/watch?v=tkYkm40k8_s',
		image: "https://i.ytimg.com/vi/tkYkm40k8_s/sddefault.jpg"
	},
	{
		title: 'Sissy Goff speaking at Q Commons',
		url: 'https://www.youtube.com/watch?v=KHN6NeE68S0',
		image: "https://i.ytimg.com/vi/KHN6NeE68S0/sddefault.jpg"
	},
	{
		title: 'Andrew Peterson speaking at Q Com',
		url: 'https://www.youtube.com/watch?v=hx-okulmKXM',
		image: "https://i.ytimg.com/vi/hx-okulmKXM/sddefault.jpg"
	},
	{
		title: 'Family Farming | Stephen Rose',
		url: 'https://vimeo.com/347315635',
		image: "https://i.vimeocdn.com/video/797691315.webp?mw=960&mh=540"
	},
	{
		title: 'Children at the Border | Gena Thomas',
		url: 'https://vimeo.com/345743144',
		image: "https://i.vimeocdn.com/video/795612725.webp?mw=960&mh=540"
	},
	{
		title: 'From the Broken Place | Bianca Olthoff',
		url: 'https://vimeo.com/346960116',
		image: "https://i.vimeocdn.com/video/797169660.webp?mw=400&mh=225"
	},
]

const youTubeVideoOptions = {
	height: '220',
  width: '220',
	playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    controls: 1,
	}
};

class Videos extends Component{
	onYouTubeVideoOnReadey = (event) => {
		event.target.pauseVideo();
	}

	render(){
		const {classes} = this.props;
		return <Grid container maxWidth='xs' className={classes.container} justify='center'>
      <Grid item>
			  <Typography variant='h6' className={classes.videosTitle}>Checkout some videos</Typography>
      </Grid>
      <Grid item>
        <GridList cellHeight={200} className={classes.gridList} spacing={1}>
        {videoList.map((item, index) => {
          return <GridListTile key={item.url} cols={2} rows={1} style={{width:180}}>
            {/* <div style={{backgroundImage: `url(${item.image})`}} /> */}
            {item.url.indexOf('youtube') !== -1 ?
                <Youtube videoId={item.url.substring(item.url.indexOf('=') + 1)} opts={youTubeVideoOptions} onReady={this.onYouTubeVideoOnReadey} /> :
                <img src={item.image} alt=""/>
            }
            <a href={item.url}  >
            <GridListTileBar title={item.title} titlePosition='top' className={classes.videoTitleBar}>
            </GridListTileBar></a>
          </GridListTile>
        })}
      </GridList></Grid>
    </Grid>
	}
}

const styles = theme => ({
	'@global': {
		body: {
			backgroundColor:theme.palette.common.white,
		},
	},
	videosTitle: {
		marginTop: theme.spacing(1),
		fontWeight: 'bolder',
		textAlign: 'center',
		marginBottom: theme.spacing(1),
	},
	container: {
		marginTop: theme.spacing(5),
		backgroundColor:theme.palette.common.white
	},
	gridList: {
    width: 360,
		marginTop: theme.spacing(2),
	},
	videoTitleBar: {
		background:
			'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
			'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
});

export default withStyles(styles, {withTheme: true})(Videos);