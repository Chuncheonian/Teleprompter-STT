import React, { Component, Fragment } from 'react';
import './App.css';
import { withStyles, Typography, Paper, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
        minWidth: 1080
      },
    },
    title: {
        marginTop: 150,
        textAlign: 'center',
        display: 'none',
        fontSize: '3.0rem',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        //   fontSize: '20',
        }
    },
    paper: {
        marginTop: 100,
        marginLeft: 500,
        marginRight: 500
      },
    button: {
        marginTop: 15,
        marginLeft: 1320,
    },
  });

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                음성에 맞춰 대본을 화면에 실시간으로 출력하는 프롬프터 서비스
                </Typography>
                <Paper className={classes.paper} elevation={3}>
                    <TextField id="outlined-textarea" label="Script를 입력해주세요." fullWidth="true" rows={20} placeholder="Script" multiline variant="outlined"/>
                </Paper>
                <Button className={classes.button} variant="contained" color="primary">시작합니다.</Button>
            </>
        );
    }
}

// export default makeStyles(useStyles)(App);
// export default App;
export default withStyles(styles)(App);

