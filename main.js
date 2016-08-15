
var contactList = function() {
  this.book = []
}

var Contact = function(name, phone, address) {
  this.name = name,
  this.phone = phone,
  this.address = address,
  this.date = Date.now()
}

var friends = new contactList();

contactList.prototype.add = function(name, phone, address){
  var contact = new Contact(name, phone, address);
  this.book.push(contact);
}

contactList.prototype.find = function(name){
  return this.book.filter((contact) => contact.name.includes(name));
}


friends.add("Ed", "4321", "21 Jump St");
friends.add("Kristy", "1234", "NJ");
/*
  var TIYStudent = function(name, subject) {
    this.name = name;
    this.subject = subject;
    this.repos = [];
  }

  var Repos = function(name, language, author) {
    this.name = name;
    this.language = language;
    this.author = author;
  }

  TIYStudent.prototype.addRepo = function(name, language) {
    var repo = new Repos(name, language, this);
    this.repos.push(repo);
  }

  var bama = new TIYStudent("Brian", "JavaScript");

  bama.addRepo("T Shirt Shop", "JavaScript");
*/
