import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="py-56 flex flex-col space-y-4 items-center text-center justify-center">
      <Button size={"lg"}>Login With Google</Button>
      <Button size={"lg"}>Login With Github</Button>
    </div>
  );
};

export default page;
