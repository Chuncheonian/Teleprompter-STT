import React, { Component, Fragment } from 'react';
// import { withStyles, Typography, Paper, Button, TextField} from '@material-ui/core';

// const styles = theme => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '100%',
//         minWidth: 1080
//       },
//     },
//     title: {
//         marginTop: theme.spacing.unit * 5,
//         textAlign: 'center',
//         display: 'none',
//         fontSize: '2.0rem',
//         [theme.breakpoints.up('sm')]: {
//           display: 'block',
//         }
//     },
//     paper: {
//         marginTop: theme.spacing.unit * 5,
//         marginLeft: theme.spacing.unit * 20,
//         marginRight: theme.spacing.unit * 20
//       },
//     button: {
//         marginTop: theme.spacing.unit * 1,
//         marginLeft: theme.spacing.unit * 20,
//         fontSize: '1rem',
//     },
//   });

class PrompterPage extends Component {

    render() {
        // const { classes } = this.props;
        return (
            <Fragment>
              <h1>{this.props.script}</h1>
            </Fragment>
        );
    }
}

// export default withStyles(styles)(PrompterPage);
export default PrompterPage;