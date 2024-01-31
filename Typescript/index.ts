// tipos primitivos

// string
let nome: string = "Carlos"
// number/ponto flutuante
let numero: number = 10
// float 
let bolean: boolean = true
// undefined
let bizarro: undefined = undefined
// null
let nada: null = null

// there are two ways of define a type to a variable

// explicit
// implicit


// explicit type
let nome2: string = "My name"
// sobrenome = 30 typescrip show a error
// i wanna that is mandatory a string

// implicit type 
let profissao = "teacher"
// profissao = 100 typescrip show a error
// when u not set a type of a variable the typescript guess what type is u variable

// advanced types

//union type when the value can be have more one type
let myVariable: string | number
myVariable = "Hii"
myVariable = 10

//any u can be use all of types
let test: any = 100
test = "helo"

// unknown it's a alternative of a "any" but is more safe cause this type of date there are verifications 
let valor: unknown = 100
valor = "texto"