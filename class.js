class Employee{
    id
    name
    salary
    desg

    constructor(empId,empName,empDesg,empSalary){
        this.id = empId
        this.name = empName
        this.empDesg = empDesg
        this.salary = empSalary
    }

    displayEmployee(){
        console.log(`
        Employee Id : ${this.id}
        Employee Name : ${this.name}
        Employee designation : ${this.desg}
        Employee Salary : ${this.salary}
        `);
    }
}

emp1 = new Employee(1,'helo','Developer',100000)
emp1.displayEmployee()
emp2 = new Employee(2,'Amaan','Entrepreneur',10000000000000000)
emp2.displayEmployee()
