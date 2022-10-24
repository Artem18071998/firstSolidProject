import logo from './images/Outdoor-Logo.png';
import cart from './images/Cart.png';
import styles from './App.module.css'; 

function App() {
  return (
    <div class={styles.container}>
      <header class="relative flex w-full top-2.5 h-14.5px">
        <img src={logo} class="relative top-2.5 left-4" alt="logo"/>
        <nav class="relative flex">
          <ul class="">
            <li><a href="#">Shop</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our team</a></li>
            <li><a href="#">Buyer's guides</a></li>
            <li><a href="#">Categories</a></li>
            <li><button>Buy template</button></li>
          </ul>
          <button class="bg-black"><img src={cart} alt="cart"/></button>
        </nav>
      </header>
      <hero class="relative flex w-full">

      </hero>
    </div>
  );
}

export default App;
