package com.wiredwish.rest.resources.asm;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.rest.mvc.AccountController;
import com.wiredwish.rest.resources.AccountResource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

public class AccountResourceAsm extends ResourceAssemblerSupport<Account, AccountResource> {
	
    public AccountResourceAsm() {
        super(AccountController.class, AccountResource.class);
    }

    @Override
    public AccountResource toResource(Account account) {
        AccountResource res = new AccountResource();
        res.setUserName(account.getUserName());
        res.setPassword(account.getPassword());
        res.setRid(account.getIdAccount());
        res.add(linkTo(methodOn(AccountController.class).getAccount(account.getIdAccount())).withSelfRel());
        return res;
    }
}