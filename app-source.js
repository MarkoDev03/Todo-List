$(document).ready(function() {
    var items = []
    var done = []
   
 
 if (JSON.parse(localStorage.getItem("todos")) === null) {
    items = []
    done = []
    localStorage.setItem("done",JSON.stringify(done))
    localStorage.setItem("todos",JSON.stringify(items))
 } else {
    localStorage.setItem("todos",JSON.stringify(JSON.parse(localStorage.getItem("todos"))))
 }
    $.fn.addItem = (stuff) => {
        $('#list').html('')
        $.each(stuff,(key, value) => {
            $('#list').append(`<div class="mt-2 w-100 d-flex justify-content-evenly  align-items-center border-secondary rounded p-1" id="${value.id}"><span class="text-dark p-1 rounded d-block bg-light" style="font-size:20px;width:80%;margin-right:20px">${value.text}</span><div class=" d-flex justify-content-around align-items-center" style="width:18%"><button class="btn btn-success" onclick="$.fn.done('${value.id}')" id="${value.id}btn">✓</button><button class="btn btn-danger m-2" onclick="$.fn.remove('${value.text}')" style="font-size:18x">X</button></div></div>`)
        })
    }

    $.fn.doneItems = () => {
        let doneItems = JSON.parse(localStorage.getItem("done"))
        $.each(doneItems,(key, value) => {
            $('#' + value.id).addClass('bg-success')
            $('#' + value.id + "btn").hide()
        })   
    }
    
    window.addEventListener('load',() => {
        $.fn.addItem(JSON.parse(localStorage.getItem("todos")))
        items = JSON.parse(localStorage.getItem("todos"))
        $.fn.doneItems()

      
        
    })

    $('#add').click(() => {
        var term = $('#item').val().length > 0 ? true : false;
        var id = Math.floor(Math.random() * 100)
        if (term) {
            items.push({text:$('#item').val(),id:id})
            $.fn.addItem(items)
            $('#item').val('')
        }
        $.fn.doneItems()
        localStorage.setItem("todos",JSON.stringify(items))
    }) 

    $.fn.remove = (id) => {
        items = items.filter(item => {
            return item.text !== id
        })
        $.fn.addItem(items)
        $.fn.doneItems()
        localStorage.setItem("todos",JSON.stringify(items))
    }
    
    $.fn.done = (id) => {
         $('#' + id).addClass('bg-success')
         $('#' + id + "btn").hide()
         
         done.push({id:id})
         localStorage.setItem("done",JSON.stringify(done))
    }

    $('#clear').click(() => {
        items = []
        $.fn.addItem(items)
       
        done = []
        localStorage.setItem("done",JSON.stringify(done))
        localStorage.setItem("todos",JSON.stringify(items))
    })

   
        if ($(document).width() < 900 && $(document).width() > 500) {
            $('#item-w').addClass('w-75')
            $('#clear').addClass('w-75')
            $('#list').addClass('w-75')
        }
         if ($(document).width() < 500 && $(document).width() < 900) {
            $('#item-w').addClass('w-my')
            $('#clear').addClass('w-my')
            $('#list').addClass('w-my')
            $('#item-w').removeClass('w-25')
            $('#clear').removeClass('w-25')
            $('#list').removeClass('w-25')
         }
 
})