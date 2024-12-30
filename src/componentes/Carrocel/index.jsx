import './Carrocel.scss'



export default function Carrocel() {

    // Ativação constante
    setInterval(()=>{

        // Itens do card do carrocel
        let itens = document.querySelectorAll('.itemCarrocel')

        // Conteúdo
        document.querySelector('.conteinerCarrocel').appendChild(itens[0])
    
    }, 2000)



    return (
        <span className="conteinerCarrocel">
            
            {/* Item 1 */}
            <span className="itemCarrocel">
                <img src="../../../public/teste/t1.jpg" alt="teste 1" />
            </span>

            {/* Item 2 */}
            <span className="itemCarrocel">
                <img src="../../../public/teste/t2.jpg" alt="teste 2" />
            </span>

            {/* Item 3 */}
            <span className="itemCarrocel">    
                <img src="../../../public/teste/t3.jpg" alt="teste 3" />
            </span>

            {/* Item 4 */}
            <span className="itemCarrocel">    
                <img src="../../../public/teste/t4.jpg" alt="teste 4" />
            </span>

            {/* Item 5 */}
            <span className="itemCarrocel">
                <img src="../../../public/teste/t5.jpg" alt="teste 5" />
            </span>

            {/* Item 6 */}
            <span className="itemCarrocel">
                <img src="../../../public/teste/t6.jpg" alt="teste 6" />
            </span>

            {/* Item 7 */}
            <span className="itemCarrocel">
                <img src="../../../public/teste/t7.jpg" alt="teste 7" />
            </span>

        </span>

    )
}



