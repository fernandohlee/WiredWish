package com.wiredwish.rest.mvc;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.models.entities.Wishlist;
import com.wiredwish.core.services.AccountService;
import com.wiredwish.core.services.exceptions.AccountDoesNotExistException;
import com.wiredwish.core.services.exceptions.AccountExistsException;
import com.wiredwish.core.services.util.Accounts;
import com.wiredwish.core.services.util.Wishlists;
import com.wiredwish.rest.exceptions.ConflictException;
import com.wiredwish.rest.resources.AccountResources;
import com.wiredwish.rest.resources.AccountResource;
import com.wiredwish.rest.resources.WishlistResources;
import com.wiredwish.rest.resources.WishlistResource;
import com.wiredwish.rest.resources.asm.AccountResourcesAsm;
import com.wiredwish.rest.resources.asm.AccountResourceAsm;
import com.wiredwish.rest.resources.asm.WishlistResourcesAsm;
import com.wiredwish.rest.resources.asm.WishlistResourceAsm;

@Controller
@RequestMapping("/rest/accounts")
public class AccountController {
	private AccountService accountService;

	@Autowired
	public AccountController(AccountService accountService) {
		this.accountService = accountService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<AccountResources> findAllAccounts() {
		Accounts list = accountService.findAllAccounts();

		AccountResources res = new AccountResourcesAsm().toResource(list);
		return new ResponseEntity<AccountResources>(res, HttpStatus.OK);
	}

	@RequestMapping(value = "/{accountId}", method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<AccountResource> getAccount(
			@PathVariable Integer accountId) {
		Account account = accountService.findAccount(accountId);
		if (account != null) {
			AccountResource res = new AccountResourceAsm().toResource(account);
			return new ResponseEntity<AccountResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<AccountResource>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/userName/{userName}", method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<AccountResource> getAccountByUsername(
			@PathVariable String userName) {
		Account account = accountService.findAccountByUsername(userName);
		if (account != null) {
			AccountResource res = new AccountResourceAsm().toResource(account);
			return new ResponseEntity<AccountResource>(res, HttpStatus.OK);
		} else {
			return new ResponseEntity<AccountResource>(HttpStatus.NOT_FOUND);
		}
	}
	
    @RequestMapping(method = RequestMethod.POST)
    @PreAuthorize("permitAll")
    public ResponseEntity<AccountResource> createAccount(
            @RequestBody AccountResource sentAccount
    ) {
        try {
            Account createdAccount = accountService.createAccount(sentAccount.toAccount());
            AccountResource res = new AccountResourceAsm().toResource(createdAccount);
            HttpHeaders headers = new HttpHeaders();
            headers.setLocation(URI.create(res.getLink("self").getHref()));
            return new ResponseEntity<AccountResource>(res, headers, HttpStatus.CREATED);
        } catch(AccountExistsException exception) {
            throw new ConflictException(exception);
        }
    }
    
    
	@RequestMapping(value = "/{userName}/wishlists", method = RequestMethod.GET)
	@PreAuthorize("permitAll")
	public ResponseEntity<WishlistResources> findWishlistsByUsername(@PathVariable String userName){
		
		Wishlists wishlistList = accountService.findByWishlistUsername(userName);
		WishlistResources wishlistListResource = new WishlistResourcesAsm().toResource(wishlistList);
		return new ResponseEntity<WishlistResources>(wishlistListResource, HttpStatus.OK);
	}
	
    @RequestMapping(value="/{idAccount}/wishlists",
            method = RequestMethod.POST)
    @PreAuthorize("permitAll")
    public ResponseEntity<WishlistResource> createWishlist(
    		@PathVariable Integer idAccount,
            @RequestBody WishlistResource sentWishlist
    ) {
        try {
    		Wishlist createdWishlist = accountService.createWishlist(idAccount, sentWishlist.toWishlist());
    		WishlistResource res = new WishlistResourceAsm().toResource(createdWishlist);
            HttpHeaders headers = new HttpHeaders();
            //TODO fix urls
//            headers.setLocation(URI.create(res.getLink("self").getHref()));
            return new ResponseEntity<WishlistResource>(res, headers, HttpStatus.CREATED);
        } catch(AccountDoesNotExistException exception) {
            throw new ConflictException(exception);
        }
    }	    
    
}
