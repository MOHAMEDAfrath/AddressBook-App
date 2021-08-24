window.addEventListener("DOMContentLoaded", (event) => {
    //UC-5 Validation of input
    const name = document.querySelector("#fullname");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      setTextValue("#errName", "");
      return;
    }
    try {
      new AddressBook().fullName = name.value;
      setTextValue("#errName", "");
    } catch (e) {
      setTextValue("#errName", e);
    }
    
  });
  const phone = document.querySelector("#contactNum");
  phone.addEventListener("input", function () {
    if (phone.value.length == 0) {
      setTextValue("#errContact", "");
      return;
    }
    try {
      new AddressBook().phone = phone.value;
      setTextValue("#errContact", "");
    } catch (e) {
      setTextValue("#errContact", e);
    }
    
  });
  const zip = document.querySelector("#zip");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      setTextValue("#errZip", "");
      return;
    }
    try {
      new AddressBook().zip = zip.value;
      setTextValue("#errZip", "");
    } catch (e) {
      setTextValue("#errZip", e);
    }
    
  });
});
//saves the data to local
const save = () => {
    try {
      let addressBook = createContact();
      createorUpdateLocal(addressBook);
    } catch (e) {
      return;
    }
  };
  //onSubmit validates this function
const createContact = () => {
  let address = new AddressBook();
  try {
     address.fullName = getInputValue("fullname");
     address.phone = getInputValue("contactNum");
    address.address=getInputValue("address");
    address.City=getInputValue("city");
    address.State=getInputValue("state");
    address.zip=getInputValue("zip");
  }catch(e){
      alert(e);
  }
  return address;
};
//UC-6 create or update local storage
const createorUpdateLocal = (address) => {
    alert(address.toString());
    //JSON Object
    let addressList = JSON.parse(localStorage.getItem("ContactList"));
    if (addressList != undefined) {
        addressList.push(address);
    } else {
        addressList = [address];
    }
    //JSON to String
    localStorage.setItem("ContactList", JSON.stringify(addressList));
  };
  //gets based on ID
const getInputValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
};
const setTextValue = (id, value) => {
    const attribute = document.querySelector(id);
    attribute.textContent = value;
};
// UC-7 Reset
const resetForm=()=>{
    setTextValue('#fullname','');
    setTextValue('#contactNum','');
    setTextValue('#address','');
    setTextValue('#errName','');
    setTextValue('#errContact','');
    setTextValue('#errZip','');
    document.getElementById('city').value="City";
    document.getElementById('state').value="State";
    alert("Reseted!");
}