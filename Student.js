class Student {
  constructor({ name, age, birth, gender, id }) {
    this.name = name;
    this.age = age;
    this.birth = birth;
    this.id = id;

    switch (gender) {
      case "Male ":
        this.gender = gender;
        break;
      case "Female":
        this.gender = gender;
        break;
      default:
        this.gender = "Unidentified ";
    }

    this.hobbies = [];
  }

  set studentName(newName) {
    this.name = newName;
  }

  set InputAge(newAge) {
    this.age = newAge;
  }

  set hbd(inputHbd) {
    this.birth = inputHbd;
  }

  set nId(newId) {
    this.id = newId;
  }

  set dGender(newG) {
    switch (newG) {
      case "Male":
        this.gender = newG;
        break;
      case "Female":
        this.gender = newG;
        break;
      default:
        this.gender = "Not a Gender";
    }
  }

  set likes(newLikes) {
    this.hobbies.push(newLikes);
  }

  set likes(likesArray) {
    this.hobbies = likesArray;
  }

  set rmvNLikes(newLikes) {
    let likeArray = [];

    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] !== newLikes) {
        likeArray.push(this.hobbies[i]);
      }
    }

    this.hobbies = likeArray;
  }

  get listlike() {
    return this.hobbies;
  }

  get studentInfo() {
    return `${this.name} ${this.gender} ${this.birth} ${this.age} ${this.gender} ${this.id}`;
  }
}

const studentA = new Student({
  name: "Kogami Shinya",
  age: 36,
  birth: "August 16, 1984  ",
  gender: "Male",
  id: 4311301080,
});

const studentB = new Student({
  name: "Tsunemori Akane",
  age: 30,
  birth: "April 1, 1992",
  gender: "Female",
  id: 4311301081,
});

// im confused around these part about how to make these output command simple since im easily forget stuff XD

studentA.likes = ["Martial Arts", "Running", "Work Out"];
studentB.likes = ["Investigate", "Shopping", "Threadmill"];

console.log(studentA.studentInfo);
console.log("Hobby List: ");
for (let i = 0; i < studentA.listlike.length; i++) {
  console.log(`${i + 1}. ${studentA.listlike[i]}`);
}
studentA.rmvNLikes = "Running";
console.log("Hobbies Succesfully Removed!");
console.log("Hobby List: ");
for (let i = 0; i < studentA.listlike.length; i++) {
  console.log(`${i + 1}. ${studentA.listlike[i]}`);
}
studentA.rmvNLikes = "Running";


console.log(studentB.studentInfo);
console.log("Hobby List: ");
for (let i = 0; i < studentB.listlike.length; i++) {
  console.log(`${i + 1}. ${studentB.listlike[i]}`);
}
studentB.rmvNLikes = "Investigate";
console.log("Hobbies Succesfully Removed!");
console.log("Hobby List: ");
for (let i = 0; i < studentB.listlike.length; i++) {
  console.log(`${i + 1}. ${studentB.listlike[i]}`);
}
studentB.rmvNLikes = "Investigate";

//the output works just fine, its just so damn messy 