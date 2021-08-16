package com.lti.appl.dao;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.lti.appl.bean.Claims;
import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.bean.User;
import com.lti.appl.bean.Vehicle;
import com.lti.appl.exception.HRException;

@Repository
public class UserDaoImpl implements UserDao {

	@PersistenceContext
	private EntityManager manager;

	@Override
	public Policy getPolicyById(long policyNum) {
		Policy p = new Policy();

		p = manager.find(Policy.class, policyNum);

		return p;
	}

	@Override
	public List<Claims> getClaimsById(int id) {
		List<Claims> resList = new ArrayList<>();

		String strQry1 = "from User where user_id=:uid";
		Query qry1 = manager.createQuery(strQry1);
		qry1.setParameter("uid", id);
		User usr = (User) qry1.getSingleResult();

		String strQry = " select c.claimDate, c.ApprovStatus, c.reqAmt " + "from Claims c, Policy p "
				+ "where p.policyNum=c.policyNum and p.userId=:uid";

		Query qry = manager.createQuery(strQry);
		resList = qry.setParameter("uid", usr).getResultList();

		return resList;

	}

	@Transactional
	@Override
	public boolean claimPolicy(Claims clm, long policyNum) {

		int appramt = 0;
		if (clm.getReason().equals("Natural Disaster")) {
			appramt = (int) (0.8 * clm.getReqAmt());
		} else if (clm.getReason().equals("Road Accident")) {
			appramt = (int) (0.65 * clm.getReqAmt());
		} else if (clm.getReason().equals("Theft")) {
			appramt = (int) (0.5 * clm.getReqAmt());
		} else if (clm.getReason().equals("Man Made Disaster")) {
			appramt = 0;
		}

		clm.setApprovAmt(appramt);
		clm.setPolicyNum(getPolicyById(policyNum));
		clm.setApprovStatus("Pending");
		manager.persist(clm);

		return true;
	}

	@Transactional
	@Override
	public List<Policy> getPolicyByUser(int userId) {
		List<Policy> policyList = new ArrayList<Policy>();

		String myQuery = "from User where user_id=:uId";
		Query query = manager.createQuery(myQuery);
		query.setParameter("uId", userId);
		User user = (User) query.getSingleResult();
		String myQuery1 = "from Policy where user_id=:uId";
		Query query1 = manager.createQuery(myQuery1);
		query1.setParameter("uId", userId);
		policyList = query1.getResultList();

		return policyList;
	}

	@Transactional
	@Override
	public Vehicle getVehicleByRegNum(String regNum) {
		Vehicle vehicle = new Vehicle();

		vehicle = manager.find(Vehicle.class, regNum);

		return vehicle;
	}

	@Transactional
	@Override
	public Plans getPlanById(int planId) {
		Plans plan = new Plans();

		plan = manager.find(Plans.class, planId);

		return plan;
	}

	@Transactional
	@Override
	public boolean addPolicy(Policy p, int userId, String regNum, int planId) {

		String myQry = "from User where userId=:uId";
		Query query = manager.createQuery(myQry);
		query.setParameter("uId", userId);
		User user = (User) query.getSingleResult();
		p.setUserId(user);
		p.setVehicleRegNum(getVehicleByRegNum(regNum));
		Plans plan = getPlanById(planId);
		p.setPlanId(plan);
		LocalDate currentDate = LocalDate.now();
		p.setStartDate(Date.valueOf(currentDate.toString()));
		currentDate = currentDate.plusYears(p.getPeriod());
		p.setEndDate(Date.valueOf(currentDate.toString()));
		manager.persist(p);
		System.out.println(p);

		return true;

	}

	@Transactional
	@Override
	public boolean deletePolicy(long id) {
		Policy p = manager.find(Policy.class, id);

		manager.remove(p);

		return true;
	}

	@Override
	@Transactional
	public String registerUser(User user) {

		manager.persist(user);

		return "successfully added";
	}

	@Override
	@Transactional
	public User loginService(String userEmail) {
		User user = new User();

		String sql = "SELECT e FROM User e where e.userEmail=:email";
		TypedQuery<User> qry = manager.createQuery(sql, User.class);
		qry.setParameter("email", userEmail);
		user = qry.getSingleResult();

		return user;
	}

	@Override
	@Transactional
	public int estimateAmount(String vecType, String planType, String vecModel, int age) {
		int amt = 0;

		String sql = "SELECT p FROM Plans p where p.vehicleType=:p_vectype and p.planType=:p_plantype and p.vehicleModel=:p_vecmodel";
		TypedQuery<Plans> qry = manager.createQuery(sql, Plans.class);
		qry.setParameter("p_vectype", vecType);
		qry.setParameter("p_plantype", planType);
		qry.setParameter("p_vecmodel", vecModel);
		Plans plans = qry.getSingleResult();
		amt = (int) plans.getAmount();
		amt = amt / age;

		return amt;
	}

	@Override
	@Transactional
	public List<Plans> getAllPlans() {
		List<Plans> plans = new ArrayList<Plans>();

		String sql = "SELECT p from Plans p";
		TypedQuery<Plans> qry = manager.createQuery(sql, Plans.class);
		plans = qry.getResultList();

		return plans;
	}

	@Override
	@Transactional
	public List<Vehicle> displayAll() {
		List<Vehicle> vehiclesList = new ArrayList<Vehicle>();

		String sql = "SELECT e FROM Vehicle e";
		TypedQuery<Vehicle> q = manager.createQuery(sql, Vehicle.class);
		vehiclesList = q.getResultList();

		return vehiclesList;
	}

	@Override
	public Vehicle findbyRegNo(String regNo) {
		Vehicle vehicle = new Vehicle();

		vehicle = manager.find(Vehicle.class, regNo);

		return vehicle;
	}

	@Override
	@Transactional
	public String addVehicle(Vehicle v, int id) {

		String sql = "from User where user_id=:name";
		Query q1 = manager.createQuery(sql);
		q1.setParameter("name", id);
		User u = (User) q1.getSingleResult();
		v.setUserId(u);
		manager.persist(v);

		return "Vehicle Added";
	}

	@Override
	public Plans getPlan(String vechicleType, String planType, String vehicleModel) {
		Plans p = new Plans();

		String sql = "from Plans where vehicleType=:vtype AND planType=:ptype AND vehicleModel=:vmodel";
		Query q = manager.createQuery(sql);
		q.setParameter("vtype", vechicleType);
		q.setParameter("ptype", planType);
		q.setParameter("vmodel", vehicleModel);
		p = (Plans) q.getSingleResult();

		return p;

	}

	@Transactional
	@Override
	public int updatePassword(String userEmail, String userPassword) {
		int i = 1;

		String strQry = "update User set userPswd=:uPass where userEmail=:uEmail";
		Query qry = manager.createQuery(strQry);
		qry.setParameter("uPass", userPassword);
		qry.setParameter("uEmail", userEmail);
		i = qry.executeUpdate();

		return i;

	}

	@Transactional
	@Override
	public boolean updatePolicy(long id, int duration) throws HRException {
		boolean status = true;
		if (duration > 3 || duration < 1) {
			throw new HRException("Invalid Duration!!!");
		} else {
			String myQuery = "SELECT p from Policy p where p.policyNum=:pId";
			TypedQuery<Policy> query = manager.createQuery(myQuery, Policy.class);
			query.setParameter("pId", id);
			Policy p = (Policy) query.getSingleResult();
			LocalDate newDate = p.getEndDate().toLocalDate();
			newDate = newDate.plusYears(duration);
			Date d = Date.valueOf(newDate);
			System.out.println(newDate);
			String myQuery1 = "UPDATE Policy set endDate=:nDate where policyNum=:pId";
			Query query1 = manager.createQuery(myQuery1);
			query1.setParameter("nDate", d);
			query1.setParameter("pId", id);
			status = query1.executeUpdate() == 1 ? true : false;

		}
		return status;
	}
}
