var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal-header i')
var iconClose = document.querySelector('.modal-footer button')

function toggleeModal(e) {
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleeModal)
btnClose.addEventListener('click', toggleeModal)
iconClose.addEventListener('click', toggleeModal)
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget) {
        toggleeModal()
    }
})