// import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const Bids =[
    {
        id: "1",
        name: "امیرحسین شیرانی",
        BidPrice: "۲۰۰/۰۰۰",
        Describtion:"من خیلی خاصم ، پروژتون رو لطفا به من بدهید، مرسی",
        ReleaseTime:'۱۲:۰۰',
    },
    {
        id: '2',
        name: 'محسن ایرانمنش' ,
        BidPrice:'۱۰۰/۰۰۰',
        Describtion:"بنده نویسنده ی کتاب سفر در زمان، ۱ ساعت در روز معادل ۲۰ دقیقه می باشم و بسیار کارم خوب می باشد",
        ReleaseTime:'۱:۰۰'
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (Bids) => {
    return replaceAll(Bids.id, ' ', '-');
};

class BidsApi {
    static getAllInfo() {
        return new Promise((resolve, reject) => {
            resolve(Object.assign([], Bids));
        });
    }

    static newInfos(Bids) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minCourseTitleLength = 1;
                if (Bids.first_name.length < minCourseTitleLength) {
                    reject(`Title must be at least ${minCourseTitleLength} characters.`);
                }

                if (Bids.id) {
                    const existingCourseIndex = Bids.findIndex(a => a.id == Bids.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    Bids.id = generateId(Bids);

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

export default BidsApi;
