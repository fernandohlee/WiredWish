package com.wiredwish.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.wiredwish.core.models.entities.Wish;
import com.wiredwish.rest.mvc.WishlistController;
import com.wiredwish.rest.resources.WishResource;

public class WishResourceAsm extends ResourceAssemblerSupport<Wish, WishResource>{
	
	public WishResourceAsm() {
		super(WishlistController.class, WishResource.class);
	}

	@Override
	public WishResource toResource(Wish entity) {
		WishResource wishResource = new WishResource();
		wishResource.setIdWish(entity.idWish);
		wishResource.setName(entity.name);
		wishResource.setDescription(entity.description);
		wishResource.setDateAdded(entity.dateAdded);
		wishResource.setLink(entity.link);
		wishResource.setJoyRatio(entity.joyRatio);
//		wishResource.setWishStatus(entity.wishStatus);
		wishResource.setPrice(entity.price);
		return wishResource;
	}
	
	

}
