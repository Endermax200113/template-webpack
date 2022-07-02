import './styles/index.scss';
import $ from 'jquery';
// import 'bootstrap';

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: '_justmax2001_',
    age: 21,
    ...userStack
}

console.log(user);

$(".block").text("jQuery is working!");