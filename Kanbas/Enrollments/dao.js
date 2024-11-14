import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
 
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export function addEnrollment(newEnrollment) {

    Database.enrollments = [...Database.enrollments, newEnrollment];
}

export function deleteEnrollment(removeEnrollment) {

    Database.enrollments = Database.enrollments.filter((enrollment) => enrollment._id !== removeEnrollment._id);
}

export function fetchEnrollments(userID) {
    
    const enrolled = Database.enrollments.filter((enrollment) => enrollment.user === userID).map((e) => e.course);
    return Database.courses.filter((course) => enrolled.includes(course.id));
}