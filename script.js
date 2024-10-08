const form=document.querySelector('form')
// this usecase will give you empty
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value) 
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')

  if(height===''|| height<0 || isNaN(height)){
    results.innerHTML="Please give valid height"
  }
  else if(weight===''|| weight<0 || isNaN(weight)){
    results.innerHTML="Please give valid weight"
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //show results
   
    if(bmi<18.6){
       results.innerHTML=`<span>${bmi} </span> is under weight`;
    }
    else if(bmi>18.6 && bmi<24.9){
      results.innerHTML=`<span>${bmi} </span> is Normal Range`;
    }
    else{
      results.innerHTML=`<span>${bmi} </span> is overweight`
    }
  }

 

}


)