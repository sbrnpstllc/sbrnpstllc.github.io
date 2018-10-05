
/** On document DOM loaded **/
$( document ).ready(function() {

    $(document).on('init.slides', function() {
        $('.loading-container').fadeOut(function() {
          $(this).remove();
        });
    });

    // Randomly load images
    var imgContainer = $('#slides .slides-container').first();
    var nbImages = 29;
    var images = Array(nbImages);
    for(var i=0 ; i<nbImages ; i++) {
      images[i] = i;
    }
    for(var i=0 ; i<100 ; i++) {
      var newIndex = Math.floor((Math.random() * nbImages));
      var oldIndex = Math.floor((Math.random() * nbImages));
      var oldValue = images[newIndex];
      images[newIndex] = images[oldIndex];
      images[oldIndex] = oldValue;
    }
    for(i=0 ; i<nbImages ; i++) {
      imgContainer.append('<img src="/assets/images/diapo/'+(images[i]+1)+'.jpg" />');
    }

    /* Home slides */
    $('#slides').superslides({
        play: 6000,
        pagination: false,
        animation: 'slide'
    });

    /* Specific galleries */
    var mariagesDir   = '/assets/images/prestations/mariage/';
    var naissancesDir = '/assets/images/prestations/naissance/';
    var familleDir    = '/assets/images/prestations/famille/';
    var grossesseDir  = '/assets/images/prestations/grossesse/';

    var nbImgMariages = 206;
    var itemsMariages = Array(nbImgMariages);

    var nbImgNaissances = 64;
    var itemsNaissances = Array(nbImgNaissances);

    var nbImgFamille = 95;
    var itemsFamille = Array(nbImgFamille);

    var nbImgGrossesse = 18;
    var itemsGrossesse = Array(nbImgGrossesse);

    for(var i=0 ; i<nbImgMariages ; i++) {
      itemsMariages[i] = mariagesDir+(i+1)+'.jpg';
    }

    for(var i=0 ; i<nbImgNaissances ; i++) {
      itemsNaissances[i] = naissancesDir+(i+1)+'.jpg';
    }

    for(var i=0 ; i<nbImgFamille ; i++) {
      itemsFamille[i] = familleDir+(i+1)+'.jpg';
    }

    for(var i=0 ; i<nbImgGrossesse ; i++) {
      itemsGrossesse[i] = grossesseDir+(i+1)+'.jpg';
    }

    $('#presta-mariages').click(function() {
      SimpleLightbox.open({
        items: itemsMariages
      });

      return false;
    });

    $('#presta-naissances').click(function() {
      SimpleLightbox.open({
        items: itemsNaissances
      });

      return false;
    });

    $('#presta-grossesse').click(function() {
      SimpleLightbox.open({
        items: itemsGrossesse
      });

      return false;
    });

    $('#presta-famille').click(function() {
      SimpleLightbox.open({
        items: itemsFamille
      });

      return false;
    });

    /* Anchor initializing */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 139
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Contact form */
    $('#send-contact').on('click', function(e) {
      var ret = true;
      var email = $("#email");
      var message = $("#message");
      if(email.val().trim() == '') {
        email.css('background-color', '#D3B0AD');
        ret = false;
      }
      else {
        email.css('background-color', '#FFF');
      }
      if(message.val().trim() == '') {
        message.css('background-color', '#D3B0AD');
        ret = false;
      }
      else {
        message.css('background-color', '#FFF');
      }

      return ret;
    });

});
