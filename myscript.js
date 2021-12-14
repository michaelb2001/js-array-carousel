const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let contenutiP="";
for(let i=0 ; i<items.length; i++){
    if(i==1){
        contenutiP += 
        `<img src="${items[i]}" id="item-p-${i}>`;
    }else{
        contenutiP += 
        `<img src="${items[i]}" id="item-p-${i}> class="hidden">`;
    }
}

document.getElementById("principale").innerHTML = contenutiP;


let contenutiL="";
for(let i=0 ; i<items.length; i++){
    contenutiL += 
    `<img src="${items[i]}" id="item-${i}">`;
}

document.getElementById("laterale").innerHTML = 
`<div id="prev">&uarr;</div>
 <div id="next">&darr;</div>${contenutiL}`;


