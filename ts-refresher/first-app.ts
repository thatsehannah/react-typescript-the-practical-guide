// ---------primitive types---------
let userName: string;
// userName = 34;
userName = 'Elliot';

let userAge = 30;

let isValid = true;
// ---------END: primitive types---------

// ---------union types---------
let userID: string | number = 'abc1';
userID = 123;

type StringOrNum = string | number;
// ---------END: union types---------

// ---------type aliases---------
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: StringOrNum;
};

let user: User;

user = {
  name: 'Elliot',
  age: 34,
  isAdmin: true,
  id: 'abc',
};
// ---------END: type aliases---------

// ---------arrays---------
// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Reading'];
// ---------END: arrays---------

// ---------functions---------
function add(a: number, b: number): number {
  return a + b;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(1, 2, add);
// ---------END: functions---------

// ---------interfaces---------
interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials = {
  password: 'acsd',
  email: 'abc123@gmail.com',
};
// ---------END: interfaces---------

// ---------type guards---------
type Role = 'admin' | 'user' | 'editor';

let role: Role;

role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';

function performAction(action: string, role: Role) {
  if (role === 'admin') {
    console.log('Admin');
  }
}

let roles: Array<Role>;
roles = ['admin', 'editor'];
// ---------END: type guards---------

// ---------generics---------
type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge<{ name: string }, { age: number }>(
  { name: 'Charles' },
  { age: 40 }
);
// ---------END: generics---------
