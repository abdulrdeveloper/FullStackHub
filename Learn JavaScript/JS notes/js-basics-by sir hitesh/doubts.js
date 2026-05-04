const username = {
  phone: "iphone",
  age: {
    a: 40,
    b: {
      
    }
  }
}

const mycopy = username
const copyName = { ...username }


copyName.age.a = 5