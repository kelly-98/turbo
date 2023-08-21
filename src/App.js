import AOS from "aos";
import "aos/dist/aos.css";

import logo from "./assets/img/logo.svg";
import logoFull from "./assets/img/logo-full.svg";
import logoFooter from "./assets/img/logo-footer.svg";
import ab1 from "./assets/img/ab-1.svg";
import ab2 from "./assets/img/ab-2.svg";
import ab3 from "./assets/img/ab-3.svg";
import demo from "./assets/img/demo.png";
import use1 from "./assets/img/use-1.svg";
import use2 from "./assets/img/use-2.svg";
import use3 from "./assets/img/use-3.svg";
import use4 from "./assets/img/use-4.svg";
import r1 from "./assets/img/r-1.svg";
import r2 from "./assets/img/r-2.svg";
import r3 from "./assets/img/r-3.svg";
import r4 from "./assets/img/r-4.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <header className="relative min-h-screen bg-[url('./assets/img/bg-header.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="bg-black/70 fixed z-50 top-0 right-0 left-0">
          <div className="container mx-auto px-5 py-5 flex flex-col items-center gap-1 justify-between lg:flex-row lg:gap-5">
            <div data-aos="fade-right" className="flex items-center gap-5">
              <div className="w-14">
                <img src={logo} alt="" />
              </div>
              <a href="/" className="hidden lg:block">
                Home
              </a>
              <a href="#about" className="">
                About
              </a>
              <a href="#tokenomics">Tokenomics</a>
              <a href="#use" className="hidden lg:block">
                How to Buy
              </a>
              <a href="#roadmap">Roadmap</a>
            </div>
            <div data-aos="fade-left" className="flex items-center gap-5">
              <a
                href="https://twitter.com/TurboBot_TG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5_28)">
                    <path
                      d="M20 39.9792C31.0342 39.9792 39.9792 31.0342 39.9792 20C39.9792 8.96576 31.0342 0.020752 20 0.020752C8.96576 0.020752 0.020752 8.96576 0.020752 20C0.020752 31.0342 8.96576 39.9792 20 39.9792Z"
                      fill="url(#paint0_linear_5_28)"
                    />
                    <path
                      d="M7.69276 8.42456L17.2426 21.1934L7.63257 31.5751H9.79557L18.2093 22.4855L25.0072 31.5751H32.3674L22.2801 18.0881L31.2251 8.42456H29.0621L21.3137 16.7956L15.053 8.42456H7.69276ZM10.8735 10.0177H14.2548L29.1862 29.982H25.805L10.8735 10.0177Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_28"
                      x1="20"
                      y1="0.020752"
                      x2="20"
                      y2="39.9792"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FF12D5" />
                      <stop offset="1" stop-color="#2C15FF" />
                    </linearGradient>
                    <clipPath id="clip0_5_28">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://t.me/TurboBot_TG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5_25)">
                    <path
                      d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                      fill="url(#paint0_linear_5_25)"
                    />
                    <path
                      d="M8.32335 19.8267L21.7917 14.2783C23.1217 13.7 27.63 11.85 27.63 11.85C27.63 11.85 29.7117 11.04 29.5384 13.0067C29.48 13.8167 29.0184 16.6483 28.555 19.7117L27.11 28.7867C27.11 28.7867 26.995 30.1167 26.0117 30.3467C25.0284 30.5767 23.41 29.5367 23.1217 29.3067C22.89 29.1333 18.7867 26.5317 17.2834 25.26C16.8784 24.9133 16.4167 24.22 17.3417 23.41C19.4234 21.5017 21.9084 19.1333 23.4117 17.63C24.105 16.9367 24.7984 15.3183 21.9084 17.2833L13.7584 22.775C13.7584 22.775 12.8334 23.3533 11.1 22.8333C9.36669 22.3133 7.34335 21.62 7.34335 21.62C7.34335 21.62 5.95669 20.7533 8.32669 19.8283L8.32335 19.8267Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_5_25"
                      x1="15.6907"
                      y1="40"
                      x2="15.6907"
                      y2="1.17235e-07"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2C15FF" />
                      <stop offset="1" stop-color="#FF12D5" />
                    </linearGradient>
                    <clipPath id="clip0_5_25">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-2xl mx-auto px-4 items-center justify-center text-center">
          <div className="max-w-xs">
            <img src={logoFull} alt="" />
          </div>
          <p className="my-5">
            Turbo Bot is a cutting-edge trading bot meticulously designed to
            thrive on the Base's various DEXs.
          </p>
          <p className="font-title text-gradient">
            Whether you're an experienced trader seeking to optimize your
            strategies or a newcomer eager to explore the exciting world of
            DeFi, Turbo Bot has got you covered.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 lg:gap-5 lg:flex-row">
            <a
              className="uppercase btn-primary rounded-2xl"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              buy $TBOT
            </a>

            <div className="bg-gradient rounded-2xl">
              <a
                className="uppercase btn-secondary m-[2px] rounded-2xl"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Turbo Bot Airdrop
              </a>
            </div>

            <div className="bg-gradient rounded-2xl">
              <a
                className="uppercase btn-secondary m-[2px] rounded-2xl"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                view in dextools
              </a>
            </div>
          </div>
        </div>
      </header>

      <section
        data-aos="fade-up"
        class="-mt-16 relative marquee-container bg-gradient py-5 font-bold text-3xl"
      >
        <div class="marquee flex justify-around">
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
        </div>
        <div class="marquee marquee2 hidden justify-around md:flex">
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
          <span>$TBOT</span>
        </div>
      </section>

      <main className="pt-16 py-8 bg-[url('./assets/img/bg-main.png')] bg-cover bg-no-repeat bg-center">
        <section className="container mx-auto px-4 py-5">
          <h3 className="text-center text-3xl">
            $TBOT is a Trading Bot with 100 Million total supply built on Base.
            95% of all tokens are distributed at launch.
          </h3>
          <p className="text-center my-8">
            Contract Address:{" "}
            <span className="text-gradient text-lg">0X000000000000000000</span>
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div
              data-aos="fade-right"
              className="bg-gradient rounded-xl flex items-center justify-center h-[518px]"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-8 text-center">
                <div className="max-w-xs mx-auto">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={ab1}
                    alt=""
                  />
                </div>
                <h4 className="text-gradient text-xl my-3">
                  Buy/Sell & Token Snipe
                </h4>
                <p>
                  Turbo Bot is a cutting-edge trading bot meticulously designed
                  to thrive on the Base's various DEXs.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gradient h-[518px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)]  rounded-xl p-8 text-center">
                <div className="max-w-xs mx-auto">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={ab2}
                    alt=""
                  />
                </div>
                <h4 className="text-gradient text-xl my-3">
                  Anti-MEV, Anti-Rug
                </h4>
                <p>
                  Protect your investments with Turbo Bot's robust anti-MEV and
                  anti-rug features. Safeguard against front-running and rug
                  pulls, ensuring a secure trading environment for your DeFi
                  ventures.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="bg-gradient h-[518px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)]  rounded-xl p-8 text-center">
                <div className="max-w-xs mx-auto">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={ab3}
                    alt=""
                  />
                </div>
                <h4 className="text-gradient text-xl my-3">
                  Scam Token Scanners
                </h4>
                <p>
                  Detect and avoid fraudulent tokens, protecting your assets
                  from scams and unreliable projects. Turbo Bot keeps you in
                  control and ensures a safer trading experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-16 lg:py-[150px] container mx-auto px-5"
        >
          <h3 className="text-center text-3xl font-bold">Turbo Bot</h3>
          <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
            <div data-aos="fade-right" className="max-w-2xl mx-auto">
              <img src={demo} alt="" />
            </div>
            <p data-aos="fade-left" className="text-center lg:text-left">
              TurboBot stands at the forefront of the ever-evolving DeFi
              landscape, armed with cutting-edge technology and a meticulous
              design that empowers traders of all levels. Our mission is to
              revolutionize the way you trade on various Decentralized Exchanges
              (DEXs) within the Base ecosystem.
              <br />
              <br />
              Whether you're a seasoned trader with battle-tested strategies or
              a curious newcomer taking your first steps into the thrilling
              world of DeFi, TurboBot is your ultimate companion. We believe
              that every trader, regardless of their experience, deserves an
              equal chance to succeed in this rapidly expanding market. That's
              why we've carefully crafted TurboBot to cater to your unique needs
              and trading ambitions.
              <br />
              <br />
              With TurboBot by your side, you can bid farewell to the
              complexities of manual trading and the uncertainty that often
              accompanies it. Our lightning-fast execution and advanced
              algorithms ensure that you never miss out on profitable
              opportunities in real-time. It's time to level up your trading
              game with TurboBot's speed and precision.
              <br />
              <br />
              Worried about scam tokens? We've got you covered on that front
              too. TurboBot's state-of-the-art scam token scanners will help you
              steer clear of fraudulent projects, allowing you to invest with
              confidence and peace of mind. Your safety is our top priority.
              <br />
              <br />
              As we embark on this journey together, TurboBot envisions becoming
              more than just a trading bot; it aims to be a dynamic community
              that fosters knowledge-sharing, growth, and success. We're
              committed to creating a space where traders can come together,
              exchange insights, and celebrate collective achievements.
            </p>
          </div>
        </section>

        <section id="tokenomics" className="container mx-auto px-5">
          <h3 className="text-center text-3xl font-bold">Tokenomics</h3>
          <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2">
            <div
              data-aos="fade-right"
              className="bg-gradient h-[178px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-black h-[174px] w-[calc(100%-4px)] rounded-xl p-8 flex items-center justify-center text-center">
                <div className="ml-5">
                  <h4 className="my-3">Total Supply:</h4>
                  <p className="text-gradient text-3xl ">100,000,000 $TBOT</p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gradient h-[178px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-black h-[174px] w-[calc(100%-4px)] rounded-xl p-8 flex items-center justify-center text-center">
                <div className="ml-5">
                  <h4 className="my-3">Tax (Buy/Sell)</h4>
                  <p className="text-gradient text-3xl">5% - 5%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="use" className="py-[100px] container mx-auto px-5">
          <h3 className="text-center text-3xl font-bold">How to Use</h3>
          <div className="grid grid-cols-1 gap-6 mt-10">
            <div
              data-aos="fade-right"
              className="bg-gradient h-[408px] rounded-xl flex items-center justify-center lg:h-[178px]"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-8 flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-start">
                <div className="w-36 flex-shrink-0">
                  <img
                    className="hover:opacity-80 transition-all w-28"
                    src={use1}
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-gradient text-xl my-3">Access the Bot</h4>
                  <p>
                    Access the Bot link conveniently placed on our Website or
                    find it on our official social media channels. Simply click
                    the link to embark on an exciting journey with us!
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gradient h-[408px] rounded-xl flex items-center justify-center lg:h-[178px]"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-8 flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-start">
                <div className="w-36 flex-shrink-0">
                  <img
                    className="hover:opacity-80 transition-all w-28"
                    src={use2}
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-gradient text-xl my-3">
                    Add your wallet{" "}
                  </h4>
                  <p>
                    To link your wallet with the Bot, simply paste your wallet's
                    private key. It's a quick and secure way to get started!
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="bg-gradient h-[408px] rounded-xl flex items-center justify-center lg:h-[178px]"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-8 flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-start">
                <div className="w-36 flex-shrink-0">
                  <img
                    className="hover:opacity-80 transition-all w-28"
                    src={use3}
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-gradient text-xl my-3">
                    Choose the command{" "}
                  </h4>
                  <p>
                    If you want to buy/sell any tokens, choose the corresponding
                    command. Paste the token contract then to check its
                    information
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gradient h-[408px] rounded-xl flex items-center justify-center lg:h-[178px]"
            >
              <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-8 flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-start">
                <div className="w-36 flex-shrink-0">
                  <img
                    className="hover:opacity-80 transition-all w-28"
                    src={use4}
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-gradient text-xl my-3">
                    Buy/Sell tokens
                  </h4>
                  <p>
                    Select Buy/Sell along with the desired quantity of tokens.
                    Once executed, the Bot will promptly send you the TxHash for
                    your transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-16 container mx-auto px-5">
          <h3 className="text-center text-3xl font-bold">Roadmap</h3>

          <div className="grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 xl:grid-cols-4">
            <div
              data-aos="fade-right"
              className="bg-gradient h-[518px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-[url('./assets/img/r-bg-1.png')] bg-cover bg-no-repeat bg-center h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-5">
                <h4 className="text-xl text-center">Phase 1</h4>
                <div className="w-44 mx-auto my-3">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={r1}
                    alt=""
                  />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-3">
                  <li>Bot Development</li>
                  <li>Community Building</li>
                  <li>Creation of Smart contract</li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="bg-gradient h-[518px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-[url('./assets/img/r-bg-2.png')] bg-cover bg-no-repeat bg-center h-[514px] w-[calc(100%-4px)] rounded-xl p-5">
                <h4 className="text-xl text-center">Phase 2</h4>
                <div className="w-44 mx-auto my-3">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={r2}
                    alt=""
                  />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-3">
                  <li>Release the official Bot version</li>
                  <li>Token launch</li>
                  <li>Marketing activities</li>
                  <li>ETH Trending</li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gradient h-[518px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-[url('./assets/img/r-bg-3.png')] bg-cover bg-no-repeat bg-center h-[514px] w-[calc(100%-4px)] rounded-xl p-5">
                <h4 className="text-xl text-center">Phase 3</h4>
                <div className="w-44 mx-auto my-3">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={r3}
                    alt=""
                  />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-3">
                  <li>
                    Extend compatibility to support more DEXs on Base Chain
                  </li>
                  <li>Introduce advanced tools</li>
                  <li>Giveaway for holders</li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="bg-gradient h-[518px] rounded-xl flex items-center justify-center"
            >
              <div className="bg-[url('./assets/img/r-bg-4.png')] bg-cover bg-no-repeat bg-center h-[514px] w-[calc(100%-4px)] rounded-xl p-5">
                <h4 className="text-xl text-center">Phase 4</h4>
                <div className="w-44 mx-auto my-3">
                  <img
                    className="hover:opacity-80 transition-all"
                    src={r4}
                    alt=""
                  />
                </div>
                <ul className="list-disc pl-5 flex flex-col gap-3">
                  <li>Decentralizing governance</li>
                  <li>Explore AI for enhanced analytics</li>
                  <li>Expand Turbo, providing tailored services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          data-aos="fade-up"
          className="py-16 lg:py-[100px] container mx-auto px-5"
        >
          <div className="bg-gradient h-[260px] lg:h-[178px] rounded-xl flex items-center justify-center">
            <div className="bg-black h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-xl p-8">
              <div className="">
                <p className="text-center text-2xl">
                  Join us on social media and explore the fantastic universe of
                  <span className="text-gradient"> $TBOT</span>!
                </p>
                <div className="flex items-center justify-center mt-5 gap-5">
                  <a
                    href="https://twitter.com/TurboBot_TG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5_28)">
                        <path
                          d="M20 39.9792C31.0342 39.9792 39.9792 31.0342 39.9792 20C39.9792 8.96576 31.0342 0.020752 20 0.020752C8.96576 0.020752 0.020752 8.96576 0.020752 20C0.020752 31.0342 8.96576 39.9792 20 39.9792Z"
                          fill="url(#paint0_linear_5_28)"
                        />
                        <path
                          d="M7.69276 8.42456L17.2426 21.1934L7.63257 31.5751H9.79557L18.2093 22.4855L25.0072 31.5751H32.3674L22.2801 18.0881L31.2251 8.42456H29.0621L21.3137 16.7956L15.053 8.42456H7.69276ZM10.8735 10.0177H14.2548L29.1862 29.982H25.805L10.8735 10.0177Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_5_28"
                          x1="20"
                          y1="0.020752"
                          x2="20"
                          y2="39.9792"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF12D5" />
                          <stop offset="1" stop-color="#2C15FF" />
                        </linearGradient>
                        <clipPath id="clip0_5_28">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a
                    href="https://t.me/TurboBot_TG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_5_25)">
                        <path
                          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
                          fill="url(#paint0_linear_5_25)"
                        />
                        <path
                          d="M8.32335 19.8267L21.7917 14.2783C23.1217 13.7 27.63 11.85 27.63 11.85C27.63 11.85 29.7117 11.04 29.5384 13.0067C29.48 13.8167 29.0184 16.6483 28.555 19.7117L27.11 28.7867C27.11 28.7867 26.995 30.1167 26.0117 30.3467C25.0284 30.5767 23.41 29.5367 23.1217 29.3067C22.89 29.1333 18.7867 26.5317 17.2834 25.26C16.8784 24.9133 16.4167 24.22 17.3417 23.41C19.4234 21.5017 21.9084 19.1333 23.4117 17.63C24.105 16.9367 24.7984 15.3183 21.9084 17.2833L13.7584 22.775C13.7584 22.775 12.8334 23.3533 11.1 22.8333C9.36669 22.3133 7.34335 21.62 7.34335 21.62C7.34335 21.62 5.95669 20.7533 8.32669 19.8283L8.32335 19.8267Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_5_25"
                          x1="15.6907"
                          y1="40"
                          x2="15.6907"
                          y2="1.17235e-07"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#2C15FF" />
                          <stop offset="1" stop-color="#FF12D5" />
                        </linearGradient>
                        <clipPath id="clip0_5_25">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center">
          <div className="w-36">
            <img src={logoFooter} alt="" />
          </div>
          <p className="mt-3 text-center">
            © 2023 turbobase.tech | contact@turbobase.tech
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
