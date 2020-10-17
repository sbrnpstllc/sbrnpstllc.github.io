---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
---

<div>
    <div class="loading-container">
        <div class="pulse"></div>
    </div>

    <div id="slides">
      <ul class="slides-container">
      </ul>
    </div>

    <h2 class="text-center">Présentation</h2>

    <div id="presentation" class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
              <img src="{{ site.baseurl }}/assets/images/profil.jpg" class="img-responsive img-rounded" />
            </div>
            <div class="col-md-5">
                <p>
                  Située à Nouvoitou au Sud de Rennes, je suis photographe autoentrepreneur.
                  Sensible à tout ce que la vie a à nous offrir et à ses moindres moments d'émotion,
                  j'accorde une importance toute particulière à capturer ces instants qui composent notre vie afin d'en garder une trace indélébile.
                </p>
                <p>
                  Depuis ma plus tendre adolescence, je suis passionnée par la photographie et c'est en autodidacte que je poursuis mon apprentissage.
                  Un regard, un sourire, une étreinte, un moment de la vie quotidienne ou le moment de votre vie;
                  mon reflex et moi vous laissons un souvenir éclatant au fil du temps.
                </p>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>

    <h2 class="text-center">Prestations</h2>

    <div id="prestations" class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div>
              <a href="#" id="presta-mariages">
                <img src="{{ site.baseurl }}/assets/images/mariage.jpg" class="img-responsive img-circle" />
                <div class="caption text-center">
                  <h3>Mariage</h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div>
              <a href="#" id="presta-grossesse">
                <img src="{{ site.baseurl }}/assets/images/grossesse.jpg" class="img-responsive img-circle" />
                <div class="caption text-center">
                  <h3>Grossesse</h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div>
              <a href="#" id="presta-naissances">
                <img src="{{ site.baseurl }}/assets/images/naissance.jpg" class="img-responsive img-circle" />
                <div class="caption text-center">
                  <h3>Naissance</h3>
                </div>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div>
              <a href="#" id="presta-famille">
                <img src="{{ site.baseurl }}/assets/images/tlj.jpg" class="img-responsive img-circle" />
                <div class="caption text-center">
                  <h3>Famille</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    <h2 class="text-center">Tarifs</h2>

    <div id="tarifs" class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <h3>A venir ...</h3>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>

    <h2 class="text-center">Livre d'or</h2>

    <div id="guestbook" class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <script type="text/javascript" src="https://cdn1.mariages.net/js/wp-widget.js"></script>
              <div id="wp-widget-reviews">
                  <div id="wp-widget-preview">
                      Lire  <a href="https://www.mariages.net/photo-mariage/a-chaque-instant-son-image--e142627/avis">nos avis</a> à &nbsp;
                      <a href='https://www.mariages.net'>
                          <img src="https://cdn1.mariages.net/assets/img/logos/gen_logoHeader.svg" height="20">
                      </a>
                  </div>
              </div>
              <script>wpShowReviews(142627, "white");</script>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>


    <h2 class="text-center">Contactez-moi</h2>

    <div id="contact" class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">

              <div id="wufoo-m1rtquz04r4rcl">
              </div>
              <div id="wuf-adv" style="font-family:inherit;font-size: small;color:#a7a7a7;text-align:center;display:none;">
                  The easy to use <a href="http://www.wufoo.com/form-builder/">Wufoo form builder</a> helps you make forms easy, fast, and fun.
              </div>
              <script type="text/javascript">
                  var m1rtquz04r4rcl;
                  (function(d, t) {
                      var s = d.createElement(t), options = {
                          'userName':'dgeon',
                          'formHash':'m1rtquz04r4rcl',
                          'autoResize':true,
                          'height':'495',
                          'async':true,
                          'host':'wufoo.com',
                          'header':'hide',
                          'ssl':true
                      };
                      s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
                      s.onload = s.onreadystatechange = function() {
                          var rs = this.readyState;
                          if (rs) if (rs != 'complete') if (rs != 'loaded') return;
                          try {
                            m1rtquz04r4rcl = new WufooForm();
                            m1rtquz04r4rcl.initialize(options);
                            m1rtquz04r4rcl.display();
                          }
                          catch (e) {}};
                      var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
                    })(document, 'script');
                  </script>

            </div>
      </div>
  </div>

</div>
