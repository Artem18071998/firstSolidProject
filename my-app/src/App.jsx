import styles from './App.module.css';

function App() {
  return (
    <div class={styles.container}>
      <header class="relative flex w-full top-2.5 h-14.5px">
        <img src="src/images/Outdoor.webp" class="relative top-2.5 left-4" alt="logo"/>
        <nav>
          <ul class="flex text end">
            <li><a href="#">Shop</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Buyer's guides</a></li>
            <li><a href="#">Categories</a></li>
            <li><button>Buy template</button></li>
          </ul>
          <button><img src="src/images/Cart.webp" alt="cart" /></button>
        </nav>
      </header>
    </div>
  );
}

export default App;
