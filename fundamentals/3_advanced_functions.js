// 1- recursive traversal
let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

function sumSalaries(company) {
    if (Array.isArray(company)) {
        return company.reduce((acc,curr)=>acc + curr.salary,0)
    }
    else{
        let sum = 0
        for (let value of Object.values(company)){
            sum += sumSalaries(value)
        }
        return sum
    }
}

alert(sumSalaries(company)); 