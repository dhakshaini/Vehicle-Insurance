package com.lti.appl.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.dao.AdminDao;
import com.lti.appl.exception.HRException;

@Service("adminService")
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDao adminDao;

	public AdminDao getAdminDao() {
		return adminDao;
	}

	public void setAdminDao(AdminDao adminDao) {
		this.adminDao = adminDao;
	}

	@Override
	public List<Plans> getAllPlans() {
		List<Plans> planList = adminDao.getAllPlans();
		return planList;

	}

	@Override
	public String savePlans(Plans p) {
		adminDao.savePlans(p);
		return "Success";
	}

	@Override
	public List<Claims> getAllClaims() {

		List<Claims> claimList = adminDao.getAllClaims();
		return claimList;
	}

	@Override
	public int approveClaim(long reqNum) {

		int s = adminDao.approveClaim(reqNum);
		return s;
	}

	@Override
	public int declineClaim(long reqNum) {
		int d = adminDao.declineClaim(reqNum);
		return d;
	}

	@Override
	public boolean deletePlan(int id) {
		boolean d = adminDao.deletePlan(id);
		return d;
	}

	@Override
	public int updatePlan(int id, int amt) throws HRException {
		int u = adminDao.updatePlan(id, amt);
		return u;
	}

	@Override
	public List<Policy> getAllPolicies() {
		List<Policy> policyList = adminDao.getAllPolicies();
		return policyList;
	}

}
