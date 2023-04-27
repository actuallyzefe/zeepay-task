interface User {
  id: number;
  name: string;
  email: string;
}

class UserDao {
  constructor(private users: User[]) {}

  getUserById(id: number): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }

  getUsersByName(name: string): User[] {
    const user = this.users.filter((user) => user.name === name);
    if (user.length === 0) {
      throw Error("There is no user with that name");
    }
    return user;
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

const usersByName = userDao.getUsersByName("Ghezzal");
console.log(usersByName);
