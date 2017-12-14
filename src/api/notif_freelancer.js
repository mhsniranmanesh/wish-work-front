import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const Notifications =[
    {
        id: "1",
        Title: "پیام",
        descriptionFor: "امیرحسین دوست داریم",
        ReleaseTime:'۱۲:۰۰',
    },
    {
        id: '2',
        Title: 'پیام' ,
        descriptionFor:'سلام عزیزم!',
        ReleaseTime:'۱:۰۰'
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (Notifications) => {
    return replaceAll(Notifications.id, ' ', '-');
};

class NotificationsApi {
    static getAllInfo() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], Notifications));
        });
    }

    static newInfos(Notifications) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (Notifications.first_name.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (Notifications.id) {
                    const existingCourseIndex = Notifications.findIndex(a => a.id == Notifications.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    Notifications.id = generateId(Notifications);

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

export default NotificationsApi;
