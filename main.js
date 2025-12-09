var note_area = document.querySelector('.notearea');

note_area.addEventListener('input', (e) => {
    var note_area_value = note_area.value;

    localStorage.setItem('note', note_area_value);
    
});

var get_note = localStorage.getItem('note');
note_area.value = get_note;

//-------------------- Date Time -----------------------//
// var weekday = ["Воскресение","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];

// const addZero = (i) => {
//     if (i < 10) {i = "0" + i}
//     return i;
// };
// setInterval(() => {
//     const date = new Date();
//     const day = weekday[date.getDay()];
//     const dayMonth = date.getDate();
//     const hour = addZero(date.getHours());
//     const minuts = addZero(date.getMinutes());
//     const seconds = addZero(date.getSeconds())

//     const dateTime = day + ' ' + dayMonth + ', ' + hour + ':' + minuts;
    
//     document.querySelector('.note_block-top-time').innerHTML = dateTime;
// }, 1000);



//------------------------------------------------//




