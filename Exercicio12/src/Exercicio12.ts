// Considerando o `array` de usuários abaixo, crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 
//  [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 
// - **Entradas/Saídas**

type users = {
    name:String,
    email:string,
    role:string
}

const employees:users[] = [
    {name: "Rogério", email: "roger@email.com", role: "user"},
    {name: "Ademir", email: "ademir@email.com", role: "admin"},
    {name: "Aline", email: "aline@email.com", role: "user"},
    {name: "Jéssica", email: "jessica@email.com", role: "user"},  
    {name: "Adilson", email: "adilson@email.com", role: "user"},  
    {name: "Carina", email: "carina@email.com", role: "admin"} 
]

function getIsAdmin(employees:users[]):users[] {    
    const filter = employees.filter(users => users.role === "admin")
    const map = filter.map(employees.email)

    return map
}

const isAdmin = getIsAdmin(employees);
console.log(isAdmin);