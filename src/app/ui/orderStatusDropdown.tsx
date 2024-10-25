"use client";

import { updateOrderStatus } from "@/actions/actions";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { BoltIcon } from "@heroicons/react/24/outline";

type OrderStatusDropdownProps = {
  orderId: string;
  currentStatus: string;
};

const OrderStatusDropdown: React.FC<OrderStatusDropdownProps> = ({
  orderId,
  currentStatus,
}) => {
  const [status, setStatus] = useState(currentStatus);

  const handleSubmit = async () => {
    const result = await updateOrderStatus(orderId, status);
    if (result) {
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    }
  };

  return (
    <form className="flex justify-between items-center" onSubmit={handleSubmit}>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)} // Update state on select change
        className="p-2 border rounded"
      >
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button type="submit" className="p-1 border rounded ">
        <BoltIcon className="h-4 w-4 text-green-500" />
      </button>
    </form>
  );
};

export default OrderStatusDropdown;
