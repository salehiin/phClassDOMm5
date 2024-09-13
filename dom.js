console.log('hello from JS');
console.log(document);


// <!-- 24.4 -->

// <!-- document.querySelectorAll('fruits-title li') -->
//  <!--  querySelectorAll -->
   const someLi = document.querySelectorAll('.fruits-container li');
//    console.log(someLi);
   for(const li of someLi){
    console.log(li.innerText);
   }