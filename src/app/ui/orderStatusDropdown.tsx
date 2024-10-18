"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

type OrderStatusDropdownProps = {
  orderId: string;
  currentStatus: string;
};

const OrderStatusDropdown: React.FC<OrderStatusDropdownProps> = ({
  orderId,
  currentStatus,
}) => {
  const [status, setStatus] = useState(currentStatus);

  const handleChange = async (newStatus: string) => {
    setStatus(newStatus);

    try {
      const res = await fetch(`/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      toast.success("Order status updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update status");
    }
  };

  return (
    <select
      value={status}
      onChange={(e) => handleChange(e.target.value)}
      className="p-2 border rounded"
    >
      <option value="Pending">Pending</option>
      <option value="Processing">Processing</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </select>
  );
};

export default OrderStatusDropdown;
