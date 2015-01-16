package com.wiredwish.rest.resources;

import java.util.List;

import org.springframework.hateoas.ResourceSupport;

public class WishResources extends ResourceSupport{

	private List<WishResource> wishes;

	public List<WishResource> getWishes() {
		return wishes;
	}

	public void setWishes(List<WishResource> wishes) {
		this.wishes = wishes;
	}
	
}
