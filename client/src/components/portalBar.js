import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class PortalBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>

                        <Typography variant="title" color="inherit" className={this.props.classes.flex}>
                            Retail Portal
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};

export default  withStyles(styles)(PortalBar);
