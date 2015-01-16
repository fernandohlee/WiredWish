package com.wiredwish.core.services.util;

import java.util.ArrayList;
import java.util.List;

import com.wiredwish.core.models.entities.Account;

public class Accounts {

    private List<Account> accounts = new ArrayList<Account>();

    public Accounts(List<Account> list) {
        this.accounts = list;
    }

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }
}
