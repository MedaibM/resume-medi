import Typewriter from 'typewriter-effect';
import './App.css';

function App() {
  return (
    <div className="App">
      <span className="title">
        <Typewriter
          options={{
            strings: ['MEDAIB GEBREHIWOT', 'Resume'],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}

export default App;
