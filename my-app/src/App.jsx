import logo from './images/Outdoor-Logo.webp';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.container}>
      <header class="relative w-full top-2.5 h-14.5px">
        <img src={logo} class="relative top-2.5 left-4" alt="logo"/>

      </header>
    </div>
  );
}

export default App;
