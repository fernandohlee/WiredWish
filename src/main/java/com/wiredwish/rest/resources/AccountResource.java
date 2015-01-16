package com.wiredwish.rest.resources;

import org.springframework.hateoas.ResourceSupport;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.wiredwish.core.models.entities.Account;

public class AccountResource extends ResourceSupport {
	
    private String userName;

    private String password;

    private Integer rid;

    public Account toAccount() {
        Account account = new Account();
        account.setUserName(userName);
        account.setPassword(password);
        return account;
    }
    
    public String getUserName() {
        return userName;
    }
    
    public Integer getRid() {
        return rid;
    }

    public void setRid(Integer rid) {
        this.rid = rid;
    }
    
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * jackson ignores this so when getting account it doesn't jsonfy the password
     */
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    /**
     * W/ JsonProperty we tell jackson that password is still a property and we only want to ignore the serialization object when sending data back to the client
     */
    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

}