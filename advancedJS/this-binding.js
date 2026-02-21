const person = {
  name: "yuvraj",
  greet() {
    console.log(`hello ${this.name}`);
  },
};
person.greet();
let greetings = person.greet;
// when we assign the obj method in a variable the context of this is lost
greetings();
// so we use bind method to give context to this
const bindgreet = person.greet.bind({ name: "sitaram" });
bindgreet();
const anotherperson = {
  name: "raju",
};
person.greet.call(anotherperson);
// call();
