import React, { Component, Fragment } from 'react';
import { post } from 'axios';
import { withStyles, Typography, Paper, Button, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

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
  paperAlert: {
    marginTop: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 90,
    marginRight: theme.spacing.unit * 90
  }
});

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      script: ''
    }
  }

  stateRefresh = () => {
    this.setState({
      script: '',
    });
    this.callApi()
      .then(res => this.setState({script: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/script');
    const body = await response.json();
    return body;
  }

  // Get Script
  getScript = (e) => {
    this.script = e.target.value;
  }

  // Execute addScript() && Move Next URL
  handleScriptSubmit = (e) => {
    e.preventDefault()
    this.addScript()
    .then((response) => {
        console.log(response.data);
        this.stateRefresh();
    })
    this.setState({
      script: ''
  })
    this.props.history.push('/prompter');
}
  
  // Send script to Server
  addScript = () => {
    const url = `/api/this.props.script`;
    let scriptJSON = { script : this.script };
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    return post(url, JSON.stringify(scriptJSON), config);
}

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>음성에 맞춰 대본을 화면에 실시간으로 출력하는 프롬프터 서비스</Typography>
        <Paper className={classes.paper} elevation={3}>
          <TextField id="outlined-textarea" label="Script를 입력해주세요." fullWidth="true" rows={20} placeholder="Script" multiline variant="outlined" onChange={this.getScript} />
        </Paper>
        <Button className={classes.button} variant="contained" color="primary" size="medium" onClick={this.handleScriptSubmit}>시작합니다.</Button>
        <Paper className={classes.paperAlert}>
          <Alert severity="error"><strong>이 사이트는 Google Chrome에서 동작합니다.</strong></Alert>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainPage);