/*
M8 Assignment - Part 2, The Employee Management System
Original from-scratch implementation using arrays and localStorage.
*/

(function () {
    const STORAGE_KEY = "m8Employees";

    const seedEmployees = [
        [1001, "Alicia Stone", 1254, "alicia.stone@example.com", "Operations"],
        [1002, "Marcus Lee", 2387, "marcus.lee@example.com", "Finance"],
        [1003, "Priya Shah", 4412, "priya.shah@example.com", "IT"],
        [1004, "Daniel Kim", 5678, "daniel.kim@example.com", "Marketing"],
        [1005, "Nina Patel", 7841, "nina.patel@example.com", "HR"]
    ];

    let employees = loadEmployees();

    const form = document.getElementById("employeeForm");
    const tbody = document.getElementById("employeeTableBody");
    const employeeCount = document.getElementById("employeeCount");

    function loadEmployees() {
        const storedEmployees = localStorage.getItem(STORAGE_KEY);
        if (storedEmployees) {
            try {
                return JSON.parse(storedEmployees);
            } catch (error) {
                console.error("Could not parse employee data from localStorage.", error);
            }
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seedEmployees));
        return [...seedEmployees];
    }

    function saveEmployees(employeeArray) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employeeArray));
    }

    function updateEmployeeCount(employeeArray) {
        employeeCount.textContent = `${employeeArray.length} Employee${employeeArray.length === 1 ? "" : "s"}`;
    }

    function buildGrid(employeeArray) {
        tbody.innerHTML = "";

        for (const employee of employeeArray) {
            const [id, name, extension, email, department] = employee;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${id}</td>
                <td>${name}</td>
                <td>${extension}</td>
                <td><a href="mailto:${email}">${email}</a></td>
                <td>${department}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-danger delete-employee" data-id="${id}">
                        Delete
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        }

        updateEmployeeCount(employeeArray);
        saveEmployees(employeeArray);
    }

    function addEmployee(employeeArray, newEmployee) {
        employeeArray.push(newEmployee);
        buildGrid(employeeArray);
    }

    function removeEmployee(employeeArray, idToRemove) {
        const employeeIndex = employeeArray.findIndex((employee) => Number(employee[0]) === Number(idToRemove));
        if (employeeIndex !== -1) {
            employeeArray.splice(employeeIndex, 1);
            buildGrid(employeeArray);
        }
    }

    function resetFormFocus() {
        form.reset();
        document.getElementById("empId").focus();
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const id = Number(document.getElementById("empId").value.trim());
        const name = document.getElementById("empName").value.trim();
        const extension = Number(document.getElementById("empExt").value.trim());
        const email = document.getElementById("empEmail").value.trim();
        const department = document.getElementById("empDept").value.trim();

        if (!id || !name || !extension || !email || !department) {
            alert("Please complete all employee fields.");
            return;
        }

        if (String(extension).length !== 4) {
            alert("Extension must be a 4-digit number.");
            return;
        }

        if (employees.some((employee) => Number(employee[0]) === id)) {
            alert("Employee ID already exists. Please enter a unique ID.");
            return;
        }

        const newEmployee = [id, name, extension, email, department];
        addEmployee(employees, newEmployee);
        resetFormFocus();
    });

    tbody.addEventListener("click", function (event) {
        const deleteButton = event.target.closest(".delete-employee");
        if (!deleteButton) {
            return;
        }

        const employeeId = Number(deleteButton.dataset.id);
        removeEmployee(employees, employeeId);
    });

    buildGrid(employees);
})();
