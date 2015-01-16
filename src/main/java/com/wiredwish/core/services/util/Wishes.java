package com.wiredwish.core.services.util;

import java.util.ArrayList;
import java.util.List;

import com.wiredwish.core.models.entities.Wish;

public class Wishes {

	private List<Wish> wishes = new ArrayList<Wish>();

	public Wishes(List<Wish> wishes) {
		super();
		this.wishes = wishes;
	}

	public List<Wish> getWishList() {
		return wishes;
	}

	public void setWishList(List<Wish> wishes) {
		this.wishes = wishes;
	}
	
}
