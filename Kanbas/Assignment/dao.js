import Database from "../Database/index.js";
import model from "./model.js";

export async function fetchAssignmentsForCourse(cid) {

    const assignments = await model.find({course: cid});
    return assignments;
}

export function createAssignment(newAssignment) {

    Database.assignments = [...Database.assignments, newAssignment];
}

export function updateAssignment(updatedAssignment) {

    const { assignments } = Database;
    const assignment = assignments.find((assignment) => assignment._id === updatedAssignment._id);
    Object.assign(assignment, updatedAssignment);
    return assignment;
}

export async function deleteAssignment(id) {
    
    await model.deleteOne({_id: id});
}