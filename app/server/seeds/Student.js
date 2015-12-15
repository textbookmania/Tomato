var studentSeeds = [
  {first: "John", last: "Williams", email:"jwilliams27", pic: "http://static.planetminecraft.com/files/avatar/1168883_0.jpg"},
  {first: "Sunny", last: "Rodgers", email:"sr1000", pic: "http://orig00.deviantart.net/ee08/f/2009/073/e/d/free_red_panda_icon_100x100_by_supertuffpinkpuff.png"},
  {first: "Michael", last: "Jordan", email:"mj23", pic: "http://findicons.com/files/icons/2770/ios_7_icons/100/basketball.png"},
  {first: "Kobe", last: "Bryant", email:"kb24", pic: "http://findicons.com/files/icons/2770/ios_7_icons/100/basketball.png"},
];

if (Student.find().count() === 0) {
  _.each(studentSeeds,  function(student) {
    Student.insert(student);
  });
}