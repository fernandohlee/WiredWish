package com.wiredwish.rest.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.hateoas.ResourceSupport;

public class WishlistResources  extends ResourceSupport{

	private List<WishlistResource> wishlists = new ArrayList<WishlistResource>();

	public List<WishlistResource> getWishlists() {
		return wishlists;
	}

	public void setWishlists(List<WishlistResource> wishlists) {
		this.wishlists = wishlists;
	}
}
