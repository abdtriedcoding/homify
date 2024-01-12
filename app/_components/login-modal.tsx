'use client'

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { signIn } from 'next-auth/react';

const LoginModal = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Log In</Button>
      </DrawerTrigger>
      <DrawerContent className="h-2/3">
        <div className="mx-auto space-y-4 w-full max-w-sm h-full flex flex-col items-center justify-center">
          <DrawerClose asChild>
            <Button size={"lg"}>Login With Google</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button onClick={()=>signIn('github')} size={"lg"}>Login With Github</Button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default LoginModal;
