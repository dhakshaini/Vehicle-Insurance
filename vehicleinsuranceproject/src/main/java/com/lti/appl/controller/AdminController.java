package com.lti.appl.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.exception.HRException;
import com.lti.appl.services.AdminServiceImpl;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/v1")
public class AdminController {

	@Autowired
	private AdminServiceImpl adminService;

	@GetMapping("/plan")
	public List<Plans> getPlanList() {

		System.out.println("inside controller calling get planlist");
		List<Plans> e = new ArrayList<>();

		e = adminService.getAllPlans();

		return e;
	}

	@PostMapping("/addnewplan")
	public String saveEmployee(@RequestBody Plans p) {

		adminService.savePlans(p);

		return "Added";
	}

	@GetMapping("/claim")
	public List<Claims> getClaimList() {
		List<Claims> claimList = new ArrayList<>();
		System.out.println("inside controller calling get claimlist");

		claimList = adminService.getAllClaims();

		return claimList;
	}

	@GetMapping(value = "/approvclaim/{reqNum}")
	public int approveClaim(@PathVariable long reqNum) {
		int i = 0;

		i = adminService.approveClaim(reqNum);

		return i;
	}

	@GetMapping(value = "/declineclaim/{reqNum}")
	public int declineClaim(@PathVariable long reqNum) {
		int i = 0;

		i = adminService.declineClaim(reqNum);

		return i;
	}

	@GetMapping(value = "/deleteplan/{id}")
	public boolean deletePlan(@PathVariable int id) {
		boolean res = false;

		res = adminService.deletePlan(id);

		return res;
	}

	@GetMapping(value = "/updateplan/{id}/{amt}")
	public int updatePlan(@PathVariable int id, @PathVariable int amt) {
		int res = 0;
		try {
			res = adminService.updatePlan(id, amt);
		} catch (Exception e) {
			System.out.println("Exception: " + e.getMessage());
		}

		return res;
	}

	@GetMapping("/policies")
	public List<Policy> getPolicyList() {
		List<Policy> p = new ArrayList<>();

		p = adminService.getAllPolicies();

		return p;
	}

}
