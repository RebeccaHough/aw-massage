$('.toggleable.sidebar')
.sidebar('attach events', '.toggle.item')
.sidebar('setting', {
    transition: 'overlay',
    dimPage: false
});
$('#treatments .image').dimmer({
    on: 'hover'
});
$('.ui.dropdown').dropdown({
    on: 'hover'
});

/*if($('.ui.dropdown').getAttribute('data-value') == 'undefined') {

} else {
    //go to treatments.html#this.data()
}*/