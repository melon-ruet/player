/**
 * Created by Rubayet on 12-Dec-16.
 */

//Set Table img column width

$('.rbt-table img').each(function () {
    $(this).first().parent('td').css('width', '80px');
});


//Display every table cell header name before the cell text. Will be used in mobile-only(Under Development)
// $('.rbt-table td').each(function(){
//  var $th = $(this).closest('table').find('th').eq($(this).index()).text();
//  $(this).prepend($th + '');
// });

// Get and Place uploaded file name

$('.file-upload>input[type=file]').change(function () {
    var filename = $(this).val().split('\\').pop();

    // If user press cancel when upload a file the file name will remain to the previous filename
    if(!filename == ''){
        $('.file-name').text(filename);
    }
});

// Remove dotted area
$('.dot-area-hide').on('click', function(){
	$(this).parents('.dot-area').remove();
});


//Remove Search Option from Select2
function removeSelect2Search(snselector) {
    snselector.select2({
        minimumResultsForSearch: -1
    });
}

//Replace any label text.
//** label must has a for with an id
function changeLabelText(labelofid, changedText) {
    jQuery(function($) {
        $(labelofid).text(changedText);
    });
}

//Hidden tab map regenarate fix
$('a').on('shown.bs.tab', function (e) {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
});

//Place '-' when item doesn't has any value!
// It will only work on tables which has 'details-table' class
function placeEmptyPlaceholder() {
    $('.details-table td').each(function () {
        if ($(this).text() == '' || $(this).text() == null || $(this).text() == 'None' || $(this).text() == 'none') {
            $(this).text('-');
        }
    });
}
