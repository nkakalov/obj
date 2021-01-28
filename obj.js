const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

  const a = {...person,age:"25 ages"}

for (let [key, value] of Object.entries(person)){
 console.log(key + ': ' + value)
}

console.log('--------------------------------------------------------')

for (let [key, value] of Object.entries(a)){
     const upperSym = key.match(/[A-Z]/) ? key.match(/[A-Z]/)[0] : key.match(/[a-z]/)[0]
     if(upperSym) {
         key = key.replace(upperSym, ' ' + upperSym)
     }

    //console.log(value)
    const func = (word) =>  word.substring(0,1).toUpperCase() + word.substring(1);
    const newstr = key.replace(/([^\s]+)/g, func);
    const newstr2 = newstr.replace('Location','Where to find')
    
    console.log(newstr2.trim() + ': ' + value)
    
    
}