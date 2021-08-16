package com.lti.appl.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "Plans")
public class Plans {

	@Id
	@Column(name = "Plan_Id")

	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PLAN_GEN")
	@SequenceGenerator(name = "PLAN_GEN", sequenceName = "plan_seq", allocationSize = 1)
	private int planId;

	@Column(name = "Amount")
	private int amount;

	@Column(name = "Plan_Type")
	private String planType;

	@Column(name = "Vechicle_Type")
	private String vehicleType;

	@Column(name = "Vechicle_Model")
	private String vehicleModel;

	public Plans() {
		super();
	}

	public Plans(int planId, int amount, String planType, String vehicleType, String vehicleModel) {
		super();
		this.planId = planId;
		this.amount = amount;
		this.planType = planType;
		this.vehicleType = vehicleType;
		this.vehicleModel = vehicleModel;
	}

	public int getPlanId() {
		return planId;
	}

	public void setPlanId(int planId) {
		this.planId = planId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getPlanType() {
		return planType;
	}

	public void setPlanType(String planType) {
		this.planType = planType;
	}

	public String getVehicleType() {
		return vehicleType;
	}

	public void setVehicleType(String vehicleType) {
		this.vehicleType = vehicleType;
	}

	public String getVehicleModel() {
		return vehicleModel;
	}

	public void setVehicleModel(String vehicleModel) {
		this.vehicleModel = vehicleModel;
	}

	@Override
	public String toString() {
		return "Plans [planId=" + planId + ", amount=" + amount + ", planType=" + planType + ", vehicleType="
				+ vehicleType + ", vehicleModel=" + vehicleModel + "]";
	}

}
