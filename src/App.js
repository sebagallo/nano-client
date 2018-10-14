import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdList from './components/AdList/AdList';
import AdDetail from './components/AdDetail/AdDetail';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={appTheme}>
                    <Header/>
                    <Route exact path="/" component={AdList}/>
                    <Route path="/detail/:id" component={AdDetail}/>
                    <Footer/>
                </MuiThemeProvider>
            </Router>
        );
    }
}

const appTheme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: green,
    }
});

export default App;
