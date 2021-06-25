document.onreadystatechange=()=>{
    if(document.readyState==='complete'){
        const testDiv=document.getElementById('test');
        testDiv.style.color='lightblue';
        
        setInterval(()=>{
          testDiv.style.color='lightgreen';
        },2000)
        setInterval(()=>{
          testDiv.style.color='yellow';

        },3000)

        
            
    }
}

