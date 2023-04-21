const express = require('express');
const mysql = require('mysql');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'spmsv4'
});
app.post('/login', (req, res) => {
    const userID = req.body.userID;
    const password = req.body.password;
    db.query(
        "SELECT * FROM login_t WHERE userID = ? AND password = ?",
        [userID, password],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                res.send(result);
            }
            else {
                res.send({ message: "Wrong username/password combination!" });
            }
        }
    );
});
app.post('/addgrade', (req, res) => {
    const studentID = req.body.studentID;
    const educational_year = req.body.educational_year;
    const educational_semester = req.body.educational_semester;
    const enrolled_course = req.body.enrolled_course;
    const enrolled_section = req.body.enrolled_section;
    const grade = req.body.grade;
    db.query(
        "INSERT INTO grade_t (studentID, educational_year, educational_semester, enrolled_course, enrolled_section, grade) VALUES (?,?,?,?,?,?)",
        [studentID, educational_year, educational_semester, enrolled_course, enrolled_section, grade],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }

    );
});
app.post('/uploadGrade', (req, res) => {
    const data = req.body.data;
    data.forEach(element => {
        db.query(
            "INSERT INTO grade_t (studentID, educational_year, educational_semester, enrolled_course, enrolled_section, grade) VALUES (?,?,?,?,?,?)",
            [element.studentID, element.educational_year, element.educational_semester, element.enrolled_course, element.enrolled_section, element.grade],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of studentID: ${element.studentID}`);
                    res.send("done");
                }
            }

        );
    });
    console.log("All data inserted successfully!");
    

}
);

// app.post('/courseoutline/create', (req, res) => {
//     const courseTitle = req.body.courseoutline.courseTitle;
//     const courseCode = req.body.courseoutline.courseCode;
//     const courseDescription = req.body.courseoutline.courseDescription;
//     const courseType = req.body.courseoutline.courseType;
//     const creditValue = parseInt(req.body.courseoutline.creditValue);
//     const prerequisite = req.body.courseoutline.prerequisite;
//     const coursePolicy = req.body.courseoutline.coursePolicy;
//     const courseObjective = req.body.courseoutline.courseObjective;
//     const contactHours = req.body.courseoutline.contactHours;
//     const nondiscriminationPolicy = req.body.courseoutline.nondiscriminationPolicy;
//     const academicDishonesty = req.body.courseoutline.academicDishonesty;
//     const courseReference = req.body.courseoutline.courseReference;
//     const studentDisabilities = req.body.courseoutline.studentDisabilities;

//     // console.log(courseCode,courseTitle,courseDescription,courseType,creditValue,prerequisite,coursePolicy,courseObjective,contactHours,nondiscriminationPolicy,academicDishonesty,courseReference,studentDisabilities);
//     db.query(
//         "INSERT INTO course_outline_t (courseCode,courseTitle,courseDescription,courseType,creditValue,prerequisite,coursePolicy,courseObjective,contactHours,nondiscriminationPolicy,academicDishonesty,courseReference,studentDisabilities) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
//         [courseCode, courseTitle, courseDescription, courseType, creditValue, prerequisite, coursePolicy, courseObjective, contactHours, nondiscriminationPolicy, academicDishonesty, courseReference, studentDisabilities],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 res.send(result);
//             }
//         }
//     );
// });

app.post('/clomatrix/create', (req, res) => {
    const courseCode = req.body.courseCode;
    const cloMatrix = req.body.cloMatrix;
    let cloMatrixNo = 1;
    
    for (let i = 0; i < cloMatrix.cloName.length; i++) {
        db.query(
            "INSERT INTO clo_matrix_t (courseCode,cloMatrixNo,cloName,cloMatrixDes,ploAssessed,ploCloCorelations) VALUES (?,?,?,?,?,?)",
            [courseCode, cloMatrixNo++, cloMatrix.cloName[i], cloMatrix.cloMatrixDes[i], cloMatrix.ploAssessed[i], cloMatrix.ploCloCorelations[i]],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`inserted of cloMatrix: ${cloMatrix.cloName[i]}`);
                    
                }
            }
        );
    }
    
});



// app.post('/boomsleaarninglevel/create', (req, res) => { 
//     const courseCode = req.body.courseCode;
//     const boomsLeaarningLevel = req.body.boomsLeaarningLevel;
//     let cloMatrixNo = 1;

//     boomsLeaarningLevel.forEach(element => {
//         db.query(
//             "INSERT INTO blooms_learning_level_t (courseCode,cloMatrixNo,C,P,A,S) VALUES (?,?,?,?,?,?)",
//             [courseCode, cloMatrixNo++, element.C, element.P, element.A, element.S],
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(`inserted of boomsLeaarningLevel: ${element}`);
//                     res.send("done");
//                 }
//             }
//         );
//     });
    
//     console.log("All data inserted successfully!");
    
// });
    

//     // console.log(courseCode,cloMatrixNo,C,P,A,S);
// app.post('/lessonplan/create', (req, res) => {
//     const courseCode = req.body.courseCode;
//     const lessonplan = req.body.lessonplan;

//     lessonplan.forEach(element => {
//         db.query(
//             "INSERT INTO lesson_plan_t (courseCode,noOfWeeks,topics,teachingLearningStrategy,assessmentStrategy,coRespondingClo) VALUES (?,?,?,?,?,?)",
//             [courseCode, element.noOfWeeks, element.topics, element.teachingLearningStrategy, element.assessmentStrategy, element.coRespondingClo],
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(`inserted of lessonplan: ${element}`);
//                     res.send("done");
//                 }
//             }
//         );
//     });
//     console.log("All data inserted successfully!");
    
// });


// app.post('/assesment/create', (req, res) => {
//     const courseCode = req.body.courseCode;
//     const assessment = req.body.assessment;

//     assessment.forEach(element => {
//         db.query(
//             "INSERT INTO assessment_t (courseCode,assesmentType,assesmentTools,marksDistribution,bloomsCatagory,totalMarks) VALUES (?,?,?,?,?,?)",
//             [courseCode, element.assesmentType, element.assesmentTools, element.marksDistribution, element.bloomsCatagory, element.totalMarks],
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(`inserted of assesment: ${element}`);
//                     res.send("done");
//                 }
//             }
//         );
//     });
//     console.log("All data inserted successfully!");
    
// });



// app.post('/coursecontent/create', (req, res) => {
//     const courseCode = req.body.courseCode;
//     const formData = req.body.formData;
//     let courseContentNo = 1;

//     formData.forEach(element => {
//         db.query(
//             "INSERT INTO course_content_t (courseCode,courseContentNo,titles,descriptions) VALUES (?,?,?,?)",
//             [courseCode, courseContentNo++, element.titles, element.descriptions],
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log(`inserted of coursecontent: ${element}`);
//                     res.send("done");
//                 }
//             }
//         );
//     });
//     console.log("All data inserted successfully!");
    
// });




app.listen(3002, () => {
    console.log("running on port 3002");
});