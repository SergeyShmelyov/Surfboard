
const form = document.querySelector('.form');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal__content');
const body = document.querySelector('.body');


const validateField = (field) =>{
  if(!field.value.trim().length) {
    field.classList.add('input-error')
    return false
  } else{
    field.classList.remove('input-error')
    return true
  }
};

const validateForm = (data) => {
  let isValid = true
  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)){
      const element = data[key];
      const valid = validateField(element)
      if (!valid){
        isValid = false
      }
    }
  }
  return isValid;

}

form.addEventListener('submit', function(e) {
  e.preventDefault()
    const data = {
    name: form.elements.name,
    phone: form.elements.phone,
    comment: form.elements.comment,
  }

  console.log(modal)

  
    if (validateForm (data)) {

    console.log('отправляем запрос')
    modalContent.innerHTML='Сообщение отправлено'

    modal.classList.add('modal__visible')
    body.classList.add('body__closed')
  } else {

    modalContent.innerHTML='Сообщение не отправлено заполните поля'
    modal.classList.add('modal__visible')
    
    console.log('не отправляем запрос, ждем , когда пользователь заполнит форму')
  }

})

document.querySelector('.app-submit-btn').addEventListener('click', e =>{
    modalContent.innerHTML=''
    modal.classList.remove('modal__visible')
    body.classList.remove('body__closed')
    
    
})


















/*const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach((field) => {
      field.removeClass("input-error");
      if (field.val().trim() === "") {
        field.addClass("input-error");
      }
    });
  
    const errorFields = form.find(".input-error");
  
    return errorFields.length === 0;
  };

$('.form').submit((e)=>{
    e.preventDefault();

const form = $(e.currentTarget);

const name = form.find("[name='name']");
const phone = form.find("[name='phone']");
const comment = form.find("[name='comment']");
const to = form.find("[name='to']");
const modal = $("#modal");
const content = modal.find(".modal__content");
modal.removeClass("error-modal");

const isValid = validateFields(form, [name, phone, comment, to]);

if (isValid) {
    const request = $.ajax({
        url:"https://webdev-api.loftschool.com/sendmail",
        metod:"post",
        data:{
            name: name.val(),
            phone: phone.val(),
            comment: comment.val(),
            to: to.val(),
        },

        error: (data) => {},
        
    });

    request.done((data) => {
        content.text(data.message);
      });
  
      request.fail((data) => {
        const message = ("Отправить письмо не удалось");
        content.text(message);
        modal.addClass("error-modal");
        console.log(data);
      });
  
      request.always(() => {
        $.fancybox.open({
          src: "#modal",
          type: "inline",
        });
});
}
});

$(".app-submit-btn").click((e) => {
    e.preventDefault();





    $.fancybox.close();
});*/