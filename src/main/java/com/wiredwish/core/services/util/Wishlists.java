package com.wiredwish.core.services.util;

import java.util.ArrayList;
import java.util.List;

import com.wiredwish.core.models.entities.Wishlist;

public class Wishlists {

    private List<Wishlist> wishlists = new ArrayList<Wishlist>();

    public Wishlists(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }

    public List<Wishlist> getWishlists() {
        return wishlists;
    }

    public void setAccounts(List<Wishlist> wishlists) {
        this.wishlists = wishlists;
    }
	
}
