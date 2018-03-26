import React from 'react';
import Main from './main';

import {HashRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

//import '../assets/main.css'
//import * as themes from '../assets/themes';



class PortalClient extends React.Component {
    constructor() {
        super();
    }

render() {
        return (
            <MuiThemeProvider theme={createMuiTheme()}>
              <Router>
                <Route render={({location}) => (
                    <div className='ROOT'>
                      <Switch location={location}>
                          <Route exact path="/" component={() => (<Main />)}/>
                      </Switch>
                    </div>
                  )}
                />
              </Router>
            </MuiThemeProvider>
          );
    }
}

export default PortalClient;
