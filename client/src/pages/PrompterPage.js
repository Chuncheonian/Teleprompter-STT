import React, { Fragment, useEffect } from 'react';
import axios from 'axios'
import { withStyles, Button} from '@material-ui/core';
import {
  GlobalStyles,
  StyledApp,
  StyledTeleprompter as Teleprompter,
} from "../styles";

const styles = theme => ({
  button: {
    fontSize: '1.2rem',
  },
});


function PrompterPage({match}) {
  const classes = styles();
  const [listening, setListening] = React.useState(false);
  const [words, setWords] = React.useState("".split(" "));
  const [progress, setProgress] = React.useState(0);

  // Server로부터 Script 받아옴
  useEffect(() => {
    axios.get('api/script')
        .then(res => {      // .then : 응답(상태코드200~300미만)성공시
          console.log(res.data);
          setWords(res.data.split(" ")); // 받아온 Script 문자열 처리
        })
        .catch(error => {
          console.log(error);
        });
    }, [match.params]);

  const handleListening = () => {
    if (listening) {
      setListening(false);
    } else {
      setProgress(0);
      setListening(true);
    }
  };

  const handleReset = () => setProgress(0);

  const handleChange = (progress) => setProgress(progress);

  return (
    <>
      <Button className={classes.button} variant="contained" color="primary" size="medium" onClick={handleListening}>{listening ? "Stop" : "Start"}</Button>
      <Button className={classes.button} variant="contained" color="secondary" size="medium" disabled={listening} onClick={handleReset}>Reset</Button>
      <GlobalStyles />
      <StyledApp>
        <Teleprompter words={words} listening={listening} progress={progress} onChange={handleChange} />
      </StyledApp>
    </>
  );
}

export default withStyles(styles)(PrompterPage);