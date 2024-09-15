console.log('hello from JS');
console.log(document);


// <!-- 24.4 -->

// <!-- document.querySelectorAll('fruits-title li') -->
//  <!--  querySelectorAll -->
   // const someLi = document.querySelectorAll('.fruits-container li');
//    console.log(someLi);
   // for(const li of someLi){
   //  console.log(li.innerText);
   // }

   // const title = document.getElementById('fruits-title')
   // title.getAttribute('id')
   // title.getAttribute('class')
   // title.classList
   // title.classList.add('moreClass')
   // title.classList.remove('oneMore')
   // title.setAttribute('title', 'tooltip set by Javascript')

   // document.getElementsByClassName('testClass')

   // document.getElementsByClassName('testClass')[0].innerHTML
   // document.getElementsByClassName('testClass')[0].innerHTML = '<h2>ABCD</h2>'
   // document.getElementsByClassName('testClass')[0].innerText

   // const title = document.getElementById('anyId');
   // const text = title.innerText;
   // console.log(text);
   // const html = title.innerHTML;
   // console.log(html);

   // 24.7 - 07:00
   // const placesContainer = document.getElementById('places-container')
   // placesContainer.firstChild
   // placesContainer.childNodes
   // placesContainer.childNodes[1]
   // placesContainer.childNodes[3].childNodes
   // placesContainer.childNodes[3].childNodes[5].nextSibling
   // placesContainer.childNodes[3].childNodes[5].nextSibling
   
   // const placesUl = document.querySelector('#places-container ul')
   // placesUl

   // To create any HTML element
   // document.createElement('span')
   // document.createElement('section')

   // To create any HTML element & any content input
   // const li = document.createElement('li')
   // li.innerHTML = 'Brand new place to go'

   // To create any HTML element & any content input
   // const placesUl = document.querySelector('#places-container ul')
   // const li = document.createElement('li')
   // placesUl.appendChild(li)
   // li.innerHTML = 'Brand new place to go'
   // placesUl.appendChild(li)

   // const placesUl = document.querySelector('#places-container ul')
   // const li2 = document.createElement('li')
   // li2.innerText = 'another dynamic li'
   // placesUl.appendChild(li2)

   // To access parent, child, siblings etc.
   // const placesUl = document.querySelector('#places-container ul')
   // placesUl.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
   // placesUl.parentNode.childNodes


   // 24.