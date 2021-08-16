package com.lti.appl.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.exception.HRException;

@Repository("adminDao")
@EnableTransactionManagement
public class AdminDaoImpl implements AdminDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public List<Plans> getAllPlans() {
		String sql = "SELECT e FROM Plans e";
		TypedQuery<Plans> qry = em.createQuery(sql, Plans.class);
		List<Plans> planList = qry.getResultList();
		return planList;
	}

	@Override
	@Transactional
	public String savePlans(Plans p) {
		System.out.println("Dao layer---->");
		System.out.println(p);
		em.persist(p);
		return "Record Saved";
	}

	@Override
	@Transactional
	public List<Claims> getAllClaims() {

		String sql = "SELECT e FROM Claims e";
		TypedQuery<Claims> qry = em.createQuery(sql, Claims.class);
		List<Claims> claimList = qry.getResultList();
		return claimList;
	}

	@Transactional
	@Modifying
	public int approveClaim(long reqNum) {

		String strQry = "UPDATE  Claims set ApprovStatus=:stat WHERE Request_Num=:reqno";
		Query qry = em.createQuery(strQry);
		qry.setParameter("stat", "Approved");
		qry.setParameter("reqno", reqNum);
		int i = qry.executeUpdate();
		return i;

	}

	@Transactional
	@Modifying
	public int declineClaim(long reqNum) {

		String strQry = "UPDATE  Claims set ApprovStatus=:stat WHERE Request_Num=:reqno";
		Query qry = em.createQuery(strQry);
		qry.setParameter("stat", "Declined");
		qry.setParameter("reqno", reqNum);
		int i = qry.executeUpdate();
		return i;

	}

	@Transactional
	@Override
	public boolean deletePlan(int id) {
		Plans p = em.find(Plans.class, id);
		em.remove(p);
		return true;
	}

	@Transactional
	@Override
	public int updatePlan(int id, int amt) throws HRException {
		if (amt > 100000) {
			throw new HRException("Action cant be done!Amount exceeds max limit!!!");
		} else {
			String strQry = "update Plans set amount=:newAmt where planId=:pid";
			Query qry = em.createQuery(strQry);
			qry.setParameter("newAmt", amt);
			qry.setParameter("pid", id);
			int i = qry.executeUpdate();
			return i;
		}
	}

	@Override
	public List<Policy> getAllPolicies() {

		String sql = "SELECT e FROM Policy e";
		TypedQuery<Policy> qry = em.createQuery(sql, Policy.class);
		List<Policy> policyList = qry.getResultList();
		return policyList;
	}

}
