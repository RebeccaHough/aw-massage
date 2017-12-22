$('.toggleable.sidebar')
.sidebar('attach events', '.toggle.item')
.sidebar('setting', {
    transition: 'overlay',
    dimPage: false
});
$('#cards .image').dimmer({
    on: 'hover'
});
$('#treatments .image').dimmer({
    on: 'hover'
});