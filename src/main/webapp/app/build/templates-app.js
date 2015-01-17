angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'partials/nav.tpl.html', 'wishes/newWish.tpl.html', 'wishes/wishes.tpl.html', 'wishlists/newWishlist.tpl.html', 'wishlists/wishlists.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
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
