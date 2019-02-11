const users = [
    {id:'1', name:'Peter Parker',email:'peter@marvel.com'},
    {id:'2', name:'Bruce Wayne',email:'bruce@dc.com'}
]

export class User {
    static findAll():Promise<any[]>{
        return Promise.resolve(users)
    }
    static findById(id):Promise<any>{
        return new Promise(resolve =>{
            resolve(users.find(user => user.id === id))
        })
    }
}