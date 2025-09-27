class User{
  public name:string
  private email:string
  protected status:string

  constructor(name:string,email:string,status:string){
    this.name=name
    this.email=email
    this.status=status
  }

  public getUSerInfo(){
    console.log(`Name is:${this.name} status is:${this.status}`)
  }

  public updateStatus(newStatus:string){ss
    this.status=newStatus
  }

  private getEmail(){
    return this.email
  }
}

class Admin extends User{
  constructor(name:string,email:string,status:boolean ){
  super(name,email,status)
  }
  public getAdminInfo(){
    console.log(`${this.name} - ${this.status} `)
  }

  public getEmailAccess(){
    console.log(this.getEmail())
  }
}

const user=new User('Saeed','Saeed@gmail.com','active')
user.getUSerInfo()
console.log(user.name)
console.log(user.email)
user.updateStatus('Inactive')
user.getUSerInfo()