import { List } from './components/List';
import style from './App.module.css';
import { Header } from './components/Header';
import { Task } from './components/Task';

import './global.css';


export function App() {

  return (
    <div>
      <Header />
      <Task />
      <List />
    </div>


  )
}

