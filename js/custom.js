$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7938379220',
        limit: 4,
        resolution: 'standard_resolution',
        accessToken: '7938379220.1677ed0.143c8b87b9804c5f95e220c0112c5bb2',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});