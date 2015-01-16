package com.wiredwish.core.repositories;

import java.util.List;

import com.wiredwish.core.models.entities.Account;

public interface AccountRepo {
	List<Account> findAllAccounts();
	Account findAccount(Integer id);
	Account findAccountByUserName(String userName);
	Account createAccount(Account data);
	Account findAccountByNamePassword(String userName, String password);

}
