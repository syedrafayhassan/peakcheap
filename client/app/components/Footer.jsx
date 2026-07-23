import Link from "next/link";


// I Created this footer but not added it on github


export default function Footer(){
    return(
        <footer className="bg-gray-50 border-t border-gray-200 ">
              {/* Quick Links */}
<div className="flex items-center">
  <h4 className=" flex pl-2! items-center w-[22%] font-bold text-gray-800">
    Quick Links
  </h4>
  <ul className="space-y-2 flex justify-center flex-wrap gap-4 p-3!">
    <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
      <Link href="/" className="text-gray-500 hover:text-blue-600 text-sm transition">
        Home
      </Link>
    </li>
    <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
      <Link href="/about" className="text-gray-500 hover:text-blue-600 text-sm transition">
        About Us
      </Link>
    </li>
     <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
    <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition">
      Privacy Policy
    </Link>
  </li>
    <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
      <Link href="/search?query=iphone" className="text-gray-500 hover:text-blue-600 text-sm transition">
        iPhone Deals
      </Link>
    </li>
    <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
      <Link href="/search?query=samsung" className="text-gray-500 hover:text-blue-600 text-sm transition">
        Samsung Deals
      </Link>
    </li>
    <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
      <Link href="/search?query=laptop" className="text-gray-500 hover:text-blue-600 text-sm transition">
        Laptop Deals
      </Link>
    </li>
    <li className="border border-gray-200 rounded-full text-sm p-2! hover:border-blue-400 hover:text-blue-600 transition-all">
      <Link href="/search?query=nike" className="text-gray-500 hover:text-blue-600 text-sm transition">
        Nike Deals
      </Link>
    </li>
  </ul>
</div>
        {/* { Copyright } */}
            <div className="max-w-6xl flex justify-between items-center">
                
          
       
           <p className="text-gray-400 ml-2!">  © {new Date().getFullYear()} PeakCheap. All rights reserved.</p>
       
        <div className=" text-gray-400 text-xs text-center">
          
             <ul className="flex items-center gap-3.5">
                <li>
                    <a href="https://instagram.com/peakcheap" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-sm transition">
                           <svg 
      xmlns="http://w3.org" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 264.583 264.583" 
      className="w-6 h-6"
    >
      <defs>
        <radialGradient xlinkHref="#a" id="f" cx="158.429" cy="578.088" r="52.352" fx="158.429" fy="578.088" gradientTransform="matrix(0 -4.03418 4.28018 0 -2332.227 942.236)" gradientUnits="userSpaceOnUse"/>
        <radialGradient xlinkHref="#b" id="g" cx="172.615" cy="600.692" r="65" fx="172.615" fy="600.692" gradientTransform="matrix(.67441 -1.16203 1.51283 .87801 -814.366 -47.835)" gradientUnits="userSpaceOnUse"/>
        <radialGradient xlinkHref="#c" id="h" cx="144.012" cy="51.337" r="67.081" fx="144.012" fy="51.337" gradientTransform="matrix(-2.3989 .67549 -.23008 -.81732 464.996 -26.404)" gradientUnits="userSpaceOnUse"/>
        <radialGradient xlinkHref="#d" id="e" cx="199.788" cy="628.438" r="52.352" fx="199.788" fy="628.438" gradientTransform="matrix(-3.10797 .87652 -.6315 -2.23914 1345.65 1374.198)" gradientUnits="userSpaceOnUse"/>
        <linearGradient id="d"><stop offset="0" stopColor="#ff005f"/><stop offset="1" stopColor="#fc01d8"/></linearGradient>
        <linearGradient id="c"><stop offset="0" stopColor="#780cff"/><stop offset="1" stopColor="#820bff" stopOpacity="0"/></linearGradient>
        <linearGradient id="b"><stop offset="0" stopColor="#fc0"/><stop offset="1" stopColor="#fc0" stopOpacity="0"/></linearGradient>
        <linearGradient id="a"><stop offset="0" stopColor="#fc0"/><stop offset=".124" stopColor="#fc0"/><stop offset=".567" stopColor="#fe4a05"/><stop offset=".694" stopColor="#ff0f3f"/><stop offset="1" stopColor="#fe0657" stopOpacity="0"/></linearGradient>
      </defs>
      
      {/* Scaled down to 72% and shifted to re-center it inside the viewBox */}
      <g transform="scale(0.72) translate(51.45 51.45)">
        <path fill="url(#e)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"/>
        <path fill="url(#f)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"/>
        <path fill="url(#g)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"/>
        <path fill="#fff" d="M132.345 33.973c-26.716 0-30.07.117-40.563.594-10.472.48-17.62 2.136-23.876 4.567-6.47 2.51-11.958 5.87-17.426 11.335-5.472 5.464-8.834 10.948-11.354 17.412-2.44 6.252-4.1 13.397-4.57 23.858-.47 10.486-.593 13.838-.593 40.535 0 26.697.119 30.037.594 40.522.482 10.465 2.14 17.609 4.57 23.859 2.515 6.465 5.876 11.95 11.346 17.414 5.466 5.468 10.955 8.834 17.42 11.345 6.26 2.431 13.41 4.088 23.881 4.567 10.493.477 13.844.594 40.559.594 26.719 0 30.061-.117 40.555-.594 10.472-.48 17.63-2.136 23.888-4.567 6.468-2.51 11.948-5.877 17.414-11.345 5.472-5.464 8.834-10.949 11.354-17.412 2.419-6.252 4.079-13.398 4.57-23.858.472-10.486.595-13.828.595-40.525s-.123-30.047-.594-40.533c-.492-10.465-2.152-17.608-4.57-23.858-2.521-6.466-5.883-11.95-11.355-17.414-5.472-5.464-10.944-8.827-17.42-11.335-6.271-2.431-13.424-4.088-23.897-4.567-10.493-.477-13.834-.594-40.558-.594zm-8.825 17.715c2.62-.004 5.542 0 8.825 0 26.266 0 29.38.094 39.752.565 9.591.438 14.797 2.04 18.264 3.385 4.591 1.782 7.864 3.912 11.305 7.352 3.443 3.44 5.575 6.717 7.362 11.305 1.346 3.46 2.951 8.663 3.388 18.247.47 10.363.573 13.475.573 39.71 0 26.233-.102 29.346-.573 39.709-.44 9.584-2.042 14.786-3.388 18.247-1.783 4.587-3.919 7.854-7.362 11.292-3.443 3.441-6.712 5.57-11.305 7.352-3.463 1.352-8.673 2.95-18.264 3.388-10.37.47-13.486.573-39.752.573-26.268 0-29.38-.102-39.751-.573-9.592-.443-14.797-2.044-18.267-3.39-4.59-1.781-7.87-3.911-11.313-7.352-3.443-3.44-5.574-6.709-7.362-11.298-1.346-3.461-2.95-8.663-3.387-18.247-.472-10.363-.566-13.476-.566-39.726s.094-29.347.566-39.71c.438-9.584 2.04-14.786 3.387-18.25 1.783-4.588 3.919-7.865 7.362-11.305 3.443-3.441 6.722-5.57 11.313-7.357 3.468-1.351 8.675-2.949 18.267-3.389 9.075-.41 12.592-.532 30.926-.553zm61.337 16.322c-6.518 0-11.805 5.277-11.805 11.792 0 6.512 5.287 11.796 11.805 11.796 6.517 0 11.804-5.284 11.804-11.796 0-6.513-5.287-11.796-11.805-11.796zm-52.512 13.782c-27.9 0-50.519 22.603-50.519 50.482 0 27.879 22.62 50.471 50.52 50.471s50.51-22.592 50.51-50.471c0-27.879-22.613-50.482-50.513-50.482zm0 17.715c18.11 0 32.792 14.67 32.792 32.767 0 18.096-14.683 32.767-32.792 32.767-18.11 0-32.791-14.671-32.791-32.767 0-18.098 14.68-32.767 32.791-32.767z"/>
      </g>
    </svg>
                        Instagram
                    </a>
                </li>
                
                <li>
                    <a href="https://tiktok.com/@peakcheap" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-sm transition">
                         <svg 
      id="Layer_2" 
      xmlns="http://w3.org"
      viewBox="0 0 666.667 666.667" // Matches Facebook dimension perfectly
      className="w-6 h-6" // Matches default container sizing
    >
      <defs>
        <style>{`
          .cls-2 { fill: #fe2c55; }
          .cls-3 { fill: #25f4ee; }
        `}</style>
      </defs>
      
      {/* Centering and scaling framework to offset the visual weight with Facebook */}
      <g id="Layer_1-2" transform="scale(1.425) translate(57.5 35)">
        <path 
          d="M137.17 156.98v-15.56c-5.34-.73-10.76-1.18-16.29-1.18C54.23 140.24 0 194.47 0 261.13c0 40.9 20.43 77.09 51.61 98.97-20.12-21.6-32.46-50.53-32.46-82.31 0-65.7 52.69-119.28 118.03-120.81Z" 
          className="cls-3"
        />
        <path 
          d="M140.02 333c29.74 0 54-23.66 55.1-53.13l.11-263.2h48.08c-1-5.41-1.55-10.97-1.55-16.67h-65.67l-.11 263.2c-1.1 29.47-25.36 53.13-55.1 53.13-9.24 0-17.95-2.31-25.61-6.34C105.3 323.9 121.6 333 140.02 333ZM333.13 106V91.37c-18.34 0-35.43-5.45-49.76-14.8 12.76 14.65 30.09 25.22 49.76 29.43Z" 
          className="cls-3"
        />
        <path 
          d="M283.38 76.57c-13.98-16.05-22.47-37-22.47-59.91h-17.59c4.63 25.02 19.48 46.49 40.06 59.91ZM120.88 205.92c-30.44 0-55.21 24.77-55.21 55.21 0 21.2 12.03 39.62 29.6 48.86-6.55-9.08-10.45-20.18-10.45-32.2 0-30.44 24.77-55.21 55.21-55.21 5.68 0 11.13.94 16.29 2.55v-67.05c-5.34-.73-10.76-1.18-16.29-1.18-.96 0-1.9.05-2.85.07v51.49c-5.16-1.61-10.61-2.55-16.29-2.55Z" 
          className="cls-2"
        />
        <path 
          d="M333.13 106v51.04c-34.05 0-65.61-10.89-91.37-29.38v133.47c0 66.66-54.23 120.88-120.88 120.88-25.76 0-49.64-8.12-69.28-21.91 22.08 23.71 53.54 38.57 88.42 38.57 66.66 0 120.88-54.23 120.88-120.88V144.33c25.76 18.49 57.32 29.38 91.37 29.38v-65.68c-6.57 0-12.97-.71-19.14-2.03Z" 
          className="cls-2"
        />
        <path 
          d="M241.76 261.13V127.66c25.76 18.49 57.32 29.38 91.37 29.38V106c-19.67-4.21-37-14.77-49.76-29.43-20.58-13.42-35.43-34.88-40.06-59.91h-48.08l-.11 263.2c-1.1 29.47-25.36 53.13-55.1 53.13-18.42 0-34.72-9.1-44.75-23.01-17.57-9.25-29.6-27.67-29.6-48.86 0-30.44 24.77-55.21 55.21-55.21 5.68 0 11.13.94 16.29 2.55v-51.49C71.83 158.5 19.14 212.08 19.14 277.78c0 31.78 12.34 60.71 32.46 82.31C71.23 373.87 95.12 382 120.88 382c66.65 0 120.88-54.23 120.88-120.88Z" 
          fill="#fff" // Cleaned string based style rule here
        />
      </g>
    </svg>
                        TikTok
                    </a>
                </li>
                
                <li>
                    <a href="https://www.facebook.com/people/PeakCheap/61590912994034/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-sm transition">
                     <svg xmlns="http://w3.org" viewBox="0 0 666.667 666.667" className="w-6 h-6">
        <defs>
          <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path d="M0 700h700V0H0Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)">
          {/* Blue Background Path */}
          <path 
            d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0" 
            style={{
              fill: "#0866ff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none"
            }} 
            transform="translate(600 350)" 
          />
          {/* White 'f' Letter Path */}
          <path 
            d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.559 250.559 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z" 
            style={{
              fill: "#fff",
              fillOpacity: 1,
              fillRule: "nonzero",
              stroke: "none"
            }} 
            transform="translate(447.918 273.604)"
          />
        </g>
      </svg>
                        Facebook
                    </a>
                </li>
                
                <li>
                    <a href="https://reddit.com/u/PeakCheapHQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 text-sm transition">
                            <svg 
  xmlns="http://w3.org"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 666.667 666.667"
  className="w-7 h-7"   // Adjust this value to your Facebook SVG size

>
  <defs>
    <radialGradient id="snoo-radial-gragient" cx="169.75" cy="92.19" r="50.98" fx="169.75" fy="92.19" gradientTransform="matrix(1 0 0 .87 0 11.64)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#feffff"/>
      <stop offset=".4" stopColor="#feffff"/>
      <stop offset=".51" stopColor="#f9fcfc"/>
      <stop offset=".62" stopColor="#edf3f5"/>
      <stop offset=".7" stopColor="#dee9ec"/>
      <stop offset=".72" stopColor="#d8e4e8"/>
      <stop offset=".76" stopColor="#ccd8df"/>
      <stop offset=".8" stopColor="#c8d5dd"/>
      <stop offset=".83" stopColor="#ccd6de"/>
      <stop offset=".85" stopColor="#d8dbe2"/>
      <stop offset=".88" stopColor="#ede3e9"/>
      <stop offset=".9" stopColor="#ffebef"/>
    </radialGradient>
    <radialGradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-2" cx="47.31" r="50.98" fx="47.31"/>
    <radialGradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-3" cx="109.61" cy="85.59" r="153.78" fx="109.61" fy="85.59" gradientTransform="matrix(1 0 0 .7 0 25.56)"/>
    <radialGradient id="snoo-radial-gragient-4" cx="-6.01" cy="64.68" r="12.85" fx="-6.01" fy="64.68" gradientTransform="matrix(1.07 0 0 1.55 81.08 27.26)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#f60"/>
      <stop offset=".5" stopColor="#ff4500"/>
      <stop offset=".7" stopColor="#fc4301"/>
      <stop offset=".82" stopColor="#f43f07"/>
      <stop offset=".92" stopColor="#e53812"/>
      <stop offset="1" stopColor="#d4301f"/>
    </radialGradient>
    <radialGradient xlinkHref="#snoo-radial-gragient-4" id="snoo-radial-gragient-5" cx="-73.55" cy="64.68" r="12.85" fx="-73.55" fy="64.68" gradientTransform="matrix(-1.07 0 0 1.55 62.87 27.26)"/>
    <radialGradient id="snoo-radial-gragient-6" cx="107.93" cy="166.96" r="45.3" fx="107.93" fy="166.96" gradientTransform="matrix(1 0 0 .66 0 57.4)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#172e35"/>
      <stop offset=".29" stopColor="#0e1c21"/>
      <stop offset=".73" stopColor="#030708"/>
      <stop offset="1"/>
    </radialGradient>
    <radialGradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-7" cx="147.88" cy="32.94" r="39.77" fx="147.88" fy="32.94" gradientTransform="matrix(1 0 0 .98 0 .54)"/>
    <radialGradient id="snoo-radial-gragient-8" cx="131.31" cy="73.08" r="32.6" fx="131.31" fy="73.08" gradientUnits="userSpaceOnUse">
      <stop offset=".48" stopColor="#7a9299"/>
      <stop offset=".67" stopColor="#172e35"/>
      <stop offset=".75"/>
      <stop offset=".82" stopColor="#172e35"/>
    </radialGradient>
    <style>{`
      .snoo-cls-11 { stroke-width: 0; fill: #ffc49c; }
    `}</style>
  </defs>
  
  {/* Centering scale logic layout wrapper adjusts visual size with Facebook */}
  <g transform="translate(133.33 116.66) scale(1.85)">
    <path fill="#ff4500" strokeWidth="0" d="M108 0C48.35 0 0 48.35 0 108c0 29.82 12.09 56.82 31.63 76.37l-20.57 20.57C6.98 209.02 9.87 216 15.64 216H108c59.65 0 108-48.35 108-108S167.65 0 108 0Z"/>
    <circle cx="169.22" cy="106.98" r="25.22" fill="url(#snoo-radial-gragient)" strokeWidth="0"/>
    <circle cx="46.78" cy="106.98" r="25.22" fill="url(#snoo-radial-gragient-2)" strokeWidth="0"/>
    <ellipse cx="108.06" cy="128.64" fill="url(#snoo-radial-gragient-3)" strokeWidth="0" rx="72" ry="54"/>
    <path fill="url(#snoo-radial-gragient-4)" strokeWidth="0" d="M86.78 123.48c-.42 9.08-6.49 12.38-13.56 12.38s-12.46-4.93-12.04-14.01c.42-9.08 6.49-15.02 13.56-15.02s12.46 7.58 12.04 16.66Z"/>
    <path fill="url(#snoo-radial-gragient-5)" strokeWidth="0" d="M129.35 123.48c.42 9.08 6.49 12.38 13.56 12.38s12.46-4.93 12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46 7.58-12.04 16.66Z"/>
    <ellipse cx="79.63" cy="116.37" className="snoo-cls-11" rx="2.8" ry="3.05"/>
    <ellipse cx="146.21" cy="116.37" className="snoo-cls-11" rx="2.8" ry="3.05"/>
    <path fill="url(#snoo-radial-gragient-6)" strokeWidth="0" d="M108.06 142.92c-8.76 0-17.16.43-24.92 1.22-1.33.13-2.17 1.51-1.65 2.74 4.35 10.39 14.61 17.69 26.57 17.69s22.23-7.3 26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"/>
    <circle cx="147.49" cy="49.43" r="17.87" fill="url(#snoo-radial-gragient-7)" strokeWidth="0"/>
    <path fill="url(#snoo-radial-gragient-8)" strokeWidth="0" d="M107.8 76.92c-2.14 0-3.87-.89-3.87-2.27 0-16.01 13.03-29.04 29.04-29.04 2.14 0 3.87 1.73 3.87 3.87s-1.73 3.87-3.87 3.87c-11.74 0-21.29 9.55-21.29 21.29 0 1.38-1.73 2.27-3.87 2.27Z"/>
    <path fill="#842123" strokeWidth="0" d="M62.82 122.65c.39-8.56 6.08-14.16 12.69-14.16 6.26 0 11.1 6.39 11.28 14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14 6.05-13.56 15.2c-.42 9.15 4.97 13.83 12.04 13.83h.52c-6.44-.16-11.3-4.79-10.91-13.2Zm90.48 0c-.39-8.56-6.08-14.16-12.69-14.16-6.26 0-11.1 6.39-11.28 14.33-.17-8.88 5.13-15.99 12.05-15.99 7.07 0 13.14 6.05 13.56 15.2.42 9.15-4.97 13.83-12.04 13.83h-.52c6.44-.16 11.3-4.79 10.91-13.2Z"/>
  </g>
</svg>
                        Reddit
                    </a>
                </li>
                
            </ul>

        </div>

             </div>
  


           




         

        </footer>
    )
}