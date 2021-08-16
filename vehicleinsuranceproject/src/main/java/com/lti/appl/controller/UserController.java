package com.lti.appl.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.bean.User;
import com.lti.appl.bean.Vehicle;
import com.lti.appl.exception.HRException;
import com.lti.appl.services.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserService user_service;
	// http://localhost:8090/api/v1/

	@GetMapping(value = "/userclaims/{id}")
	public List<Claims> getClaimsById(@PathVariable int id) {
		List<Claims> res = null;
		res = user_service.getClaimsById(id);

		return res;

	}

	@RequestMapping(value = "/addclaims/{policyNum}", consumes = "application/json", method = RequestMethod.POST)
	public boolean claimPolicy(@RequestBody Claims clm, @PathVariable long policyNum) {
		boolean res = false;

		res = user_service.claimPolicy(clm, policyNum);

		return res;
	}

	@PostMapping("/addpolicy/{userId}/{regNum}/{planId}")
	public boolean addPolicy(@RequestBody Policy p, @PathVariable int userId, @PathVariable String regNum,
			@PathVariable int planId) throws HRException {
		boolean result = user_service.addPolicy(p, userId, regNum, planId);
		return result;
	}

	@GetMapping("/policies/{userId}")
	public List<Policy> getPolicyByUser(@PathVariable int userId) throws HRException {
		List<Policy> policy = user_service.getPolicyByUser(userId);
		return policy;
	}

	@GetMapping("/deletePolicy/{id}")
	public boolean deletePolicy(@PathVariable long id) throws HRException {
		boolean res = user_service.deletePolicy(id);
		return res;
	}

	// http://localhost:8089/api/v1/registerUser
	@PostMapping("/registerUser")
	public int addUser(@RequestBody User user) throws HRException {
		user_service.registerUser(user);
		return 0;
	}

	// http://localhost:8090/api/v1/login/Ram
	@GetMapping("/login/{userEmail}")
	public User login(@PathVariable(value = "userEmail") String userEmail) throws HRException {
		User user = user_service.loginService(userEmail);
		return user;
	}

	// http://localhost:8090/api/v1/estimate/2W/HERO/Third Party
	@GetMapping("/estimate/{vecType}/{vecModel}/{planType}/{age}")
	public int estimate(@PathVariable(value = "vecType") String vecType,
			@PathVariable(value = "vecModel") String vecModel, @PathVariable(value = "planType") String planType,
			@PathVariable(value = "age") int age) throws HRException {
		int amt = user_service.estimateAmount(vecType, planType, vecModel, age);
		// System.out.println(amt);
		return amt;

	}

	// http://localhost:8090/api/v1/plans
	@GetMapping("/userplans")
	public List<Plans> getPlans() throws HRException {
		List<Plans> plans = user_service.getAllPlans();
		return plans;
	}

	@GetMapping("/updatePolicy/{id}/{duration}")
	public boolean updatePolicy(@PathVariable long id, @PathVariable int duration) throws HRException {
		boolean result = false;
		try {
			result = user_service.updatePolicy(id, duration);
		} catch (Exception e) {
			System.out.println("Exception: " + e.getMessage());
		}
		return result;
	}

	@GetMapping("/vehicles")
	public List<Vehicle> displayAll() throws HRException {
		List<Vehicle> vehiclesList = user_service.displayAll();
		return vehiclesList;
	}

	@GetMapping("/vehicles/{regNo}")
	public Vehicle findbyRegNo(@PathVariable(value = "regNo") String regNo) throws HRException {
		return user_service.findbyRegNo(regNo);
	}

	@PostMapping("/addvehicle/{uid}")
	public String addVehicle(@RequestBody Vehicle v, @PathVariable(value = "uid") int id) throws HRException {
		return user_service.addVehicle(v, id);
	}

	@GetMapping("/getplan/{vechicleType}/{planType}/{vechicleModel}")
	public Plans getPlan(@PathVariable(value = "vechicleType") String vechicleType,
			@PathVariable(value = "planType") String planType,
			@PathVariable(value = "vechicleModel") String vechicleModel) throws HRException {
		return user_service.getPlan(vechicleType, planType, vechicleModel);
	}

	@GetMapping(value = "/updatepassword/{userEmail}/{userPassword}")
	public int updatePassword(@PathVariable String userEmail, @PathVariable String userPassword) throws HRException {
		int res = 0;

		res = user_service.updatePassword(userEmail, userPassword);

		return res;
	}

}
