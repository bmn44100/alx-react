import Immutable from 'immutable';

function printBestStudents(object) {
    const immObj = Immutable.seq(object);
    console.log(immObj);

    const filtered = immObj.filter((student) => student.score > 70);

    const nameCaps = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const obj = filtered.toJS();

    Object.keys(obj).map((key) => {
        const student = obj[key];
        student.firstName = nameCaps(student.firstName);
        student.lastName = nameCaps(student.lastName);
        return student;
    });

    console.log(obj);
}

export default printBestStudents;