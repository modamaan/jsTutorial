// covid_data = [
//     [1,'Eranakulam',34000,2000,23000,20000,2000],
//     [2,'Idukki',14000,3000,25000,30000,1000],
//     [3,'Thrissur',24000,4000,33000,24000,2500],
//     [4,'Pathanamthitta',20000,2000,45000,22000,1500],
//     [5,'Kozhikode',44000,5000,12000,21000,500],
//     [6,'Palakkad',12000,1000,20000,1000,3400]
// ]




// covid_data.sort((d1,d2)=>d2[5]-d1[5]).forEach(d=>console.log(d[1]))

// thrissur = covid_data.find(d=>d[1]=='Thrissur')
// console.log(thrissur)



// greenZone = covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[1]
// console.log(greenZone);

// employee = [
//     [1000, 'Neel', 'developer', 'kochi', 25000, 3],
//     [1001, 'max', "tester", "TVM", 15000, 2],
//     [1002, 'MaxWell', "QA", "kochi", 35000, 4],
//     [1003, 'vyom', "QA", "kochi", 15000, 5],
//     [1004, 'amaan', 'developer', 'kochi', 100000, 7],
//   ];

// minimum salaried 

// minSalary = employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)[1]
// console.log(minSalary);

// fminSalary = employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)[1]
// console.log(fminSalary);

//  total salary all employees

// sum = employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(sum)

// avg = employee.map((emp=>emp[4])).reduce((sal1,sal2)=>sal1+sal2/employee.length)
// console.log(avg) 

// a= [10,11,12,13,14,15,16,17,18,19,20]

// index = a.indexOf(15)

// a.splice(index,3)
// console.log(a);

// a=[
//   [10,12],
//   [23,34,56],
//   [56,67],
//   [78,68]
// ]

// // print all numbers < 50
// num = a.flat(Infinity)

// numbers = num.filter((n)=>n<50)
// console.log(numbers);
// console.log('--------------------');

// // find squares of each items inside the array 

// squares = num.map((sq)=>sq**2)
// console.log(squares);
// console.log('--------------------');

// // total sum of all item

// total = num.reduce((t1,t2)=>t1+t2)
// console.log(total);
// console.log('---------------------');

// // find highest values

// high = num.reduce((h1,h2)=>h1>h2?h1:h2)
// console.log(high);

// products = [
//   [1,'hide and seek', 50,20],
//   [2,'lays',20,80],
//   [3,'oreo',40,100],
//   [4,'parleG',25,0],
//   [5,'tiger',20,30],
//   [6,'unibic',60,20],
//   [7,'good day',70,20]
// ]

// products.filter((pr)=>pr[2]>=10&&pr[2]<=30).forEach(product=>console.log(product[1]))



// display product whose price <rs 50

// products.filter((products=>products[2]<50)).forEach(products=>console.log(products[1]))

// print price of oreo

// oreo = products.find((or)=>or[1]=='oreo')[2]
// console.log(oreo);

// 4. costly product name
// console.log(products.reduce((p1,p2)=>p1>p2?p1:p2)[1]);

// 5. out of stock
// products.filter(stock=> stock[3]==0).forEach(stock=>console.log(stock[1]))
// console.log(products.sort((p1,p2)=>p2[3]-p1[3]));


// console.log( products.reduce((st1,st2)=>st1[3]>st2[3]?st1:st2)[1]
// );

// pr = products.some(product=>product[2]<=10)
// console.log(pr?'yes':'no');

// str= 'hello'
// console.log(Array.from(str));

// pattern = 'AabAeqfsC'

// output={}
// charArray = pattern.split('')
// for(let char of charArray){
//   if(char in output){
//     console.log('Recursive character',char);
//     break
//   }else{
//     output[char]=2
//   }
// }

a=[10,10,20,30,20,40,50,30,50,40,50,60,40,30,20,10]

nc={}
a.map((num)=>num in nc?nc[num]+=1:nc[num]=1)
console.log(nc);