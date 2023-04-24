import { Component } from "react";
import { Container } from "../components/container/Container.styled";
import { LoginForm } from "../components/LoginForm/LoginForm";

export class App extends Component {
  render() {
    return (
      <Container>
      <LoginForm/>
      </Container>
    )
  }
}