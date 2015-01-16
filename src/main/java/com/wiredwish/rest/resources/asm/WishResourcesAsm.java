package com.wiredwish.rest.resources.asm;

import java.util.List;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.wiredwish.core.services.util.Wishes;
import com.wiredwish.rest.mvc.WishlistController;
import com.wiredwish.rest.resources.WishResource;
import com.wiredwish.rest.resources.WishResources;

public class WishResourcesAsm  extends ResourceAssemblerSupport<Wishes, WishResources>{
	
	public WishResourcesAsm(){
        
		super(WishlistController.class, WishResources.class);
	}

	@Override
	public WishResources toResource(Wishes wishList) {
        List<WishResource> resList = new WishResourceAsm().toResources(wishList.getWishList());
        WishResources finalRes = new WishResources();
        finalRes.setWishes(resList);
        return finalRes;
	}
}
