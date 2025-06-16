import { useState } from "react";
export default function Info({
  name,
  description,
  type,
  riskLevel,
  returnRate,
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <p>{riskLevel}</p>
      <p>{returnRate}</p>
    </div>
  );
}
