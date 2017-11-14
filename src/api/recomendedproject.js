import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const recomendedProject =[
  {
      id: "1",
      title: "ترجمه ی یک متن تخصصی در حوزه ی بایو ",
      description:"این متن واقعا برای افراد مبتدی سخت می باشد ، نیاز به یک فریلنسر برجسته مسلط به حوزه ی بایو می باشد",
      tags: "#فوری",
      price: '۲۲۳۰۰۰ تومان',
      releaseTime: '۳ ساعت قبل'
  },
    {
        id: "2",
        title: "ترجمه ی یک متن تخصصی کلی ",
        description:"متنی از کتاب سفر در زمان، ۲۰ دقیقه معادل یک ساعت است! ، نوشته ی پرفسور محسن ایرانمنش",
        tags: "#عمومی",
        price: '۲۱۰۰۰۰ تومان',
        releaseTime: '۴ ساعت قبل'
    }
    ]

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (recomendedProject) => {
  return replaceAll(recomendedProject.title, ' ', '-');
};


class recomendedProjectApi {
    static getAllInfo() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], recomendedProject));
            }, delay);
        });
     }

  static saveCourse(recomendedProject) {
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (recomendedProject.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (recomendedProjects.id) {
          const existingCourseIndex = recomendedProject.findIndex(a => a.id == recomendedProject.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          recomendedProject.id = generateId(recomendedProject);

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

export default recomendedProjectApi;
