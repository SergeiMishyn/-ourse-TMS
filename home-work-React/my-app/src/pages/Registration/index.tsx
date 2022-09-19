import { Container } from "../../components/Container";
import { DarkModeToggle } from "../../components/DarkModeToggle";
import { Header } from "../../components/Header/Header"
import { RegistrationForm } from "../../components/RegistrationForm";
import styles from "./style.module.css"

export const Registration = () => {
  return (
    <Container>
      <Header/>
      <RegistrationForm/>
    </Container>
  )
};
