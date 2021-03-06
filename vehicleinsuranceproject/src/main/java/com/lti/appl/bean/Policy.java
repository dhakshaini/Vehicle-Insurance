package com.lti.appl.bean;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Policies")
public class Policy {

	@Id
	@Column(name = "Policy_Num")

	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "POLICY_GEN")
	@SequenceGenerator(name = "POLICY_GEN", sequenceName = "policy_seqs", allocationSize = 1)
	private long policyNum;

	@JoinColumn(name = "Vehicle_Reg_Num")
	@OneToOne
	private Vehicle vehicleRegNum;

	@JoinColumn(name = "User_Id")
	@ManyToOne(fetch = FetchType.EAGER)
	private User userId;

	@JoinColumn(name = "Plan_Id")
	@ManyToOne(fetch = FetchType.EAGER)
	private Plans planId;

	@Column(name = "Period")
	private int period;

	@Column(name = "Start_Date")
	private Date startDate;

	@Column(name = "End_Date")
	private Date endDate;

	public Policy() {
		super();
	}

	public Policy(long policyNum, Vehicle vehicleRegNum, User userId, Plans planId, int period, Date startDate,
			Date endDate) {
		super();
		this.policyNum = policyNum;
		this.vehicleRegNum = vehicleRegNum;
		this.userId = userId;
		this.planId = planId;
		this.period = period;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public long getPolicyNum() {
		return policyNum;
	}

	public void setPolicyNum(long policyNum) {
		this.policyNum = policyNum;
	}

	public Vehicle getVehicleRegNum() {
		return vehicleRegNum;
	}

	public void setVehicleRegNum(Vehicle vehicleRegNum) {
		this.vehicleRegNum = vehicleRegNum;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public Plans getPlanId() {
		return planId;
	}

	public void setPlanId(Plans planId) {
		this.planId = planId;
	}

	public int getPeriod() {
		return period;
	}

	public void setPeriod(int period) {
		this.period = period;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "Policy [policyNum=" + policyNum + ", userId=" + userId + ", planId=" + planId + ", period=" + period
				+ ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}

}
