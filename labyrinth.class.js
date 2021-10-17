const CEll_SIZE=400/5;
const Start=0;

const container=document.querySelector('#map');
//set the container attributes

container.style.width='400px';
container.style.height='400px';
container.style.border='1px solid black';
container.style.position='relative';

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];
       
       
}
//printConsole attribute
Labyrinth.printConsole=()=>{
    let col1=``;
        let top=0;
        
    this.map.forEach(row=>{
        let left=0;
        let num=0;
        
        row.forEach(col=>{
            
            
            if(col===0){
                col1=`<div class="white num-${num}"></div>`;
                document.querySelector('#map').insertAdjacentHTML("afterbegin",col1);
                document.querySelector(`.num-${num}`).style.position='absolute';
                document.querySelector(`.num-${num}`).style.width=`${CEll_SIZE}px`;
                document.querySelector(`.num-${num}`).style.height=`${CEll_SIZE}px`;
               

                document.querySelector(`.num-${num}`).style.top=`${top}px`;
                document.querySelector(`.num-${num}`).style.left=`${left}px`;
                left+=CEll_SIZE;
                
                
               
            }
            else{
                col1=` <div class="grey num-${num}"></div>`;
                document.querySelector('#map').insertAdjacentHTML("afterbegin",col1);
                document.querySelector(`.num-${num}`).style.position='absolute';
                document.querySelector(`.num-${num}`).style.top=`${top}px`;
                document.querySelector(`.num-${num}`).style.left=`${left}px`;
                document.querySelector(`.num-${num}`).style.width=`${CEll_SIZE}px`;
                document.querySelector(`.num-${num}`).style.height=`${CEll_SIZE}px`;
                left+=CEll_SIZE;

            } 
            num++;
           
        })
        top+=CEll_SIZE;
        
        
        
        
    })
   }
   Labyrinth.displayChar=()=>{
       const markup=`<img class="char" src="https://www.giantbomb.com/a/uploads/scale_medium/15/153607/2895175-mario%2013.png" alt="">`
       container.insertAdjacentHTML('afterbegin',markup);
       const char=document.querySelector('.char');
       char.style.position='absolute';
       char.style.width='50px';
       char.style.height='50px';
   }
   Labyrinth.displayEnd=()=>{
    const markup=`<img class="end" src="data:image/png;base64,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" alt="">`
    container.insertAdjacentHTML('afterbegin',markup);
    const end=document.querySelector('.end');
    end.style.width='60px';
    end.style.height='60px';
    end.style.position='absolute';
    end.style.zIndex='2';

    end.style.top=`${(400/5)*2+10}px`;
    end.style.left=`${(400/5)*4+20}px`;


   }

/* TODO implement core labyrinth functionality here */
