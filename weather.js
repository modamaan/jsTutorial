weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]

output={}
for(let distDetails of weatherData){
    let distName = distDetails['district']
    let curTemp = distDetails['temp']
    if(distName in output){
        oldTemp = output[distName]
        if(curTemp>oldTemp){
            output[distName]=curTemp
        }else{
            output[distName]=oldTemp
        }
    }else{
        output[distName]=curTemp
    }
}
console.log(output);
