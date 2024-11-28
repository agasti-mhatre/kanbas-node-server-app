import Database from "../Database/index.js";
import model from "./model.js";

export async function fetchAssignmentsForCourse(cid) {

    const assignments = await model.find({course: cid});
    return assignments;
}

export async function createAssignment(newAssignment) {

    const id = newAssignment._id;
    delete newAssignment._id;
    await model.create({_id: id, ...newAssignment});
}

export async function updateAssignment(updatedAssignment) {

    const id = updatedAssignment._id;
    delete updatedAssignment._id;
    await model.updateOne({_id: id}, {$set: updatedAssignment});
}

export async function deleteAssignment(id) {
    
    await model.deleteOne({_id: id});
}