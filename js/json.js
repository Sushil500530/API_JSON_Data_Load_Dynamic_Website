const user = {id:1, name:"gorib amir", job:"actor"}  ;
// JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user) ;
// console.log(stringified) ; //{"id":1,"name":"gorib amir","job":"actor"}
// console.log(user)  //{ id: 1, name: 'gorib amir', job: 'actor' }

const shop = {
    owner:"Alia", 
    Address:{
        street:'kochukhet vuter goli',
        city:'ranbir',
        country:'BD'
    },
    products:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true ,
    isNew:false 
} ;
console.log(shop) ;
const shopJson = JSON.stringify(shop) ;
console.log(shopJson)
// string theke object e rupantor korar jonno(parse) use korte pari 
const shopObj = JSON.parse(shopJson) ;
console.log(shopObj)