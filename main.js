// alert('xush kelibsiz !')

// let pro = prompt ('yoshingizni kiriting ')

// if(pro > 18){
//     alert('hush kelibsiz')
// }else{
//     alert('sutini ichib uhla bolakay')
// }


// alert('hush kelibsiz')
// confirm('hozir siz 2 ta son yozishiz kerak va biz uni bir biriga qoshamiz')




4// let number = +prompt ('birinchi sonni kiriting')

// let number_2 = +prompt ('ikkinchi sonni kiriting')

// alert (`${number + number_2}`)


3// let hello = prompt('ismingizni kiriting')
// let age = prompt ('yoshingizni kiriting')
// alert(`hello,my name is ${hello} and i am ${age} years old.`) 

2// alert ('qoshamiz')

// let a = +prompt ('son kiriting')
// let b = +prompt ('ikkinchi sin kiriting')

// alert (`qoldiqi: ${a % b}`)


1// let randomnum = Math.floor(Math.random() *100)
// alert (`${randomnum}`)


5// let strng = prompt ('nmadur yozing va biz uni nechta harf borligini sanab beramiz')
// alert (strng.length)

let num_1 = +prompt ('birinchi sonni kiriting:')
let num_2 = +prompt ('ikkinchi sonni kiriting:')

let result = prompt (
    `amal kiriting:
    1.Qoshis.
    2.ayirish.
    3.kopaytirish.
    4.bolish.
    amalni tanlang.
    `
    
)
if(result==1){
    alert(
        `${num_1} + ${num_2} = ${num_1 + num_2}`
    )
   
}

if(result==2){
    alert(
        `${num_1} - ${num_2} = ${num_1 - num_2}`
    )
   
}

if(result==3){
    alert(
        `${num_1} * ${num_2} = ${num_1 * num_2}`
    )
   
}
if(result==4){
    alert(
        `${num_1} / ${num_2} = ${num_1 / num_2}`
    )
   
}




