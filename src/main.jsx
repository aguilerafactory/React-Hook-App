import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MainApp } from './09-useContext/MainApp';
import { BrowserRouter } from 'react-router-dom';
//import { TodoApp } from './08-useReducer/TodoApp';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { HooksApp } from './HooksApp';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MulipleCustomHooks } from './03-examples/MulipleCustomHooks';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemorizeHook } from './06-memos/MemorizeHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import './08-useReducer/intro-reducer';
//import { Padre } from './07-tarea-memo/Padre';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
    </StrictMode>
  </BrowserRouter>
)
