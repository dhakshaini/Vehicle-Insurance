package com.lti.appl.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class User {


	@Id
	@Column(name = "User_Id")

	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USER_GEN")
	@SequenceGenerator(name = "USER_GEN", sequenceName = "user_seq", allocationSize = 1)
	private int userId;

	@Column(name = "UserName")
	private String userName;

	@Column(name = "Email")
	private String userEmail;

	@Column(name = "Mobile_Num")
	private String phone;

	@Column(name = "Address")
	private String userAddr;

	@Column(name = "Password")
	private String userPswd;

	public User() {
		super();
	}

	public User(int userId, String userName, String userEmail, String phone, String userPswd) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;

		this.phone = phone;
		this.userPswd = userPswd;
	}

	public User(String userName, String userEmail, Date userDob, String phone, String userAddr, String userPswd) {
		super();
		this.userName = userName;
		this.userEmail = userEmail;

		this.phone = phone;
		this.userAddr = userAddr;
		this.userPswd = userPswd;
	}

	public User(int userId, String userName, String userEmail, String phone, String userAddr, String userPswd) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userEmail = userEmail;

		this.phone = phone;
		this.userAddr = userAddr;
		this.userPswd = userPswd;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getUserAddr() {
		return userAddr;
	}

	public void setUserAddr(String userAddr) {
		this.userAddr = userAddr;
	}

	public String getUserPswd() {
		return userPswd;
	}

	public void setUserPswd(String userPswd) {
		this.userPswd = userPswd;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", phone=" + phone
				+ ", userAddr=" + userAddr + ", userPswd=" + userPswd + "]";
	}

}
