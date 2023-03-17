// Write your solution in this file!
const employee = {
    name: 'Ozlem',
    streetAddress: '15 Broadway'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
      ...obj,
      [key]: value,
    };
}

const updateEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

const destUpEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(obj, key, value){
    return {
      ...obj,
      [key]: value,
    };
}

const deleteEmployee = deleteFromEmployeeByKey(employee, 'name', undefined);

function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value;
    return obj;
}

const destDelEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name', 'undefined');
