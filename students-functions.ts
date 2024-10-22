import { Student } from "./aptech-interface"

export interface StudentFunctions {
    addStudent(newStudent: Student): void;
    findStudentById(id: number): Student | string;
    getAllStudent(): Student[];
    deleteStudent(id: number): void;
    updateStudent(id: number, updateData: Partial<Student>): void;

}