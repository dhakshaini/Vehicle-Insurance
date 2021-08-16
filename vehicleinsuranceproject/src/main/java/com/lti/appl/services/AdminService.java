package com.lti.appl.services;

import java.util.List;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.exception.HRException;

public interface AdminService {
	public String savePlans(Plans p);

	public List<Plans> getAllPlans();

	public List<Claims> getAllClaims();

	public int approveClaim(long reqNum);

	public int declineClaim(long reqNum);

	public boolean deletePlan(int id);

	public int updatePlan(int id, int amt) throws HRException;

	public abstract List<Policy> getAllPolicies();

}
