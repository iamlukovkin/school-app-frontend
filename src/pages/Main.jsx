import React from 'react'
import RoadRules from "./RoadRules";
import HelpPhones from "./HelpPhones";
import Page from "./Page";
import Scammers from "./Scammers";
import Corruption from "./Corruption";
import Extremism from "./Extremism";
import pobeda from '../static/images/pobeda.jpg';
import Drones from "./Drones";
import SafetyNetwork from "./SafetyNetwork";

export default class Main extends Page {

  static title = "Main";
  static description = "";
  static link = "/";

  items = {};

  constructor(props) {
    super(props);
    const pages = [Corruption, SafetyNetwork, Drones, Extremism, Scammers, HelpPhones, RoadRules];
    for (let i = 0; i < pages.length; i++) {
      const randomKey = Math.random().toString(36).substr(2, 9);
      this.items[randomKey] = {
        title: pages[i].title,
        description: pages[i].description,
        link: pages[i].link,
      };
    }
  }

  render() {
    return (
      <main>
        {Object.keys(this.items).map(key => (
          <a href={this.items[key].link}>
            <div className={"main-page-item"}>
              <h2 key={key}>{this.items[key].title}</h2>
              <p key={key}>{this.items[key].description}</p>
            </div>
          </a>
        ))}
      </main>
    )
  }
}
