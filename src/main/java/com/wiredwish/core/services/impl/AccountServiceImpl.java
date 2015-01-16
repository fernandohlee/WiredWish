package com.wiredwish.core.services.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.repositories.AccountRepo;
import com.wiredwish.core.repositories.WishlistRepo;
import com.wiredwish.core.services.AccountService;
import com.wiredwish.core.services.exceptions.AccountDoesNotExistException;
import com.wiredwish.core.services.exceptions.AccountExistsException;
import com.wiredwish.core.services.util.Accounts;
import com.wiredwish.core.services.util.Wishlists;

@Service
@Transactional
public class AccountServiceImpl implements AccountService {
	
	
	@Autowired
	private AccountRepo accountRepo;
	
	@Autowired
	private WishlistRepo wishlistRepo;
	
	@Override
	public Accounts findAllAccounts() {
		return new Accounts(accountRepo.findAllAccounts());
	}
	
	@Override
	public Account findAccount(Integer id) {
		return accountRepo.findAccount(id);
	}

	@Override
	public Account createAccount(Account data) {
		Account account = accountRepo.findAccountByUserName(data.getUserName());
		if (account != null) {
			throw new AccountExistsException();
		}
		return accountRepo.createAccount(data);
	}
	@Override
	public Account findByAccountNamePassword(String userName, String password) {
		return accountRepo.findAccountByNamePassword(userName, password);
	}

	@Override
	public Wishlists findByWishlistUsername(String userName) {
		return new Wishlists(wishlistRepo.findWishlistsByUsername(userName));
	}

	@Override
	public Wishlist createWishlist(Integer idAccount, Wishlist wishlist) {
		
		Account account = accountRepo.findAccount(idAccount);
		if (account == null) {
			throw new AccountDoesNotExistException();
		}
		Wishlist createdWishlist = wishlistRepo.createWishlist(wishlist, account);
		return createdWishlist;
	}

	@Override
	public Account findAccountByUsername(String userName) {
		return accountRepo.findAccountByUserName(userName);
	}
}
