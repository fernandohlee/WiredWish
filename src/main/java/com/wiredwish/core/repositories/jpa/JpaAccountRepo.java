package com.wiredwish.core.repositories.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.wiredwish.core.models.entities.Account;
import com.wiredwish.core.repositories.AccountRepo;

@Repository
public class JpaAccountRepo implements AccountRepo {

	@PersistenceContext
	private EntityManager em;

    @Override
    public List<Account> findAllAccounts() {
        Query query = em.createQuery("SELECT a FROM Account a");
        return query.getResultList();
    }
    
    @Override
    public Account findAccount(Integer id) {
        return em.find(Account.class, id);
    }

	@Override
	public Account findAccountByUserName(String userName) {
        Query query = em.createQuery("SELECT a FROM Account a WHERE a.userName=?1");
        query.setParameter(1, userName);
        List<Account> accounts = query.getResultList();
        if(accounts.size() == 0) {
            return null;
        } else {
            return accounts.get(0);
        }
    }
	
	@Override
	public Account createAccount(Account data) {
        em.persist(data);
        return data;
	}

	@Override
	public Account findAccountByNamePassword(String userName, String password) {
        Query query = em.createQuery("SELECT a FROM Account a WHERE a.userName=?1 AND a.password=?2");
        query.setParameter(1, userName);
        query.setParameter(2, password);
        List<Account> accounts = query.getResultList();
        if(accounts.size() == 0) {
            return null;
        } else {
            return accounts.get(0);
        }
	}    
}
