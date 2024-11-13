import Database from "../Database/index.js";

export function fetchAssignmentsForCourse(cid) {

    const { assignments } = Database;
    return assignments.filter((assignment) => assignment.course === cid);
}

export function deleteAssignment(_id) {
    
    Database.assignments = Database.assignments.filter((x) => x._id !== _id);
}