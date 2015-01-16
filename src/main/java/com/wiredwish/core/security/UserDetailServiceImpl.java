package com.wiredwish.core.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.repositories.AccountRepo;

@Component
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private AccountRepo accountRepo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        Account account = accountRepo.findAccountByUserName(userName);
        if(account == null) {
            throw new UsernameNotFoundException("no user found with " + userName);
        }
        return new AccountUserDetails(account);
    }
}
