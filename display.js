// console.log("amaan");

// num1 = 10;
// num2 = 20;

// console.log(num1,num2)

// temp = num1;

// num1=num2;
// num2= temp;

// console.log(num1,num2);
// num1 = 2
// num2 = 40
// num3 = 14

// if(num1>num2 && num1>num3){
//     if(num2>num3){
//         console.log("second largest number",num2);
//     }else{
//          console.log("second largest number",num3);
//     }
// }else if(num2>num1 && num2>num3){
//     if(num1>num3){
//          console.log("second largest number",num1);
//     }else{
//          console.log("second largest number",num3);
//     }
// }else{
//     if(num1>num2){
//         console.log("second largest number",num1);
//     }else{
//         console.log("second largest number",num2);
//     }
// }

// input = 3

// total=0
// grant = 0
// i=1
// console.log("Input is", input)

// while(i<=input){
//     total = total*10+input
//     grant = grant+total
//     i++
// }
// console.log("output is ", grant)

// for(row=1; row<=4; row++){
//     str = ''
//     for(col=1; col<=row; col++){
//         str = str+'#\t'
//     }
//     console.log(str);
// }

// const gmailCheck = (mail)=> mail.endsWith("@gmail.com")?' valid gamil':'not a gmail'

// console.log(`The given email is ${gmailCheck('aman@gmail.com')}`);

// weekDays = ["monday", "tuesday", "Wendsday", "friday"]
// console.log(weekDays);

// weekDays.push('saturday','sunday')
// console.log(weekDays);

// weekDays.pop('sunday')
// console.log(weekDays);

// console.log('Method 1');

// for(index=0; index<weekDays.length; index++){
//     console.log(weekDays[index]);
// }

// for(let index in weekDays){
//     console.log(index);
// }

// expense = [10,20,30,40,50,60]
// // sum=0
// for(let value of expense){
//     sum = sum+value
// }
// console.log(sum);
// highest = expense[0]
// for(let amount of expense){
//     amount<highest && (highest=amount)
// }
// console.log(highest);

// num1 = 4
// num2 = 5
// num3 = 6
// sum = num1+num2+num3

// a = [4,5,6]
// output = []
// sum=0
// for(let value of a){
//     sum = sum+value

// }
// console.log(a)

// for(let value2 of a){
//     output.push(sum-value2)
// }
// console.log(output)

// a= [10,200,30,20,40,30,50]

// for(i=0;i<a.length;i++){
//     for(j=i+1; j<a.length; j++){
//         a[i]==a[j] && console.log(a[i]);
// //     }
// // }

// // a=[10,11,12,2,3,4,15]

// // // console.log('imput array');
// // // console.log(a);
// // // a.sort((a,b)=>a-b)
// // // console.log('array after sorting');
// // // console.log(a);

// // a.sort((a,b)=>a-b)

// // isPresent = false
// // count=0
// // searchNum = 40
// // low =0;
// // up = a.length-1

// // while(low<=up){
// //     count++

// //     mid = Math.floor((low+up)/2)
// //     if(a[mid]== searchNum){
// //         isPresent = true
// //         break
// //     }
// //     else if(a[mid]<searchNum){
// //         low = mid+1
// //     }
// //     else if(a[mid]>searchNum){
// //         up = mid-1
// //     }
// // }
// // console.log(`${searchNum} is ${isPresent?'Found':'not found'}`);
// // console.log(`Total number of itration is ${count}`);

employee = [
  [1000, 'Neel', 'developer', 'kochi', 25000, 3],
  [1001, 'max', "tester", "TVM", 15000, 2],
  [1002, 'MaxWell', "QA", "kochi", 35000, 4],
  [1003, 'vyom', "QA", "kochi", 45000, 5],
  [1004, 'amaan', 'developer', 'kochi', 100000, 7],
];

// employee.map((name)=>console.log(name[1]))

// a=[10,11,12,13,14,15]

// greater=a.filter((num)=>num>12)
// console.log(greater);

// output = a.map((num)=>num<=12?num+1:num-1)
// console.log(output);


// // for(let name of employee){
// //    console.log(name[1]);
// // }

// // console.log(employee.length)
// employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employee);

covid_data = [
    [1,'Eranakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,1000,3400]
]

// a=[1,2,3,4,5,6,7]

// console.log('Lowest element is:',a.reduce((n1,n2)=>n1<n2?n1:n2))

// console.log('highest element is:',a.reduce((n1,n2)=>n1>n2?n1:n2))

// console.log('total sum is:',a.reduce((n1,n2)=> n1+n2));

dangerZone = covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)[1]
console.log(dangerZone)

// Having first dose vaccine
// vaccine = covid_data.reduce((v1,v2)=>v1[5]>v2[5]?v1[1]:v2[1])
// console.log(vaccine);