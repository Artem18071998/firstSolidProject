import logo from './images/Outdoor-Logo.png';
import cart from './images/Cart.png';
import styles from './App.module.css'; 

function App() {
  return (
    <div class={styles.container}>
      <header class="relative flex justify-between items-center w-full top-2.5 h-[59px]">
        <img src={logo} class="relative top-0.5 left-4" alt="logo"/>
        <nav class="relative flex w-[802px] h-[59px]">
          <ul class="relative flex">
            <li class="pr-7 pl-3.5 pt-5 pb-[25px]"><a href="#">Shop</a></li>
            <li class="pr-7 pt-5 pb-[25px]"><a href="#">About us</a></li>
            <li class="pr-7 pt-5 pb-[25px]"><a href="#">Our team</a></li>
            <li class="pr-[34px] pl-7 pt-5 pb-[25px]"><a href="#">Buyer's guides</a></li>
            <li class="pr-10 pl-[34px] pb-5 pt-[19px]"><a href="#">Categories</a></li>
            <li class="h-11 rounded-md bg-[#575445]"><button class="pl-[18px] pr-[18px] pt-2.5 pb-[11px] text-white">Buy template</button></li>
          </ul>
          <li class="relative left-5 flex h-11 rounded-md bg-[#575445] text-white"><button class="flex"><img class="pl-[18px] pt-[13px] pr-2 pb-3.5" src={cart} alt="cart"/>Cart<circle class="rounded-[9px] bg-[#ffffff] text-[#575445]">0</circle></button></li>
        </nav>
      </header>
      <hero class="relative flex w-full">

      </hero>
      </div>
  );
}

export default App;
