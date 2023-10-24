import logo from './logo.jpg';
import './App.css';

export default function App() {
    return (
        <div>
             <header class="App-header">
                  <img src={logo} alt=''/>
                  <h1>School dashboard</h1>
             </header>

             <body class="App-body">
                   <p>Login to access the full dashboard</p>
             </body>

             <footer class="App-footer">
               <p>Copyright 2020 - holberton School</p>
             </footer>
        </div>
       );
}