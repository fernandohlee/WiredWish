package com.wiredwish.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.rest.mvc.WishlistController;
import com.wiredwish.rest.resources.WishlistResource;

public class WishlistResourceAsm  extends ResourceAssemblerSupport<Wishlist, WishlistResource>{

	public WishlistResourceAsm() {
		super(WishlistController.class, WishlistResource.class);
	}

	@Override
	public WishlistResource toResource(Wishlist wishlist) {
		WishlistResource wishlistResource = new WishlistResource();
		wishlistResource.setIdWishlist(wishlist.idWishlist);
		wishlistResource.setName(wishlist.name);
		wishlistResource.setDescription(wishlist.description);
		return wishlistResource;
	}

}
