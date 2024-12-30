import './Carrocel.scss';
import { useEffect } from 'react';



export default function Carrocel() {

    useEffect(() => {
        const interval = setInterval(() => {
        const itens = document.querySelectorAll('.itemCarrocel')
        const conteiner = document.querySelector('.conteinerCarrocel')

        if (itens.length > 0 && conteiner) {
            // Mover o primeiro item para o final
            conteiner.appendChild(itens[0])
        }}, 5000)
        
        return () => clearInterval(interval)}, [])

        // Elemento do reflexo
        document.querySelectorAll('.reflexoCarrocel').forEach((span) => {
            const imgUrl = span.getAttribute('data-img');
            span.style.backgroundImage = `url(${imgUrl})`;
            span.style.backgroundSize = 'cover';
            span.style.backgroundPosition = 'center';
        });

        
        return (
        <div className="conteinerCarrocel">
            
            <div className="itemCarrocel">
                <img src="../../../public/teste/t1.jpg" alt="teste 1" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t1.jpg' />
            </div>
      
            <div className="itemCarrocel">
                <img src="../../../public/teste/t2.jpg" alt="teste 2" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t2.jpg' />
            </div>
      
            <div className="itemCarrocel">
                <img src="../../../public/teste/t3.jpg" alt="teste 3" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t3.jpg' />
            </div>
            
            <div className="itemCarrocel">
                <img src="../../../public/teste/t4.jpg" alt="teste 4" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t4.jpg' />
            </div>
      
            <div className="itemCarrocel">
                <img src="../../../public/teste/t5.jpg" alt="teste 5" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t5.jpg' />
            </div>
            
            <div className="itemCarrocel">
                <img src="../../../public/teste/t6.jpg" alt="teste 6" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t6.jpg' />
            </div>
            
            <div className="itemCarrocel">
                <img src="../../../public/teste/t7.jpg" alt="teste 7" />
                <span className='reflexoCarrocel' 
                data-img='../../../public/teste/t7.jpg' />
            </div>
    
    </div>
  );
}
