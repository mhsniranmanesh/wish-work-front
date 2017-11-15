import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const profileInfo =
  {
    id: "1",
    first_name: "امیر",
    last_name: "شیرانی",
    title:'مترجم خوب',
    bio: "I don't think limits",
    job: "none of your business",
    degree: "کارشناسی",
    university:"دانشگاه صنعتی شریف"
  }

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (profileInfo) => {
  return replaceAll(profileInfo.first_name, ' ', '-');
};

class profileInfoApi {
  static getAllInfo() {
    return new Promise((resolve, reject) => {
        resolve(Object.assign([], profileInfo));
    });
  }

  static newInfos(profileInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (profileInfo.first_name.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (profileInfo.id) {
          const existingCourseIndex = profileInfo.findIndex(a => a.id == profileInfo.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          profileInfo.id = generateId(profileInfo);

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

export default profileInfoApi;
