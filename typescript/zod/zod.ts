import { z } from "zod";
enum Hobbies {
  Programming = "programming",
  Sports = "sports",
  Cooking = "cooking",
}
const hobbiesArray = ["sports", "cooking", "coding"] as const // as const makes the array readonly and its values literal types
const UserSchema = z.object({
  id: z.union([z.uuid(), z.number().int().positive()]), // union type for id can be either uuid or positive integer
  // also z.
  username: z.string("custom error message").min(3).max(20),
  age: z.number().lt(150).gt(0).default(Math.random() * 100),
  birthday: z.date().optional(),
  isProgrammer: z.boolean().default(true),
  test: z.void().nullable(), // nullable means it can be null  while void means it can only be undefined
  never: z.never(), // never means it can never have a value
  // .optional() means it can be undefined  other are .any(), .unknown(), .null(), .undefined()
  // .nullable() vs .nullish() means nullable allows null while nullish allows null and undefined
  // hobbies: z.enum(["sports", "cooking", "coding"]).default("coding"), // this is recommended but you can use your own enum type
  // hobbies: z.enum(hobbiesArray).default("coding"), // this is also recommended we use as const so that zod knows that value will not change
  hobbies: z.enum(Hobbies).default(Hobbies.Programming),
  friends: z.array(z.string().min(3)).max(10).min(0).default([]), // .length(n) is also available
  coords: z.tuple([z.number(), z.number()]).rest(z.number()), // fixed length array with different types
}) // .pick() .omit() .extend() .merge() are also available for object schemas
// .passThrough() allows extra properties not defined in the schema by default zod will strip them away
// .strict() will throw an error if extra properties are found

const SimpleUserSchema = z.object({
  // discriminatedUnion example
  // it is used to create a union of objects that have a common property with different literal values
  id: z.discriminatedUnion("status", [
    z.object({ status: z.literal("success"), value: z.uuid() }),
    z.object({ status: z.literal("failure"), value: z.instanceof(Error) }),
  ]),
  username: z.string().min(3).max(20),
})


type User = z.infer<typeof UserSchema>

const user: User = { username: 1, age: 30, birthday: new Date() }

// console.log(UserSchema.parse(user)) 
console.log(UserSchema.partial().parse(user))
console.log(UserSchema.partial().safeParse(user).success)
// console.log(UserSchema.shape.age)
console.log(UserSchema.partial()) // makes all fields optional // like Partial<Type> in typescript
console.log(UserSchema.required()) // makes all fields required
//----------------------------------------------- z.record example (dynamic keys)
// [dynamicid: name ]
// const UserMap=z.record(z.string())
//   const user2: z.infer<typeof UserMap> = {
//     "dynamicid1": "Alice",
//     "dynamicid2": "Bob",
//   }
//   console.log(UserMap.parse(user2)) // study more about z.record
//----------------------------------------------- z map and z.set example
// z.map example
const UserMap = z.map(z.string(), z.number())
const user2: z.infer<typeof UserMap> = new Map([
  ["Alice", 30],
  ["Bob", 25],
])
// z.set also exists
//----------------------------------------------- Promise example
const PromiseSchema = z.promise(z.string())
const promise: z.infer<typeof PromiseSchema> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!")
  }, 1000)
})

PromiseSchema.parseAsync(promise).then((result) => {
  console.log(result)
})
// ----------------------------------------------- Refinement example
const EvenNumberSchema = z.number().refine((val) => val % 2 === 0, {
  message: "Number must be even",
})

console.log(EvenNumberSchema.safeParse(4).success) // true
console.log(EvenNumberSchema.safeParse(5).success) // false