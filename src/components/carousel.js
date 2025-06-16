import { useState } from "react";
import Info from "./info";

const financialProducts = [
  {
    id: 1,
    name: "GrowthPlus Investment Plan",
    type: "Mutual Fund",
    riskLevel: "Moderate",
    returnRate: "6.5%",
    description:
      "A balanced portfolio focused on long-term capital appreciation.",
  },
  {
    id: 2,
    name: "SecureRetire 2040",
    type: "Retirement Plan",
    riskLevel: "Low",
    returnRate: "4.2%",
    description:
      "Low-risk investment designed for consistent retirement savings growth.",
  },
  {
    id: 3,
    name: "FlexiLoan Personal Credit",
    type: "Loan",
    riskLevel: "N/A",
    returnRate: "7.9% APR",
    description: "Quick personal loans with flexible repayment options.",
  },
];

export default function Carousel() {
  return (
    <div className="carousel">
      <button>⬅️</button>
      <Info
        name={financialProducts[index]}
        type={financialProducts[index]}
        riskLevel={financialProducts[index]}
        returnRate={financialProducts[index]}
        description={financialProducts[index]}
      />
      <button>➡️</button>
    </div>
  );
}
