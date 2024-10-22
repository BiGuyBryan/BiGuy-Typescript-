import { Student } from "./aptech-interface";
import { StudentFunctions } from "./students-functions";


export class StudentData implements StudentFunctions{
    private students: Student[] = []

    


    addStudent(student: Student): void {
        this.students.push(student);
        // throw new Error("Method not implemented.");
    }


    findStudentById(id: number): Student | string {
        const prep = this.students.find((Student) => Student.id == id);
        if(!prep){
            return `Student with id:${id} does not exists`;
        }else {
            return prep;
        }
        // throw new Error("Method not implemented.");
    }
    public getAllStudent(): Student[] {
        return this.students;
        // throw new Error("Method not implemented.");
    }


    deleteStudent(Id: number): void {
        const stud = this.students.findIndex((Pupil)=>Pupil.id === Id);
            if(stud > -1){
                this.students.splice(stud,1);
            }else {
                console.log( `Student with ${Id} not found`);
                
            }
                
                
            
        
        // throw new Error("Method not implemented.");
    }
    updateStudent(Id: number, updateData: Partial<Student>): void {
        const student = this.findStudentById(Id);
        if(student){
            Object.assign(student, updateData);
        }else{
            console.log("unable to update Student")
        }
        // throw new Error("Method not implemented.");
    }

}