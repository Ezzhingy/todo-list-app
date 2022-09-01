export function formDate () {
    const dates = document.querySelectorAll('#due-date');

    const currentdate = new Date(); 

    let month = (currentdate.getMonth()+1).toString();
    if (month.length === 1) {
        month = '0' + month;
    }

    const datetime = currentdate.getFullYear() + "-"
                     + month + "-"
                     + currentdate.getDate();
    
    dates.forEach(date => {
        date.value = datetime;
    });
}