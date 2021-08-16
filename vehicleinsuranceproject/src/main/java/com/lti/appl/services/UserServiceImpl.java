package com.lti.appl.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.bean.User;
import com.lti.appl.bean.Vehicle;
import com.lti.appl.dao.UserDao;
import com.lti.appl.exception.HRException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao dao;

	@Override
	public List<Claims> getClaimsById(int id) {
		List<Claims> cbyid = dao.getClaimsById(id);
		return cbyid;
	}

	@Override
	public boolean claimPolicy(Claims clm, long policyNum) {
		return dao.claimPolicy(clm, policyNum);
	}

	@Override
	public List<Policy> getPolicyByUser(int userId) {
		List<Policy> p = (List<Policy>) dao.getPolicyByUser(userId);
		return p;
	}

	@Override
	public boolean addPolicy(Policy p, int userId, String regNum, int planId) {
		boolean status = dao.addPolicy(p, userId, regNum, planId);
		return status;
	}

	@Override
	public boolean deletePolicy(long id) {
		boolean status = dao.deletePolicy(id);
		return status;
	}

	@Override
	public String registerUser(User user) {
		String msg = dao.registerUser(user);
		return msg;
	}

	@Override
	public User loginService(String userEmail) {
		User user = dao.loginService(userEmail);
		return user;
	}

	@Override
	public int estimateAmount(String vecType, String planType, String vecModel, int age) {
		int amt = dao.estimateAmount(vecType, planType, vecModel, age);
		return amt;
	}

	@Override
	public List<Plans> getAllPlans() {
		List<Plans> plans = dao.getAllPlans();
		return plans;
	}

	@Override
	public List<Vehicle> displayAll() {
		List<Vehicle> vehiclesList = dao.displayAll();
		return vehiclesList;
	}

	@Override
	public Vehicle findbyRegNo(String regNo) {
		return dao.findbyRegNo(regNo);
	}

	@Override
	public String addVehicle(Vehicle v, int id) {
		return dao.addVehicle(v, id);
	}

	@Override
	public Plans getPlan(String vechicleType, String planType, String vechicleModel) {
		return dao.getPlan(vechicleType, planType, vechicleModel);

	}

	@Override
	public int updatePassword(String userEmail, String userPassword) {
		int p = dao.updatePassword(userEmail, userPassword);
		return p;
	}

	@Override
	public boolean updatePolicy(long id, int duration) throws HRException {
		boolean status = dao.updatePolicy(id, duration);
		return status;
	}

}
