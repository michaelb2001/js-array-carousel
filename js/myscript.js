//definisco gli array;
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
        `<div id="item-p-${i}" class="active">
            <img src="${items[i]}">
            <div class="testo">
                <h2 id="titolo-${i}">${title[i]}</h2>
                <p id="minitext-${i}">${text[i]}</p>
            </div>
        </div>
        `;
    }else{
        contenutiP += 
        `<div id="item-p-${i}" class="hidden">
            <img src="${items[i]}" id="item-p-${i}" >
            <div class="testo">
                <h2 id="titolo-${i}">${title[i]}</h2>
                <p id="minitext-${i}">${text[i]}</p>
            </div>
        </div>
        `;
    }
}

document.getElementById("principale").innerHTML = contenutiP;


let contenutiL="";
for(let i=0 ; i<items.length; i++){

    if(i==1){
        contenutiL += 
        `<img src="${items[i]}" id="item-${i}" class="active">`;
    }else{
        contenutiL += 
        `<img src="${items[i]}" id="item-${i}">`;
    }
}

document.getElementById("laterale").innerHTML = 
`<div id="prev">&uarr;</div>
 <div id="next">&darr;</div>${contenutiL}`;

counter =1;

const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener('click',function(){
    document.getElementById("item-"+counter).classList.remove("active");

    if(counter==0){
        prev.classList.add("hidden");
    } else{
        document.getElementById("item-p-"+counter).classList.remove("active");
        document.getElementById("item-p-"+counter).classList.add("hidden");
        counter--;
        document.getElementById("item-"+counter).classList.remove("hidden");
        document.getElementById("item-"+counter).classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("hidden");
        document.getElementById("item-p-"+counter).classList.add("active");
    }

});

next.addEventListener('click',function(){
    document.getElementById("item-"+counter).classList.remove("active");
    prev.classList.add("active");
    if(counter==(items.length-1)){
        next.classList.add("hidden");
    } else{
        prev.classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("active");
        document.getElementById("item-p-"+counter).classList.add("hidden");
        counter++;
        document.getElementById("item-"+counter).classList.remove("hidden");
        document.getElementById("item-"+counter).classList.add("active");
        document.getElementById("item-p-"+counter).classList.remove("hidden");
        document.getElementById("item-p-"+counter).classList.add("active");
 
    }
 
});

