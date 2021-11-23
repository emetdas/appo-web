let accrodion_item = document.querySelectorAll('.accrodion-item');
let accrodion_heading = document.querySelectorAll('.accrodion-heading');
let accrodion_content = document.querySelectorAll('.accrodion-content');

accrodion_item.forEach((item) => {
  item.addEventListener('click', (e) => {
    let accrodion_clicked = e.target.closest('.accrodion-heading');
    if (!accrodion_clicked) {
      return;
    }
    let clicked_item = accrodion_clicked.getAttribute('data-accrodion');
    accrodion_content.forEach((content) => {
      let find = content.getAttribute('data-accrodion');
      if (find === clicked_item) {
        content.style.height = content.scrollHeight + 'px';
        content.classList.add('active');
        content.parentElement.classList.add('active');
      } else {
        content.style.height = 0;
        content.classList.remove('active');
        content.parentElement.classList.remove('active');
      }
    });
  });
});
