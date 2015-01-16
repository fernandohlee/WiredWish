package com.wiredwish.core.services;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.services.util.Accounts;
import com.wiredwish.core.services.util.Wishlists;



/**
 * Orchestrate business logic or domain logic (not jpa) to fulfill different use cases
 * @author Fernando Hei
 *
 */
public interface AccountService {
    public Accounts findAllAccounts();
    public Account findAccount(Integer id);
	public Account createAccount(Account account);
	public Account findByAccountNamePassword(String userName, String password);
	public Wishlists findByWishlistUsername(String userName);
	public Wishlist createWishlist(Integer idAccount, Wishlist wishlist);
	public Account findAccountByUsername(String userName);

}