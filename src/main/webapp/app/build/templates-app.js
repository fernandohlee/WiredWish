angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'partials/nav.tpl.html', 'wishes/newWish.tpl.html', 'wishes/wishes.tpl.html', 'wishlists/newWishlist.tpl.html', 'wishlists/wishlists.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"navbar navbar-default\">\n" +
    "		<div class=\"navbar-header\">\n" +
    "			<div class=\"navbar-brand\">\n" +
    "				Wired Wish <small> your wishes made social </small>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"container\">\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"span12\">\n" +
    "			<div class=\"\" id=\"loginModal\">\n" +
    "				<div class=\"modal-header\">\n" +
    "					<h3>Have an Account?</h3>\n" +
    "				</div>\n" +
    "				<div class=\"modal-body\">\n" +
    "					<div class=\"well\">\n" +
    "						<div>\n" +
    "							<tabset> <tab heading=\"Login\">\n" +
    "							<div class=\"container\">\n" +
    "								<div>\n" +
    "									<div ng-controller=\"LoginCtrl\">\n" +
    "										<h1 class=\"text-center login-title\">Sign in to continue\n" +
    "											to Wired Wish</h1>\n" +
    "										<form class=\"form-signin\" ng-submit=\"login()\">\n" +
    "											<input  type=\"text\" ng-model=\"account.userName\"\n" +
    "												class=\"form-control\" placeholder=\"User name\"\n" +
    "												autofocus required> \n" +
    "											<input  type=\"password\" ng-model=\"account.password\"\n" +
    "												class=\"form-control\" placeholder=\"Password\" required>\n" +
    "											<button class=\"btn btn-lg btn-primary btn-block\"\n" +
    "												type=\"submit\">Log in</button>\n" +
    "										</form>											\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							</tab> <tab heading=\"Register\">\n" +
    "							<div class=\"container\">\n" +
    "								<div>\n" +
    "									<div ng-controller=\"RegisterCtrl\">\n" +
    "										<h1 class=\"text-center login-title\">Register new account\n" +
    "											to Wired Wish</h1>\n" +
    "										<form class=\"form-signin\" ng-submit=\"register()\">\n" +
    "											<input  type=\"text\" ng-model=\"account.userName\"\n" +
    "												class=\"form-control\" placeholder=\"New user name\"\n" +
    "												autofocus required> \n" +
    "											<input  type=\"password\" ng-model=\"account.password\"\n" +
    "												class=\"form-control\" placeholder=\"Password\" required>\n" +
    "											<button class=\"btn btn-lg btn-primary btn-block\"\n" +
    "												type=\"submit\">Register</button>\n" +
    "										</form>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "							</tab> </tabset>\n" +
    "\n" +
    "						</div>\n" +
    "\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("partials/nav.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/nav.tpl.html",
    "    <div class=\"container\">\n" +
    "      <div class=\"navbar navbar-default\" ng-controller=\"NavCtrl\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "          <button type=\"button\" class=\"navbar-toggle\" ng-init=\"menuCollapsed = true\"\n" +
    "            ng-click=\"menuCollapsed = ! menuCollapsed\">\n" +
    "            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "            <span class=\"icon-bar\"></span>\n" +
    "          </button>\n" +
    "          <div class=\"navbar-brand\">\n" +
    "            Wired Wish\n" +
    "            <small>\n" +
    "			your wishes made social\n" +
    "            </small>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" collapse=\"menuCollapsed\">\n" +
    "          <ul class=\"nav navbar-nav\">\n" +
    "            <li ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"home\">\n" +
    "                <i class=\"fa fa-home\"></i>\n" +
    "                Home\n" +
    "              </a>\n" +
    "            </li>\n" +
    "            <li ui-sref-active=\"active\">\n" +
    "              <a href ui-sref=\"wishlists\">\n" +
    "                <i class=\"fa fa-angellist\"></i>\n" +
    "                My Wishlists\n" +
    "              </a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "           <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li class=\"active\"><a href=\"\" ><i class=\"fa fa-user\"></i>&nbsp;<span ng-bind=\"userName\"></span></a></li>\n" +
    "            <li class=\"active\"><a href=\"\" ng-click=\"logOut()\"><i class=\"fa fa-power-off\"></i>&nbsp;Logout</a></li>    \n" +
    "          </ul>\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>");
}]);

angular.module("wishes/newWish.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wishes/newWish.tpl.html",
    "<div class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\">New Wish</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "	<div>\n" +
    "		<form class=\"form-signin\" ng-submit=\"createWish()\">\n" +
    "			<input type=\"text\" ng-model=\"wish.name\" class=\"form-control\"\n" +
    "				placeholder=\"Wish name\" autofocus required> \n" +
    "			<br />\n" +
    "			<input type=\"text\" ng-model=\"wish.description\" class=\"form-control\"\n" +
    "				placeholder=\"Description\" required>\n" +
    "			<br />	\n" +
    "			<input type=\"url\" ng-model=\"wish.link\" class=\"form-control\"\n" +
    "				placeholder=\"Url\"> \n" +
    "			<br />\n" +
    "			<input type=\"number\" ng-model=\"wish.price\" class=\"form-control\"\n" +
    "				placeholder=\"Price\" required>\n" +
    "			<br />\n" +
    "			<span class=\"formLabel\">Joy rate</span>\n" +
    "			<div > \n" +
    "			    <rating class=\"glyphBig\" value=\"rate\" ng-click=\"assignjoyRatio(rate)\"\n" +
    "			    state-on=\"'glyphicon-heart'\" state-off=\"'glyphicon-heart-empty'\"></rating>\n" +
    "			</div>\n" +
    "				\n" +
    "			<button class=\"btn btn-success pull-right\" type=\"submit\"><i class=\"fa fa-plus\"></i>&nbsp;Create Wish</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "	<button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>");
}]);

angular.module("wishes/wishes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wishes/wishes.tpl.html",
    "<div ng-include=\"'partials/nav.tpl.html'\"></div> \n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<h2><i class=\"fa fa-magic\"></i>&nbsp;<span ng-bind=\"wishlistName\"></span> by <span ng-bind=\"userName\"></span> </h2>\n" +
    "	<h4><span ng-bind=\"wishlistDescription\"></span></h4>\n" +
    "\n" +
    "	<div ng-controller=\"ModalNewWishCtrl\">\n" +
    "	<script type=\"text/ng-template\">\n" +
    "    </script>\n" +
    "	   	<button type=\"button\" ng-click=\"open()\" class=\"btn btn-sm btn-success pull-right\">\n" +
    "			<i class=\"fa fa-plus\">\n" +
    "			</i>&nbsp;Add a wish\n" +
    "		</button>    \n" +
    "	</div>\n" +
    "	<div ng-controller=\"WishesTableCtrl\">\n" +
    "	\n" +
    "		<table st-table=\"displayedCollection\" st-safe-src=\"wishes\" class=\"table table-striped\">\n" +
    "			<thead>\n" +
    "			<tr>\n" +
    "				<th st-sort=\"name\">Name</th>\n" +
    "				<th st-sort=\"description\">Description</th>\n" +
    "				\n" +
    "				<th>Price</th>\n" +
    "				<th>Joy rate</th>\n" +
    "				<th>Link</th>\n" +
    "				<th>Actions</th>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<th colspan=\"6\"><input st-search=\"\" class=\"form-control\" placeholder=\"Wishes search ...\" type=\"text\"/></th>\n" +
    "			</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "			<tr ng-repeat=\"row in displayedCollection\">\n" +
    "				<td>{{row.name}}</td>\n" +
    "				<td>{{row.description}}</td>\n" +
    "				<td>${{row.price}}</td>\n" +
    "				<td>	\n" +
    "					<rating value=\"row.joyRatio\"  state-on=\"'glyphicon-heart'\" state-off=\"'glyphicon-heart-empty'\" readonly=\"true\"></rating>\n" +
    "			    </td>\n" +
    "				<td><a href=\"{{row.link}}\" target=\"_blank\" ><i class=\"fa fa-external-link-square\"></i></a></td>\n" +
    "				<td>\n" +
    "				<button type=\"button\" ng-click=\"removeItem(row)\" class=\"btn btn-sm btn-danger\">\n" +
    "					<i class=\"fa fa-trash\"></i>\n" +
    "				</button>\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	\n" +
    "</div>");
}]);

angular.module("wishlists/newWishlist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wishlists/newWishlist.tpl.html",
    "<div class=\"modal-header\">\n" +
    "	<h3 class=\"modal-title\">New Wishlist</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "	<div>\n" +
    "		<form class=\"form-signin\" ng-submit=\"createWishlist()\">\n" +
    "			<input type=\"text\" ng-model=\"wishlist.name\" class=\"form-control\"\n" +
    "				placeholder=\"Wishlist name\" autofocus required> \n" +
    "			<br />\n" +
    "			<input type=\"text\" ng-model=\"wishlist.description\" class=\"form-control\"\n" +
    "				placeholder=\"Description\" required>\n" +
    "			<br />	\n" +
    "			<button class=\"btn btn-success pull-right\" type=\"submit\"><i class=\"fa fa-plus\"></i>&nbsp;Create</button>\n" +
    "		</form>\n" +
    "	</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "	<button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>");
}]);

angular.module("wishlists/wishlists.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("wishlists/wishlists.tpl.html",
    "<div ng-include=\"'partials/nav.tpl.html'\"></div> \n" +
    "\n" +
    "<div class=\"container\">\n" +
    "	<h2><i class=\"fa fa-angellist\"></i>&nbsp;Hi! <span ng-bind=\"userName\"></span> these are your wishlists</h2>\n" +
    "	\n" +
    "	\n" +
    "	\n" +
    "	<div ng-controller=\"ModalNewWishlistCtrl\">\n" +
    "	    <script type=\"text/ng-template\">\n" +
    "    </script>\n" +
    "	   	<button type=\"button\" ng-click=\"open()\" class=\"btn btn-sm btn-success pull-right\">\n" +
    "			<i class=\"fa fa-plus\">\n" +
    "			</i>&nbsp;Create wishlist\n" +
    "		</button>    \n" +
    "	</div>\n" +
    "	\n" +
    "	<div ng-controller=\"WishlistsTableCtrl\">\n" +
    "	\n" +
    "		<table st-table=\"displayedCollection\" st-safe-src=\"wishlists\" class=\"table table-striped\">\n" +
    "			<thead>\n" +
    "			<tr>\n" +
    "				<th st-sort=\"name\">Name</th>\n" +
    "				<th st-sort=\"description\">Description</th>\n" +
    "				<th>Actions</th>\n" +
    "			</tr>\n" +
    "			<tr>\n" +
    "				<th colspan=\"3\"><input st-search=\"\" class=\"form-control\" placeholder=\"Wishlists search ...\" type=\"text\"/></th>\n" +
    "			</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "			<tr ng-repeat=\"row in displayedCollection\">\n" +
    "				<td><a ui-sref=\"wishes({idWishlist:row.idWishlist})\"  >{{row.name}}</a></td>\n" +
    "				<td>{{row.description}}</td>\n" +
    "				<td>\n" +
    "				<button type=\"button\" ng-click=\"removeItem(row)\" class=\"btn btn-sm btn-danger\">\n" +
    "					<i class=\"fa fa-trash\"></i>\n" +
    "				</button>\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	\n" +
    "	</div>\n" +
    "</div>");
}]);
