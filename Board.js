import bloque from "../marioPNGs/bloque.jpg"
import mario from "../marioPNGs/mario.png"
import luigi from "../marioPNGs/luigi2.png"
import peach from "../marioPNGs/Peach1.png"
import yoshi from "../marioPNGs/Yoshi.png"
import koopa from "../marioPNGs/Koopa1.png"
import topo from "../marioPNGs/topo2.png"
import toad from "../marioPNGs/toad.png"
import flor from "../marioPNGs/flor2.png"
import mono from "../marioPNGs/Mono.png"
import planta from "../marioPNGs/Planta.png"
import chuck from "../marioPNGs/Chuck.png"
import fantasma from "../marioPNGs/Fantasma.png"
import estrella from "../marioPNGs/estrella2.png"
import huevo from "../marioPNGs/Huevo.png"
import bomba from "../marioPNGs/Bomba.png"
import bowser from "../marioPNGs/bowser.png"
import tomate from "../marioPNGs/Tomate.png"
import pez from "../marioPNGs/Pez.png"

const cardFlipped = [mario,luigi,peach,yoshi,koopa,topo,toad,flor,mono,planta,chuck,fantasma,estrella,huevo,tomate,bowser,bomba,pez,mario,luigi,peach,yoshi,koopa,topo,toad,flor,mono,planta,chuck,fantasma,estrella,huevo,tomate,bowser,bomba,pez]
cardFlipped.sort(() => 0.5 - Math.random())

export function Board({setResult, result}){
    
    let cardsChosen = [];
    let cardsChosenId = [];
    
    function checkForMatch(){
        
        let cards = document.querySelectorAll('img')
        const card1Id = cardsChosen[0]
        const card2Id = cardsChosen[1]
        //console.log('ids elegidos',cardsChosenId)
        //console.log('1: ',card1Id,'2: ',card2Id)
        if(card1Id === card2Id){
            //alert('you found a match')
            setResult(result+1)            
        }else{
            //alert('valio verga')
            cards[cardsChosenId[0]].setAttribute('src', bloque)
            cards[cardsChosenId[1]].setAttribute('src', bloque)
        }
        cardsChosenId = []
        cardsChosen = []        
    };
   
    function flipCard(e){
        
        const {id, name, src} = e.target     
        //console.log('name: ',name) 
        if(src !== bloque){
            return
        }else{
            cardsChosen.push(name)
            cardsChosenId.push(id)
            e.target.setAttribute('src', cardFlipped[id])
            if(cardsChosen.length === 2){
                setTimeout(checkForMatch, 500)
            }
        }          
    };  

    return(
        <>
        {cardFlipped.map((el,i)=>
            <div className="" style={{width: '50px', height: '50px', padding: '0'}}>
            <img className="" style={{height: '50px'}} src={bloque} name={el} alt="caca" id={i} onClick={flipCard}/>
            </div>
        )}
        </>
    )
}