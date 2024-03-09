// let item={
//     image:'/images/1.jpg',
//     rating:{
//         stars:4.5,
//         count:1400,
//     },
//     company:'Carlton London',
//     item_name:'Rhodium-Plated CZ Floral Studs',

//     current_price:'606',
//     original_price:'1085',
//     discount_percentage:'43',

// }
let bagItems
onLoad()

function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems')
    bagItems=bagItemsStr?JSON.parse(bagItemsStr):[]
    displayItemHomePage();
    displayBagIcon()
}


function addToBag(itemId){
    bagItems.push(itemId)
    localStorage.setItem('bagItems',JSON.stringify(bagItems))
    displayBagIcon()
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count')
    if(bagItems.length >0){
        bagItemCountElement.innerText = bagItems.length
        bagItemCountElement.style.visibility='visible'
    }
    else{
        bagItemCountElement.style.visibility='hidden'
    }
}


function displayItemHomePage(){
    let itemsContainer=document.querySelector('.items-container')

    if(!itemsContainer){
        return
    }
    let innerHtml=''
    items.forEach(item=>{
        innerHtml+=`
        <div class="item-container">
        <img class="item-image" src="${item.image}" alt="">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs. ${item.current_price}</span>
            <span class="original-price">Rs. ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% off)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to bag</button>
        </div>
        `
    })
    
    itemsContainer.innerHTML=innerHtml
}
















            