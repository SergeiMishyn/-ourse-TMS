
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Title } from './components/Title';
import { UserCard } from './components/UserCard';

function App() {

  
  return (
    <div>
    <Title text='Hi React Component'/>
    <Button text="Hello"></Button>
    <Input placeholder="text"/>
    <UserCard UserName='Sergei Mishyn' isDark={true}/>
    </div>
  )
}

export default App;
