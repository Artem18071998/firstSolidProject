import logo from './images/Outdoor-Logo.png';
import cart from './images/Cart.png';
import styles from './App.module.css'; 

function App() {
  return (
    <div class={styles.container}>
      <header class="relative flex justify-between items-center w-full top-2.5 h-[59px]">
        <img src={logo} class="relative top-0.5 left-4" alt="logo"/>
        <nav class="relative flex right-3.5 w-[802px] h-[59px]">
          <ul class="text-primary-400 body-font font-poppins relative flex">
            <li class="pr-7 pl-3.5 pt-5 pb-[25px] text-sm"><a href="#">Shop</a></li>
            <li class="pr-7 pt-5 pb-[25px] text-base"><a href="#">About us</a></li>
            <li class="pr-7 pt-5 pb-[25px] text-base"><a href="#">Our team</a></li>
            <li class="relative right-[25px] pr-14px pl-7 pt-5 pb-[25px] text-sm"><a href="#">Buyer's guides</a></li>
            <li class="relative right-5 pr-10 pl-[34px] pb-5 pt-[19px] text-lg"><a href="#">Categories</a></li>
            <li class="relative top-[7px] right-[13px] h-11 rounded-md bg-[#575445] text-xl"><button class="pl-[18px] pr-[18px] pt-2.5 pb-[11px] text-white">Buy template</button></li>
          </ul>
          <li class="relative w-[125px] top-[7px] left-[7px] flex h-11 body-font font-poppins rounded-md bg-[#575445] text-white"><button class="flex text-xl"><img class="pl-[18px] pt-[13px] pr-2 pb-3.5" src={cart} alt="cart"/><span class="relative top-2.5">Cart</span><circle class="relative w-5 h-[18px] top-3.5 left-[11px] rounded-[9px] bg-[#ffffff] text-[#575445]">0</circle></button></li>
        </nav>
      </header>
      <hero class="relative flex w-full">

      </hero>
      </div>
  );
}

export default App;
