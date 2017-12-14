// import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const ProjectsDone =[
    {
        id: "1",
        Title: "سفر در زمان",
        Describtion:"پروژه ی عظیم مربوط به سفر در زمان ۲۰ دقیقه معادل ۱ ساعت",
        ReleaseTime:'۱۲:۰۰',
    },
    {
        id: '2',
        Title: 'طبقه یازده' ,
        Describtion:"پروژه ای مربوط به طبقه یازده ، به زبان ژاپنی",
        ReleaseTime:'۱:۰۰'
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (ProjectsDone) => {
    return replaceAll(ProjectsDone.id, ' ', '-');
};

class ProjectsDoneApi {
    static getAllInfo() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], ProjectsDone));
        });
    }

    static newInfos(ProjectsDone) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (ProjectsDone.first_name.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (ProjectsDone.id) {
                    const existingCourseIndex = ProjectsDone.findIndex(a => a.id == ProjectsDone.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    ProjectsDone.id = generateId(ProjectsDone);

                }

                resolve(Object.assign({}, course));
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => {
                    course.courseId == courseId;
                });
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ProjectsDoneApi;
