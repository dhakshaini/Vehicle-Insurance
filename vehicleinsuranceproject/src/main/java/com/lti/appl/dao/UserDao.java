package com.lti.appl.dao;

import java.sql.Date;
import java.util.List;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.bean.User;
import com.lti.appl.bean.Vehicle;
import com.lti.appl.exception.HRException;

public interface UserDao {
	public Policy getPolicyById(long policyNum);

	public List<Claims> getClaimsById(int id);

	public abstract boolean claimPolicy(Claims clm, long policyNum);

	public List<Policy> getPolicyByUser(int userId);

	public Vehicle getVehicleByRegNum(String regNum);

	public Plans getPlanById(int planId);

	public boolean addPolicy(Policy p, int userId, String regNum, int planId);

	public boolean deletePolicy(long id);

	String registerUser(User user);

	User loginService(String userEmail);

	int estimateAmount(String vecType, String planType, String vecModel, int age);

	List<Plans> getAllPlans();

	public boolean updatePolicy(long id, int duration) throws HRException;

	public List<Vehicle> displayAll();

	public Vehicle findbyRegNo(String regNo);

	public String addVehicle(Vehicle v, int id);

	public Plans getPlan(String vechicleType, String planType, String vechicleModel);

	public int updatePassword(String userEmail, String userPassword);

}
