package com.lti.appl;

import static org.junit.jupiter.api.Assertions.assertThrows;

import java.sql.Date;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.lti.appl.bean.Plans;
import com.lti.appl.bean.Policy;
import com.lti.appl.bean.User;
import com.lti.appl.bean.Vehicle;
import com.lti.appl.dao.UserDao;
import com.lti.appl.dao.UserDaoImpl;
import com.lti.appl.exception.HRException;
import com.lti.appl.services.UserService;
import com.lti.appl.services.UserServiceImpl;

@SpringBootTest
class VehicleinsuranceprojectApplicationTests  {
	
	@Autowired
	private UserDao dao;
	
	
	@Test
	@Disabled
	public void testregisterUser() throws HRException {
		
		User da=new User();

		da.setUserName("Deepthi");
		da.setUserEmail("deepthi@gmail.com");
		da.setPhone("9876899877");
		da.setUserPswd("Deepthi@123");
		da.setUserAddr("Chennai");
		Assertions.assertEquals("successfully added",dao.registerUser(da));	
		
	}
	
	@Test
	@Disabled
	public void testvehicleadd () throws HRException
	{
		
		Vehicle v=new Vehicle();
		v.setRegNum("TN00WE1234");
		v.setChassisNo("N87LPK7Y9M2341111");
		v.setEngNo("AA44E1357777");
		v.setLicense("TN88 125663012222");
		v.setManufact("Hero");
		v.setModel("Pleasure");
		v.setVehicleType("2W");
		
		Assertions.assertEquals("Vehicle Added",dao.addVehicle(v,110));	

	}
	
	@Test
	//@Disabled
	public void testupdatePolicy () throws HRException 
	{
		
		Policy p=new Policy();
		p.setPolicyNum(400005);
		p.setPeriod(1);
		Assertions.assertEquals(true,dao.updatePolicy(p.getPolicyNum(), p.getPeriod()));
	}

	@Test
	@Disabled
	public void testupdatepassword()
	{
		User us=new User();
		us.setUserEmail("saran@gmail.com");
		us.setUserPswd("Saran@123");
		Assertions.assertEquals(1,dao.updatePassword(us.getUserEmail(), us.getUserPswd()));

	}


	}

