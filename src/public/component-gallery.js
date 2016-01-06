$(function(){
    function pageLoad() {
        $('#grid').magnificPopup({
            delegate: 'ul > a', // child items selector, by clicking on it popup will open
            type: 'video',
            gallery: {
                enabled: true
            }
        });
    }

    pageLoad();

    PjaxApp.onPageLoad(pageLoad);
});
