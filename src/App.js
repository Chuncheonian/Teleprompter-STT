import React, { Component, Fragment } from 'react';
import './App.css';
import { withStyles, Typography, Paper, Button, TextField} from '@material-ui/core';

const styles = theme => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
        minWidth: 1080
      },
    },
    title: {
        marginTop: theme.spacing.unit * 5,
        textAlign: 'center',
        display: 'none',
        fontSize: '2.0rem',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 5,
        marginLeft: theme.spacing.unit * 20,
        marginRight: theme.spacing.unit * 20
      },
    button: {
        marginTop: theme.spacing.unit * 1,
        marginLeft: theme.spacing.unit * 20,
        fontSize: '1rem',
    },
  });

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            script: ''
        }
    }

    // Get Script
    getScript = (e) => {
        this.script = e.target.value;
    }

    // Send script to server && Move Next URL
    handleScriptSubmit = (e) => {
        console.log(this.script);   // test
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>음성에 맞춰 대본을 화면에 실시간으로 출력하는 프롬프터 서비스</Typography>
                <Paper className={classes.paper} elevation={3}>
                    <TextField id="outlined-textarea" label="Script를 입력해주세요." fullWidth="true" rows={20} placeholder="Script" multiline variant="outlined" onChange={this.getScript}/>
                </Paper>
                <Button className={classes.button} variant="contained" color="primary" size="medium" onClick={this.handleScriptSubmit}>시작합니다.</Button>
            </Fragment>
        );
    }
}

export default withStyles(styles)(App);