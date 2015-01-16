package com.wiredwish.rest.resources;

import org.springframework.hateoas.ResourceSupport;

import com.wiredwish.core.models.entities.Wishlist;

public class WishlistResource extends ResourceSupport {

	public Integer idWishlist;
	
	public String name;

	public String description;
	
	public Integer getIdWishlist() {
		return idWishlist;
	}

	public void setIdWishlist(Integer idWishlist) {
		this.idWishlist = idWishlist;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Wishlist toWishlist() {
		Wishlist wishlist = new Wishlist();
		wishlist.setName(name);
		wishlist.setDescription(description);
		return wishlist;
	}

}
