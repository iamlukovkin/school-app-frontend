import { Component } from "react";
import NavBar from "./NavBar";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <h1>Школа №41</h1>
          <p>Будущее за теми, кто учится!</p>
        </nav >
        <NavBar />
      </header>
    )
  }

}
