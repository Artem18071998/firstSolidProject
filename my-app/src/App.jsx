import logo from './images/Outdoor-Logo.png';
import cart from './images/Cart.png';
import styles from './App.module.css';
import pattern from './images/Pattern.png';
import pattern_2 from './images/Pattern-2.png';
import about from './images/About.png';
import arrow from './images/Arrow.png';
import pattern_3 from './images/Pattern-3.png';
import pattern_4 from './images/Pattern-4.png';

function App() {
  return (
    <div class={styles.container}>
      <header class="relative flex justify-between items-center w-full top-2.5 h-[59px]">
        <img src={logo} class="relative left-4" alt="logo"/>
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
      <hero class="relative flex w-[1440px] h-[640px] top-[21px] right-[121px] bg-[url('/src/images/Main.webp')]">
        <div class="relative left-[120px] top-[218.5px] w-[600px] h-[193px] ">
          <span class="relative left-[18px] bottom-[3px] body-font font-poppins text-sg tracking-[2px] uppercase text-[#E6B939]">OUTDOOR EXPLORATION</span>
          <h1 class="relative left-4 bottom-[7px] w-[416px] h-[116px] body-font font-roboto text-tg text-[#FFFFFF]">Gear for when it actually matters.</h1>
          <span class="relative w-[495px] h-[51px] left-[19px] top-[5px] body-font font-poppins text-tx text-[#CACCD1]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Suspendisse varius enim in eros elementum tristique.</span>
        </div>        
      </hero>
      <div class="relative top-[120px] w-[1168px] h-[576px]">
        <img src={pattern} class="relative top-[450px] right-[110px] w-[250px] h-64" alt="pattern"/>
        <img src={pattern_2} class="relative w-[250px] h-64 left-[467px] bottom-[385px]" alt="pattern-2"/>
        <img src={about} class="relative bottom-[510px] left-[15px]" alt="about"/>
        <div class="relative w-[400px] h-[227px] float-right right-[85px] bottom-[158%] ">
          <span class="relative left-3.5 bottom-[5px] body-font font-poppins text-gh tracking-[2px] uppercase text-[#E6B939]">Who are we?</span>
          <h1 class="relative left-[11px] bottom-[5px] body-font font-roboto text-tl text-[#575445]">A bit about us.</h1>
          <span class="relative left-3 bottom-2.5 w-96 h-[116px] body-font font-poppins text-xg text-[#575445]">We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio<br/>et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</span>
          <div class="relative flex w-[109px] h-[21px] left-2 bottom-[5px]">
            <ul class="">
              <li class="flex body-font font-poppins text-lj text-[#575445]"><a href="#">Read more</a><img src={arrow} class="relative w-[19.2px] h-2.5 left-1.5 top-[5px]" alt="arrow"/></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="relative w-[1440px] h-[900px] top-[225px] right-[120px] bg-[#FAFAFC]">
        <img src={pattern_3} class="relative w-[554.58px] h-[434.55px] top-[460px]" alt="pattern-3"/>
        <img src={pattern_4} class="relative w-[470.4px] h-[423.4px] bottom-[57%] left-[670px] float-right" alt="pattern-4"/>
        <div class="relative w-[1200px] h-[700px] bottom-[335px] left-[120px]">
          <div class="relative w-[600px] h-[129px] left-[305px]">
            <span class="relative body-font font-poppins text-sg tracking-[2px] uppercase text-[#E6B939] bottom-1.5 left-60">OUR PROMISE</span>
            <h1 class="relative body-font font-roboto text-tl text-[#575445] left-10 bottom-[5px]">Setting the bar for our products.</h1>
            <span class="relative body-font font-poppins text-xg text-[#575445] left-11 w-[538px] h-[58px]">Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
