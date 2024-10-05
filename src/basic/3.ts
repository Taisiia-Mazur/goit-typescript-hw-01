// Створіть змінну, яка може містити або рядок, або число(union type) ? Також, оголосіть змінну, яка може містити лише
// одне з двох можливих рядкових значень: 'enable' або 'disable'(literal type).


type Union= string | number;
let unionBase: Union;
unionBase = 10;
unionBase = "go";

type EnOrDes= 'enable' | 'disable';
let answer: EnOrDes;
answer = 'enable';
answer = 'disable';