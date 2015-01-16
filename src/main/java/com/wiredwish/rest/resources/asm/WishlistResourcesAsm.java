package com.wiredwish.rest.resources.asm;

import java.util.List;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.wiredwish.core.services.util.Wishlists;
import com.wiredwish.rest.mvc.WishlistController;
import com.wiredwish.rest.resources.WishlistResources;
import com.wiredwish.rest.resources.WishlistResource;

public class WishlistResourcesAsm  extends ResourceAssemblerSupport<Wishlists, WishlistResources>{
	
	public WishlistResourcesAsm(){
        super(WishlistController.class, WishlistResources.class);

	}

	@Override
	public WishlistResources toResource(Wishlists wishlists) {
        List<WishlistResource> resList = new WishlistResourceAsm().toResources(wishlists.getWishlists());
        WishlistResources finalRes = new WishlistResources();
        finalRes.setWishlists(resList);
        return finalRes;
	}
}
