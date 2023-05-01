products = [
    {pid:100,pName:'apple',brand:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsung',brand:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',brand:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',brand:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',brand:'4g',price:10000,display:'lcd'},
]

// all names
// products.map((name)=>name.pName).forEach((name)=>console.log(name))

// console.log('-------------------');

// products.filter((dis)=>dis['display']=='lcd').forEach(dis=>console.log(dis.pName))

// console.log(products.filter((mob)=>mob.brand=='5g'));

// console.log(products.sort((p1,p2)=>p1.price-p2.price));

 console.log( products.reduce((cost1,cost2)=>cost1.price>cost2.price?cost1:cost2).pName
 );




