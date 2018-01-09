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