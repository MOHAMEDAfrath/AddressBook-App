class AddressBook{
    get id(){
        return this._id;
    }
    set id(value){
        this._id = value;
        }
    get fullName(){
        return this._fullname;
    }
    set fullName(value){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}([\\s]{0,1}[A-Za-z]{1,})*$");
    if (nameRegex.test(value)) {
        this._fullname=value;
    } else {
      throw "Invalid Name";
    }
    }
    get phone(){
        return this._phone;
    }
    set phone(value){
        let phoneRegex = RegExp("^[91]+[\\s]+[0-9]{10}$");
        if(phoneRegex.test(value))
        this._phone = value;
        else
        throw 'Invalid Phone Number';
    }
    get address(){
        return this._address;
    }
    set address(value){
        this._address = value;
    }
    get City(){
        return this._City;
    }
    set City(value){
        if(value != "City")
        this._City = value;
        else
        throw "Choose City";
    }
    get State(){
        return this._State;
    }
    set State(value){ 
        if(value!="State")
        this._State = value;
        else
        throw "Choose State";
    }
    get zip(){
        return this._zip;
    }
    set zip(value){
        let zipRegex = RegExp("^[1-9][0-9]{2}\\s{0,1}[0-9]{3}$");
        if(zipRegex.test(value))
        this._zip = value;
        else
        throw 'Zip is invalid';
    }
    toString(){
        return "Full Name : "+this.fullName+" Phone Number : "+this.phone+
        " Address : "+this.address+" City : "+this.City+" State : "+this.State+
        " Zip : "+this.zip;
    }
}