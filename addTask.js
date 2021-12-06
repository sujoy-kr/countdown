const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', () => {
  const list = document.getElementById('allTasks');
  var taskName = document.getElementById('taskName').value;
  var dueDate = document.getElementById('dueDate').value;
  var dueMonth = document.getElementById('dueMonth').value;
  var DueYear = document.getElementById('dueYear').value;
  if (taskName && dueDate) {
    //////////////////////////
    var countDownDate = new Date(
      dueMonth + ' ' + dueDate + ', ' + DueYear
    ).getTime();

    var entry = document.createElement('li');
    list.appendChild(entry);

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      entry.innerHTML =
        days +
        'd ' +
        hours +
        'h ' +
        minutes +
        'm ' +
        seconds +
        's ' +
        '--> ' +
        taskName;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        entry.innerHTML = 'EXPIRED --> ' + taskName;
      }
    }, 1000);
    ////////////////////
  }
});

const deleteTaskBtn = document.getElementById('deleteTaskBtn');
deleteTaskBtn.addEventListener('click', () => {
  var taskToDelete = document.getElementById('taskToDelete').value;
  console.log('deleted');
  if (taskToDelete) {
    document.querySelectorAll('li')[taskToDelete - 1].remove();
  }
});
