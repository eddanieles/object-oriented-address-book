//$(document).ready(function(){

  var Contact = function(name, phone, address) {
    this.name = name,
    this.phone = phone,
    this.address = address,
    this.date = Date.now(),
    this.watch();
  }

  //var contactArray = [];

  Contact.prototype.watch = function () {
    if (Contact.instances.indexOf(this) === -1) {
        Contact.instances.push(this);
    }
  };

  Contact.prototype.unwatch = function () {
      Contact.instances.splice(Contact.instances.indexOf(this), 1);
  };

  Contact.instances = [];


  var contactList = function() {

  }

//})
