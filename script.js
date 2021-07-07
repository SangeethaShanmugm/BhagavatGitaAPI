function wordSearch(){

    let chapters = document.getElementsByClassName("input")[0].value;
    
    
    fetch(`https://bhagavadgitaapi.in/chapter/${chapters}?api_key=c21ac6e5ae552e6b0`)
    .then((res)=> res.json())
    .then((res1)=>{
        console.log(res1);
      
        const card1=document.createElement('div');
        card1.setAttribute('class','card');
         const cardbody1=document.createElement('div');
        cardbody1.setAttribute('class','card-body');
        const head1=document.createElement('h5');
        head1.setAttribute('class','card-title');
        head1.innerHTML="Meaning"
        
    
      const p1 = document.createElement('p');
      p1.innerHTML= res1.meaning.en;
      
      const head3= document.createElement('h5');
      head3.setAttribute('class','card-title');
     head3.innerHTML=`Summary of Chapter${chapters} `;
    
      const p2 = document.createElement('p');
      p2.innerHTML= res1.summary.en;
    
     
  
     
    
    cardbody1.append(head1,p1,head3,p2);
    card1.append(cardbody1);
    document.body.append(card1);
    
    
    })
          
        .catch((err)=>{
            console.log(err);
        });
        
    }