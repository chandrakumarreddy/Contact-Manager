import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Contacts from "./components/contacts/Contacts.js";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";
import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <HashRouter>
          <div className="ui container">
            <Header />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contacts/add" component={AddContact} />
              <Route exact path="/contacts/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
