import Mock from 'mockjs'
let employees = []
const COUNT = 10
for (let i = 1; i <= COUNT; i++) {
  employees.push(Mock.mock({
    id: i + 1000,
    name: '@name',
    department: '@integer(1001,1010)',
    address: '@region',
    phone: '@integer(13000000000,18000000000)'
  }))
}
export {
  employees
}
