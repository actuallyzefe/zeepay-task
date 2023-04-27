interface User {
  id: number;
  name: string;
  email: string;
}

class UserDao {
  constructor(private users: User[]) {}

  getUserById(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  getUsersByName(name: string): User[] {
    return this.users.filter((user) => user.name === name);
  }
}

// Usage
const users: User[] = [
  { id: 1, name: "Efe", email: "efe@example.com" },
  { id: 2, name: "Yusuf", email: "yusuf@example.com" },
  { id: 3, name: "Ghezzal", email: "ghezzal@example.com" },
  { id: 4, name: "Ali", email: "ali@example.com" },
];

const userDao = new UserDao(users);

const user = userDao.getUserById(2);
console.log(user);

const usersByName = userDao.getUsersByName("Yusuf");
console.log(usersByName);
