"use client";

import { doReservation } from "@/app/actions/doReservation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ReserveButtonProps {
  totalPrice: number;
  listingId: string;
  startDate: Date;
  endDate: Date;
}

const ReserveButton: React.FC<ReserveButtonProps> = ({
  totalPrice,
  listingId,
  startDate,
  endDate,
}) => {
  const data = {
    totalPrice,
    listingId,
    startDate,
    endDate,
  };

  const router = useRouter();
  return (
    <>
      <Button
        onClick={async () => {
          await doReservation(data);
          router.refresh();
          toast.success("Reversation confirmed successfully");
        }}
        className="w-full"
      >
        Reserve Now
      </Button>
    </>
  );
};

export default ReserveButton;
