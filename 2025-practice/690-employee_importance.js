/*
You have a data structure of employee information, including the employee's unique ID, importance value, and direct subordinates' IDs.

You are given an array of employees employees where:

    employees[i].id is the ID of the ith employee.
    employees[i].importance is the importance value of the ith employee.
    employees[i].subordinates is a list of the IDs of the direct subordinates of the ith employee.

Given an integer id that represents an employee's ID, return the total importance value of this employee and all their direct and indirect subordinates.
*/

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

class Employee {
    constructor(id, importance, subordinates) {
      this.id = id;
      this.importance = importance;
      this.subordinates = subordinates;
    }
  }
  
  /**
   * @param {Employee[]} employees
   * @param {number} id
   * @return {number}
   */
  
  // This is a graph BFS problem - using a queue with shift()
  // Create a map of the employees
  // Use a queue to process employees by each level
  // For each employee, add their importance to the total
  // continue while the queue is not empty
  
  const getImportance = function (employees, id) {
    // create an employee map for O(1) lookup
    const empMap = new Map(employees.map((emp) => [emp.id, emp]));
    // total starts at zero, is incremented
    let total = 0;
    // start the queue with the first employee
    const queue = [id];
  
    // run a while loop to build the queue
    while (queue.length > 0) {
      // traverse the queue by removing the first employee from the queue
      const currentID = queue.shift();
      const employee = empMap.get(currentID);
  
      // if there isn't an employee,  continue
      if (!employee) continue;
      // increment the total by the employee importance
      total += employee.importance;
      // push the subordinates to the queue
      queue.push(...employee.subordinates); // Corrected line
    }
    // return the total of the added importances
    return total;
  };
  
  // Test Cases
  const employees1 = [
    new Employee(1, 5, [2, 3]),
    new Employee(2, 3, []),
    new Employee(3, 3, []),
  ];
  const empId1 = 1;
  
  const employees2 = [
    new Employee(1, 5, [2, 3]),
    new Employee(2, 3, [4]),
    new Employee(3, 4, []),
    new Employee(4, 1, []),
  ];
  const empId2 = 1;
  
  const employees3 = [new Employee(1, 5, []), new Employee(2, 3, [])];
  const empId3 = 2;
  
  console.log("Test Case 1:", getImportance(employees1, empId1)); // Expected: 11
  console.log("Test Case 2:", getImportance(employees2, empId2)); // Expected: 13
  console.log("Test Case 3:", getImportance(employees3, empId3)); // Expected: 3
  
  // Jest Test Cases (example using Jest)
  if (typeof describe === "function") {
    describe("Employee Importance", () => {
      it("Test Case 1", () => {
        expect(getImportance(employees1, empId1)).toBe(11);
      });
  
      it("Test Case 2", () => {
        expect(getImportance(employees2, empId2)).toBe(13);
      });
  
      it("Test Case 3", () => {
        expect(getImportance(employees3, empId3)).toBe(3);
      });
    });
  }
  