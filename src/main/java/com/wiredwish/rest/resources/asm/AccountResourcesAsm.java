package com.wiredwish.rest.resources.asm;

import java.util.List;

import org.springframework.hateoas.mvc.ResourceAssemblerSupport;

import com.wiredwish.core.services.util.Accounts;
import com.wiredwish.rest.mvc.AccountController;
import com.wiredwish.rest.resources.AccountResources;
import com.wiredwish.rest.resources.AccountResource;

public class AccountResourcesAsm extends ResourceAssemblerSupport<Accounts, AccountResources> {


    public AccountResourcesAsm() {
        super(AccountController.class, AccountResources.class);
    }

    @Override
    public AccountResources toResource(Accounts accountList) {
        List<AccountResource> resList = new AccountResourceAsm().toResources(accountList.getAccounts());
        AccountResources finalRes = new AccountResources();
        finalRes.setAccounts(resList);
        return finalRes;
    }
}

