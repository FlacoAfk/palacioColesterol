import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className='w-full [background-color:#5F4C38] font-lilitaOne py-24'>
      <div className="[grid-area:title] flex flex-col text-orange-500 items-center justify-center">
        <h1 className='text-6xl text-center'>El palacio del colesterol </h1>
        <h1 className='pt-8 text-xl text-white'>Siguenos en nuestras redes:</h1>
        <div className='flex '>
            <a href="">
                <svg width="42" className='px-2' height="32" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M58.7273 0C63.8486 0 68 4.15155 68 9.27273V58.7273C68 63.8486 63.8486 68 58.7273 68H9.27273C4.15155 68 0 63.8486 0 58.7273V9.27273C0 4.15155 4.15155 0 9.27273 0H58.7273ZM58.7273 6.18182C60.4344 6.18182 61.8182 7.56568 61.8182 9.27273V58.7273C61.8182 60.4344 60.4344 61.8182 58.7273 61.8182H43.2727V40.1815H49.6901C51.0204 40.1815 52.2014 39.3303 52.6224 38.0679L53.9917 33.9601C54.4921 32.4589 53.3747 30.9088 51.7925 30.9088H43.2727V24.727C43.2727 23.1816 44.8182 21.6361 46.3636 21.6361H52.5455C54.2526 21.6361 55.6364 20.2523 55.6364 18.5452V16.4249C55.6364 15.4264 54.9987 14.5313 54.0331 14.2765C49.9815 13.2073 46.3636 13.2073 46.3636 13.2073C38.6364 13.2073 34 18.5452 34 23.1816V30.9088H27.8182C26.1111 30.9088 24.7273 32.2926 24.7273 33.9997V37.0906C24.7273 38.7977 26.1111 40.1815 27.8182 40.1815H34V61.8182H9.27273C7.56568 61.8182 6.18182 60.4344 6.18182 58.7273V9.27273C6.18182 7.56568 7.56568 6.18182 9.27273 6.18182H58.7273Z" fill="white"/>
                </svg>
            </a>
            <a href="">

                <svg width="32" height="32" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_i_3_81)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34 51C43.3888 51 51 43.3888 51 34C51 24.6112 43.3888 17 34 17C24.6112 17 17 24.6112 17 34C17 43.3888 24.6112 51 34 51ZM34 45.3333C40.2591 45.3333 45.3333 40.2591 45.3333 34C45.3333 27.7408 40.2591 22.6667 34 22.6667C27.7408 22.6667 22.6667 27.7408 22.6667 34C22.6667 40.2591 27.7408 45.3333 34 45.3333Z" fill="white"/>
                    <path d="M51 14.1667C49.4352 14.1667 48.1667 15.4353 48.1667 17.0001C48.1667 18.5649 49.4352 19.8334 51 19.8334C52.5649 19.8334 53.8333 18.5649 53.8333 17.0001C53.8333 15.4353 52.5649 14.1667 51 14.1667Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.68621 12.1154C2.83333 15.7519 2.83333 20.5124 2.83333 30.0333V37.9666C2.83333 47.4874 2.83333 52.248 4.68621 55.8843C6.31606 59.0831 8.91672 61.6838 12.1155 63.3136C15.752 65.1666 20.5124 65.1666 30.0333 65.1666H37.9667C47.4875 65.1666 52.2481 65.1666 55.8844 63.3136C59.0832 61.6838 61.6839 59.0831 63.3137 55.8843C65.1667 52.248 65.1667 47.4874 65.1667 37.9666V30.0333C65.1667 20.5124 65.1667 15.7519 63.3137 12.1154C61.6839 8.91664 59.0832 6.31598 55.8844 4.68614C52.2481 2.83325 47.4875 2.83325 37.9667 2.83325H30.0333C20.5124 2.83325 15.752 2.83325 12.1155 4.68614C8.91672 6.31598 6.31606 8.91664 4.68621 12.1154ZM37.9667 8.49992H30.0333C25.1794 8.49992 21.8797 8.50434 19.3292 8.7127C16.8448 8.91568 15.5744 9.28359 14.6881 9.73517C12.5556 10.8217 10.8218 12.5555 9.73524 14.688C9.28367 15.5743 8.91576 16.8448 8.71278 19.3291C8.50441 21.8796 8.49999 25.1793 8.49999 30.0333V37.9666C8.49999 42.8206 8.50441 46.1201 8.71278 48.6706C8.91576 51.1552 9.28367 52.4256 9.73524 53.3119C10.8218 55.4443 12.5556 57.178 14.6881 58.2646C15.5744 58.7162 16.8448 59.0843 19.3292 59.2871C21.8797 59.4954 25.1794 59.4999 30.0333 59.4999H37.9667C42.8207 59.4999 46.1201 59.4954 48.6707 59.2871C51.1553 59.0843 52.4257 58.7162 53.312 58.2646C55.4444 57.178 57.1781 55.4443 58.2647 53.3119C58.7163 52.4256 59.0843 51.1552 59.2872 48.6706C59.4955 46.1201 59.5 42.8206 59.5 37.9666V30.0333C59.5 25.1793 59.4955 21.8796 59.2872 19.3291C59.0843 16.8448 58.7163 15.5743 58.2647 14.688C57.1781 12.5555 55.4444 10.8217 53.312 9.73517C52.4257 9.28359 51.1553 8.91568 48.6707 8.7127C46.1201 8.50434 42.8207 8.49992 37.9667 8.49992Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_i_3_81" x="0" y="0" width="68" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3_81"/>
                    </filter>
                    </defs>
                    </svg>
            </a>


        </div>
      </div>
      <div className="[grid-area:links] ">

        <div className='flex pb-8 gap-36'>
            <a href='#' className='text-3xl text-white'>Restaurantes</a> 
            <a href='/product' className='text-3xl text-white'>Contacto</a> 
        </div>
        
        <div className='flex gap-44'>   
            <a href='#' className='[color:#B78A59] pr-8 text-3xl text-white'>Nosotros</a> 
            <a href='#' className='[color:#B78A59] text-3xl text-white'>Contáctenos</a> 
        </div>
        
        <div className='flex gap-16'>   
            <a href='#' className='[color:#B78A59] text-3xl text-white'>Trabaja con nosotros</a> 
            <a href='#' className='[color:#B78A59] text-3xl text-white'>Preguntas frecuentes</a> 
        </div>



      </div>

    </div>
  )
}

export default Footer
