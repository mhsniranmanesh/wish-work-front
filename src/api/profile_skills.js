import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const profileSkills =
    {
        id: "1",
        skills: 'persianToEnglish'
    }

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (profileSkills) => {
    return replaceAll(profileSkills.first_name, ' ', '-');
};

class profileSkillsApi {
    static getAllInfo() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], profileSkills));
        });
    }

    static saveCourse(profileSkills) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (profileSkills.first_name.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (profileSkills.id) {
                    const existingCourseIndex = profileSkills.findIndex(a => a.id == profileSkills.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    profileSkills.id = generateId(profileSkills);

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

export default profileSkillsApi;
