import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Mission from "./components/Mission"
import OperationSection from './components/OperationSection/OperationSection'
import Prequel from "./components/Prequel"
/* import { EmailForm } from '../Form/EmailForm' */
/* import { MediaSlide } from "../Animation/MediaSlide" */

// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

class TheMainFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pageDepth: this.getPathDepth(this.props.location)
      isContactModalActive: false
    };
    this.setContactModalOn = this.setContactModalOn.bind(this);
    this.setContactModalOff = this.setContactModalOff.bind(this);
  }

  setContactModalOn = () => {
    this.setState({
      isContactModalActive: true
    })
  }

  setContactModalOff = () => {
    this.setState({
      isContactModalActive: false
    })
  }

  // componentWillReceiveProps() {
  //   //When props are updated, update the current path 
  //   //props supplies us with the location object which has a router location info
  //   this.setState({ pageDepth: this.getPathDepth(this.props.location) });
  // }
  
  // getPathDepth(location) {
  //   let pathArr = location.pathname.split("/");
  //   pathArr = pathArr.filter(n => n !== "");
  //   return pathArr.length;
  // }

  render() {
  //   const { location } = this.props;
  // /*Used to track if the page path did change so when can re-render the routes to apply animation */
  //   const currentKey = location.pathname.split("/")[1] || "/";
  //   //Specify the duration of the animation (on enter and on exit)
  //   const timeout = { enter: 800, exit: 400 };

    return (
      // <TransitionGroup component="div" className="tmf">
      //   <CSSTransition
      //     key={currentKey}
      //     timeout={timeout}
      //     classNames="pageSlide"
      //     mountOnEnter={false}
      //     unmountOnExit={true}
      //   >
      //     <div className={
      //       this.getPathDepth(location) - this.state.pageDepth >= 0
      //         ? "page-left"
      //         : "page-right"
      //     }>
            <Switch>
              <Route exact path="/">
                <Landing
                  isContactModalActive={this.state.isContactModalActive}
                  setContactModalOn={this.setContactModalOn} 
                  setContactModalOff={this.setContactModalOff}
                />
                <OperationSection />
                <Footer />
              </Route>

              <Route exact path="/aboutus">
                <AboutUs 
                  setContactModalOn={this.setContactModalOn} 
                  setContactModalOff={this.setContactModalOff}
                />
              </Route>

              <Route exact path="/mission">
                <Mission 
                  setContactModalOn={this.setContactModalOn} 
                  setContactModalOff={this.setContactModalOff}
                />
              </Route>
              
            </Switch>
    //       </div>
    //   </CSSTransition>
    //  </TransitionGroup>
    )
  }
}

const TheMainFrameWithRouter = withRouter(TheMainFrame);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Prequel />
      {/* <TheMainFrameWithRouter /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
