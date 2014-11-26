angular.module('ingr-web').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('partial/annonsering/annonsering.html',
    "<div ng-controller=\"AnnonseringCtrl\">\n" +
    "\n" +
    "  <div ng-controller=\"HeaderCtrl\" ng-include src=\"'partial/header/header.html'\"></div>\n" +
    "\n" +
    "  <blockquote>\n" +
    "    <h1>Annonsering</h1>\n" +
    "    <p>Hej!</p>\n" +
    "    <p>Vad kul att du vill annonsera på Instagrannar. Just nu när vi håller på att lansera siten ber vi dig att maila oss för att få veta mer om hur du kan annonsera här.</p>\n" +
    "    <p>Du når oss på <a href=\"mailto:hej@instagrannar.se\">hej@instagrannar.se</a></p>\n" +
    "  </blockquote>\n" +
    "  \n" +
    "  <div ng-controller=\"FooterCtrl\" ng-include src=\"'partial/footer/footer.html'\"></div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('partial/footer/footer.html',
    "  <footer class=\"content-info\" role=\"contentinfo\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-sm-3\">\n" +
    "          <div class=\"copyright\">Instagrannar<br/>\n" +
    "            Copyright &copy;2014\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <section class=\"widget col-sm-3 text-2 widget_text\">\n" +
    "          <h3 class=\"widget-title\">Kontakt</h3>\n" +
    "\n" +
    "          <div class=\"textwidget\">\n" +
    "            <a href=\"mailto:hej@instagrannar.se\">hej@instagrannar.se</a>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"widget col-sm-3 text-2 widget_text\">\n" +
    "          <h3 class=\"widget-title\">&nbsp;</h3>\n" +
    "\n" +
    "          <div class=\"textwidget\">\n" +
    "            <a href=\"/#/annonsering\">Annonsering</a>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "\n" +
    "        <section class=\"widget col-sm-3 text-2 widget_text\">\n" +
    "          <h3 class=\"widget-title\">&nbsp;</h3>\n" +
    "\n" +
    "          <div class=\"textwidget\">\n" +
    "            <a href=\"/#/legal\">Juridisk info</a>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </footer>\n"
  );


  $templateCache.put('partial/header/header.html',
    "<div ng-controller=\"HeaderCtrl\">\n" +
    "\n" +
    "  <header class=\"banner\" role=\"banner\">\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "          <div class=\"site-title\">\n" +
    "            <a class=\"brand\" href=\"http://www.instagrannar.se/\">Instagrannar</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "  </header>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('partial/legal/legal.html',
    "<div ng-controller=\"LegalCtrl\">\n" +
    "\n" +
    "  <div ng-controller=\"HeaderCtrl\" ng-include src=\"'partial/header/header.html'\"></div>\n" +
    "\n" +
    "  <blockquote>\n" +
    "    <h1>Juridisk info</h1>\n" +
    "    <p>\n" +
    "      Frånsägande av ansvar för garantier; Ansvarsbegränsning. Genom åtkomst till denna webbplats samtycker du till användning av den på egen risk. Webbplatsen kan innehålla tekniska fel eller felstavningar. Instagrannar garanterar inte riktighet av informationen eller framställningarna som uppträder på webbplatsen.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Denna webbplats tillhandahålls av Instagrannar enligt principerna ”I nuvarande skick” och ”i befintligt utförande”. Instagrannar gör inga framställningar eller garantier av något slag, uttryckligen eller antydda, beträffande drift av webbplatsen, informationen, innehållet, materialet eller produkterna som inkluderas på denna webbplats. I den utsträckning som tillåts av tillämplig lag frånsäger sig Instagrannar alla garantier, uttryckta eller antydda, utan begränsning inklusive antydda garantier för säljbarhet, lämplighet för särskilt syfte samt icke-intrång. Instagrannar kommer inte att vara ansvarig för skador av något slag som uppkommer till följd av användning av webbplatsen inklusive, utan begränsning, direkta, indirekta, oförutsedda, bestraffande som följskador. Inga muntliga råd eller skriven information som ges av Instagrannar kommer att skapa en garanti. Du ska inte heller förlita dig till liknande information eller råd.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Det kan finnas länkar på webbplatsen som låter dig lämna webbplatsen och besöka andra webbplatser. Följaktligen är inte och kan inte Instagrannar hållas ansvarig för innehåll, tjänster, bilder, grafik, produkter eller framställningar på länkade webbplatser. Instagrannar garanterar inte och har inte möjlighet att garantera, representera eller rättfärdiga att innehållet på dessa länkade webbplatser är korrekt, lagligt, ej stötande eller att dessa webbplatser inte innehåller virus eller på annat sätt kan komma att skada din dator. Instagrannar tillhandahåller länkar till dessa webbplatser endast som en tjänst för dig. Instagrannar inkluderande av specifika länkar antyder inte att Instagrannar sponsrar, är anslutna till eller godkänner den länkade webbplatsen.\n" +
    "    </p>\n" +
    "\n" +
    "    <p>\n" +
    "      Det kan finnas innehåll på webbplatsen som hämtas och/eller har sitt ursprung från andra webbplatser. Instagrannar tar ej något ansvar för detta ånnehåll, varken tjänster, bilder, grafik, produkter eller andra framställningar. Instagrannar garanterar inte och har inte möjlighet att garantera, representera eller rättfärdiga att innehållet som hämtas och/eller har sitt ursprung från andra webbplatser är korrekt, lagligt, ej stötande eller att detta innehåll inte innehåller virus eller på andra sätt kan komma att skada din dator. Instagrannar tillhandahåller innehåll som hämtas och/eller har sitt ursprung från andra webbplatser, men detta antyder ej att Instagrannar sponsrar eller är sponsrade av dessa andra webbplatser.\n" +
    "    </p>\n" +
    "\n" +
    "  </blockquote>\n" +
    "  \n" +
    "  <div ng-controller=\"FooterCtrl\" ng-include src=\"'partial/footer/footer.html'\"></div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('partial/map/map.html',
    "<div ng-controller=\"MapCtrl\">\n" +
    "\n" +
    "  <header class=\"banner\" role=\"banner\">\n" +
    "\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-lg-12\">\n" +
    "          <div class=\"site-title\">\n" +
    "            <a class=\"brand\" href=\"http://www.instagrannar.se/\">Instagrannar</a>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <google-map center=\"map.center\" draggable=\"true\" zoom=\"map.zoom\" options=\"map.options\" events=\"map.events\">\n" +
    "      <!--<script type=\"text/ng-template\" id=\"control.tpl.html\">\n" +
    "        <span class=\"picture-loader\">\n" +
    "          <button data-ng-click=\"load(map.zoom)\" ng-disabled=\"buttonDisabled\">{{localizedContent.read('getPictures')}}</button>\n" +
    "        </span>\n" +
    "      </script>-->\n" +
    "      <!--<map-control template='control.tpl.html' position=\"bottom-center\" controller=\"PictureLoaderCtrl\"></map-control>-->\n" +
    "      <!--<circle center=\"map.center\" radius=\"zoom.radius(viewport.zoomLevel)\" visible=\"true\" stroke=\"map.circleStroke\"> </circle>-->\n" +
    "    </google-map>\n" +
    "\n" +
    "  </header>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('partial/photoGrid/photoGrid.html',
    "<login-modal></login-modal>\n" +
    "\n" +
    "<div ng-controller=\"MapCtrl\" ng-include src=\"'partial/map/map.html'\"></div>\n" +
    "\n" +
    "<div class=\"wrap\" role=\"document\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"content\">\n" +
    "      \n" +
    "      <main class=\"main\" role=\"main\">\n" +
    "\n" +
    "        <google-places location=location></google-places>\n" +
    "        \n" +
    "        <blockquote data-ng-hide=\"!!grams.data || error\">\n" +
    "          <p>\n" +
    "            {{localizedContent.read('introParagraph')}}\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "\n" +
    "        <blockquote data-ng-show=\"error\">\n" +
    "          <p class=\"error\">\n" +
    "            {{localizedContent.read('generalErrorIntro')}}<br/>\n" +
    "            <strong>{{localizedContent.read('description')}}:</strong> {{errorDescription}}\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "\n" +
    "        <blockquote data-ng-show=\"!!grams.data && grams.data.length === 0\">\n" +
    "          <p>\n" +
    "            {{localizedContent.read('noPicturesFound')}}\n" +
    "          </p>\n" +
    "        </blockquote>\n" +
    "\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"isotope\" style=\"position: relative;\">\n" +
    "            <div ng-repeat=\"gram in grams.data\">\n" +
    "              <photo instagram=\"gram\"></photo>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        \n" +
    "      </main>\n" +
    "\n" +
    "      <div class=\"overlay\"></div>\n" +
    "      <div ng-controller=\"SideBarCtrl\" ng-include src=\"'partial/sideBar/sideBar.html'\"></div>\n" +
    "      \n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-controller=\"FooterCtrl\" ng-include src=\"'partial/footer/footer.html'\"></div>"
  );


  $templateCache.put('partial/photoView/photoView.html',
    "<div ng-controller=\"HeaderCtrl\" ng-include src=\"'partial/header/header.html'\"></div>\n" +
    "\n" +
    "<div class=\"wrap\" role=\"document\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"content\">\n" +
    "      \n" +
    "      <main class=\"main photo-view\" role=\"main\">\n" +
    "\n" +
    "        <div>\n" +
    "          <h3>\n" +
    "            Postad av <a target=\"_blank\" href=\"http://instagram.com/{{instagram.user.username}}\">@{{instagram.user.username}}</a>  {{t(instagram.created_time)}}\n" +
    "          </h3>\n" +
    "          <div class=\"instag-image\">\n" +
    "            <a href=\"{{instagram.link}}\" data-ng-show=\"instagram.id === 'ad'\">\n" +
    "              <img data-ng-src=\"{{instagram.images.standard_resolution.url}}\" alt=\"{{instagram.caption.text}}\" width=\"640\" height=\"640\"/>\n" +
    "            </a>\n" +
    "            <a target=\"_blank\" href=\"{{instagram.link}}\" data-ng-hide=\"instagram.id === 'ad'\">\n" +
    "              <img data-ng-src=\"{{instagram.images.standard_resolution.url}}\" alt=\"{{instagram.caption.text}}\" width=\"640\" height=\"640\"/>\n" +
    "            </a>\n" +
    "          </div>\n" +
    "          <p>\n" +
    "            {{instagram.caption.text}}\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        \n" +
    "      </main>\n" +
    "\n" +
    "      <div class=\"overlay\"></div>\n" +
    "      <div ng-controller=\"SideBarCtrl\" ng-include src=\"'partial/sideBar/sideBar.html'\"></div>\n" +
    "      \n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-controller=\"FooterCtrl\" ng-include src=\"'partial/footer/footer.html'\"></div>"
  );


  $templateCache.put('partial/pictureLoader/pictureLoader.html',
    ""
  );


  $templateCache.put('partial/sideBar/sideBar.html',
    "<!--\n" +
    "<a href=\"#\" class=\"toggle-sidebar\"><i class=\"fa fa-bars\"></i><i class=\"fa fa-close\"></i></a>\n" +
    "\n" +
    "<aside class=\"sidebar\" role=\"complementary\">\n" +
    "  \n" +
    "  <section class=\"widget nav_menu-2 widget_nav_menu\">\n" +
    "    <ul id=\"menu-main-navigation\" class=\"menu\">\n" +
    "      <li class=\"active menu-home\"><a href=\"/zolio/\">Home</a></li>\n" +
    "      <li class=\"menu-sample-page\"><a href=\"/zolio/?page_id=2\">Sample Page</a></li>\n" +
    "      <li class=\"menu-post-layout-1\"><a href=\"/zolio/?p=49\">Post Layout #1</a></li>\n" +
    "      <li class=\"menu-post-layout-2\"><a href=\"/zolio/?p=46\">Post Layout #2</a></li>\n" +
    "      <li class=\"menu-post-layout-3\"><a href=\"/zolio/?p=43\">Post Layout #3</a></li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"widget recent-posts-2 widget_recent_entries\">\n" +
    "    <h3 class=\"widget-title\">Recent Posts</h3>\n" +
    "    <ul>\n" +
    "      <li>\n" +
    "        <a href=\"/zolio/?p=49\">Holy Spilit</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/zolio/?p=46\">iGravertical Screen Layers</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/zolio/?p=43\">Flat Icons Brownie Theme</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/zolio/?p=40\">Sigature UI Design</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/zolio/?p=37\">Suggestive Logo</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"widget recent-comments-2 widget_recent_comments\">\n" +
    "    <h3 class=\"widget-title\">Recent Comments</h3>\n" +
    "    <ul id=\"recentcomments\">\n" +
    "      <li class=\"recentcomments\">admin on <a href=\"/zolio/?p=11#comment-15\">Setting UI</a></li>\n" +
    "      <li class=\"recentcomments\">admin on <a href=\"/zolio/?p=24#comment-14\">Simple ikons set</a></li>\n" +
    "      <li class=\"recentcomments\">admin on <a href=\"/zolio/?p=28#comment-13\">Downloading Button</a></li>\n" +
    "      <li class=\"recentcomments\">admin on <a href=\"/zolio/?p=37#comment-12\">Suggestive Logo</a></li>\n" +
    "      <li class=\"recentcomments\">admin on <a href=\"/zolio/?p=40#comment-11\">Sigature UI Design</a></li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"widget archives-2 widget_archive\">\n" +
    "    <h3 class=\"widget-title\">Archives</h3>\n" +
    "      <ul>\n" +
    "        <li><a href=\"/zolio/?m=201402\">February 2014</a></li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"widget categories-2 widget_categories\">\n" +
    "    <h3 class=\"widget-title\">Categories</h3>\n" +
    "    <ul>\n" +
    "      <li class=\"cat-item cat-item-1\"><a href=\"/zolio/?cat=1\" title=\"View all posts filed under Graphic\">Graphic</a></li>\n" +
    "      <li class=\"cat-item cat-item-6\"><a href=\"/zolio/?cat=6\" title=\"View all posts filed under Illustration\">Illustration</a></li>\n" +
    "      <li class=\"cat-item cat-item-7\"><a href=\"/zolio/?cat=7\" title=\"View all posts filed under Motion\">Motion</a></li>\n" +
    "      <li class=\"cat-item cat-item-4\"><a href=\"/zolio/?cat=4\" title=\"View all posts filed under Photography\">Photography</a></li>\n" +
    "      <li class=\"cat-item cat-item-5\"><a href=\"/zolio/?cat=5\" title=\"View all posts filed under Typography\">Typography</a></li>\n" +
    "      <li class=\"cat-item cat-item-3\"><a href=\"/zolio/?cat=3\" title=\"View all posts filed under Website\">Website</a></li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "  <section class=\"widget meta-2 widget_meta\">\n" +
    "    <h3 class=\"widget-title\">Meta</h3>\n" +
    "    <ul>\n" +
    "      <li><a href=\"http://demo.zingtheme.com/zolio/wp-login.php\">Log in</a></li>\n" +
    "      <li><a href=\"/zolio/?feed=rss2\" title=\"Syndicate this site using RSS 2.0\">Entries <abbr title=\"Really Simple Syndication\">RSS</abbr></a></li>\n" +
    "      <li><a href=\"/zolio/?feed=comments-rss2\" title=\"The latest comments to all posts in RSS\">Comments <abbr title=\"Really Simple Syndication\">RSS</abbr></a></li>\n" +
    "      <li><a href=\"http://wordpress.org/\" title=\"Powered by WordPress, state-of-the-art semantic personal publishing platform.\">WordPress.org</a></li>\n" +
    "    </ul>\n" +
    "  </section>\n" +
    "\n" +
    "</aside>\n" +
    "\n" +
    "-->"
  );


  $templateCache.put('directive/googlePlaces/googlePlaces.html',
    "<div id=\"google_places_search\" class=\"span8\">\n" +
    "  <input id=\"google_places_ac\" name=\"google_places_ac\" type=\"text\" class=\"input-block-level\" placeholder=\"Sök på plats\" autocomplete=\"off\" value=\"{{lastSearch}}\"/>\n" +
    "<div>"
  );


  $templateCache.put('directive/loginModal/loginModal.html',
    "<div class=\"login-modal-overlay\" data-ng-hide=\"hasAuthToken\">\n" +
    "  <div class=\"login-modal\">\n" +
    "    <h3>Välkommen</h3>\n" +
    "    <p class=\"welcome\">\n" +
    "      För att din upplevelse ska bli så bra som möjligt rekommenderar vi att du loggar in med ditt Instagram-konto här.\n" +
    "    </p>\n" +
    "    <span>\n" +
    "      <button data-ng-click=\"doInstagramLogin()\">Logga in</button>\n" +
    "    </span>\n" +
    "    <span class=\"pull-right continue\">\n" +
    "      <a data-ng-click=\"doNoLogin()\">Fortsätt utan att logga in</a>\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('directive/photo/photo.html',
    "<article class=\"post type-post status-publish format-standard hentry category-graphic category-motion category-photography category-typography isotope-item col-xs-12 col-sm-4 col-md-3\">\n" +
    "  <div class=\"entry-inner\">\n" +
    "    <div class=\"entry-thumbnail\">\n" +
    "      <a href=\"#\">\n" +
    "        <img width=\"570\" height=\"570\" data-ng-src=\"{{instagram.images.standard_resolution.url}}\" class=\"attachment-full wp-post-image\" alt=\"{{instagram.caption.text}}\" />\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <header class=\"entry-header\">\n" +
    "      <h2 class=\"entry-title\">\n" +
    "        <a data-ng-href=\"#/image/{{instagram.id}}\">\n" +
    "          by @{{instagram.user.username}}\n" +
    "        </a>\n" +
    "      </h2>\n" +
    "    </header>\n" +
    "  </div>\n" +
    "</article>\n"
  );

}]);
