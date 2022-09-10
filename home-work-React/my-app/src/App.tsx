import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Button, onClickLogin, onClickLogout, onClickSignUp } from "./components/Button";
import { Clicker } from "./components/Clicker";
import { Converter } from "./components/Convertor";
import { EmojiList } from "./components/Emoji/List/Index";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input";
import { LoginForm } from "./components/LoginForm";
import { PostList } from "./components/Posts/List";

import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { Title } from "./components/Title";
import { TodoList } from "./components/ToDoList/List";
import { UserCard } from "./components/User";
import { posts } from "./mocks";
import { Login } from "./pages/Login";

import { Main } from "./pages/Main";
import { Registration } from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Main/> */}
        {/* <Login/> */}
        {/* <Registration/> */}

        <Header/>
        <Converter/>
        <Timer/>
        <Clicker/>
        <PostList posts={posts}/>
        <EmojiList></EmojiList>
        <TodoList/>

        
          {/* <Title text="Hi React"/>
          <Converter/>
          <Button text="Login" onClick={onClickLogin} type ={"secondary"}/>
          <Button text="Sign up" onClick={onClickSignUp} type ={"secondary"} />
          <Button text="Logout" onClick={onClickLogout} type ={"secondary"} /> 
          <Input value="" placeholder='Введите логин' onChange={()=>{}} type={"login"}/>
          <UserCard UserName={"Sergei Mishyn"} /> 
          <Clicker/>
          <PostList posts={posts}/>
          <EmojiList></EmojiList>
          <Login></Login>
          <TodoList/>
          */}

      </BrowserRouter>
    </div>
  );
}

export default App;
