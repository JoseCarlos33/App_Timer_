import React, {Component} from 'react'


export default class Temporizador extends Component {
    
    
    state = {
        minutos: 0,
    }

    constructor(props){
        super(props)
        
        this.setMinutos = this.setMinutos.bind(this)
        this.setValue = this.setValue.bind(this)
        this.contagemRegressiva = this.contagemRegressiva.bind(this)
    }
    
    setValue(){
        let valor1 = this.state.minutos
        let valor2 = Math.floor((valor1-1)/10)
        let valor3 = (valor1-1)%10

        if ((valor1>=1)&&(valor1<=60)){
            this.contagemRegressiva(valor2, valor3)
            setInterval(()=>{
                this.setState({minutos: 0})
            })
        }
    }

    setMinutos(e){
        this.setState({minutos: e.target.value})
    }


    contagemRegressiva(valor1, valor2){
        let doc = document.querySelector("div > div.contador")
        
        let min1 = valor1
        let min2 = valor2 
        let seg1 = 5
        let seg2 = 9
        
        setInterval(() => {
            const Min1 = doc.getElementsByClassName('num')[0];
            const Min2 = doc.getElementsByClassName('num')[1];
            const Seg1 = doc.getElementsByClassName('num')[2];
            const Seg2 = doc.getElementsByClassName('num')[3];

            Min1.innerHTML = min1
            Min2.innerHTML = min2
            Seg1.innerHTML = seg1
            Seg2.innerHTML = seg2

            if((min2 === 0) && (seg1 === 0) && (seg2 === 0) && (min1>0)){
                min1--
                min2 = 9
                seg1 = 5
                seg2 = 10
                            
            }else if((seg2 === 0)&&(seg1>0)){
                seg1--
                seg2 = 10
            }else if((seg1 === 0)&&(min2>0)&&(seg2 === 0)){
                min2--
                seg1 = 5
                seg2 = 10
            }else if((min2 === 0) && (seg1 === 0) && (seg2 === 0) && (seg1===0)){
                seg2++
            }

            seg2--

        },1000)     
    }

    render(){
            const endereco = this.setValue
    
        return(
            <div>
                <div class="borda"></div>
                <div class="contador">
                   <span class="num" id="separa1">0</span>
                   <span class="num" id="separa2">0</span>
                   <span class="doisPontos">:</span>
                   <span class="num">0</span>
                   <span class="num">0</span>
                </div>
                
                <input type="text"  placeholder="Minutos..." onChange={this.setMinutos}/>
                <button onClick={endereco}>START</button>
            </div>
        )
    }
}