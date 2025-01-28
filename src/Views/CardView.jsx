import React from 'react'
import { useState } from 'react'
import '../Styles/style.css'
import image from '../Components/resources/kuromi.png'
function CardView() {
  const [openLetter, setopenLetter] = useState(true)
  const [textButton, settextButton] = useState("Abrir")


  const handleOpenButton=()=>{
    const coverElement = document.querySelector('.cover')
    const paperElement = document.querySelector('.paper')
    const heartElement =document.querySelector('.heart')
    const heartSmallElement =document.querySelector('.heart_small')

    if (window.innerWidth < 768) { 
      paperElement.style.height = "160px"; // Cambia el valor según tus necesidades 
      }
    coverElement.classList.add('open-cover')
    paperElement.classList.remove('close-paper')
   
    setTimeout(() => {
      paperElement.classList.add('open-paper')
      coverElement.style.zIndex=-1
      
    }, 500);

    //animation heart
    heartElement.style.display='block'
    heartSmallElement.style.display='block'    
  }

  const handleCloseButton=()=>{ 
    const coverElement = document.querySelector('.cover')
    const paperElement = document.querySelector('.paper')
    const heartElement =document.querySelector('.heart')
    const heartSmallElement =document.querySelector('.heart_small')

    paperElement.classList.remove('open-paper')
    paperElement.classList.add('close-paper')
    if (window.innerWidth < 768) { 
      paperElement.style.height = "60px"; // Cambia el valor según tus necesidades 
      }
    setTimeout(() => {
      coverElement.classList.remove('open-cover')
      coverElement.style.zIndex=0
    }, 500);
    heartElement.style.display='none'
    heartSmallElement.style.display='none'
  }

  const handleLetter=()=>{
    if (openLetter){
      handleOpenButton();
      settextButton("Cerrar")
    }else{
      handleCloseButton(); 
      settextButton("Abrir")
    }
    setopenLetter(!openLetter); 
  }

  return (
    <div className='container-main'>

      <div>
        <h6> Happy Birthday Anny Ruiz!</h6>
      </div>
      <div>
        <img src={image} alt='kuro__img' className='img_kuro'/>
      </div>
      {/* <div className='cofeti'>🎊</div>
      <div className='cofeti2'>🎊</div> */}
        <div className='container-letter'>
            <div className='cover'></div>
            <span className='heart_small'>❤️</span>
            <span className='heart'>❤️</span>
            <div className='paper'>
            Hoy es tu día especial espero que la pases bien ya que eres increíble y mereces lo mejor.
            Te deseo que cumplas cada una de tus metas.
            Felicidades Anny te aprecio mucho!.

            </div>
            <div className='letter'></div>
        </div>
        <div className='sombra'></div>
        <div className='options'>
          <button id='btnOpen' onClick={handleLetter}>{textButton}</button>
        </div>
    </div>
  )
}

export default CardView