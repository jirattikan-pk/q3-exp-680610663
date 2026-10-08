import {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerSwipeHandle,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Badge, badgeVariants } from "@/components/ui/badge";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <div className="flex-1 p-4">
      <Drawer swipeDirection="left">
      <DrawerTrigger render={
        <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        Jirattikan Pakpiboon
        </button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student information</DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 p-4">
          {/* <div className="size-full rounded-2xl bg-muted" /> */}
          <Card size="default" className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src="\public\me.jpg"
        className="relative h-full"
      />
      <CardHeader>
        <CardAction>
          {/* <Badge variant="secondary">Featured</Badge> */}
        </CardAction>
        <CardTitle>Jirattikan Pakpiboon</CardTitle>
        <CardDescription>
          นักศึกษามหาวิทยาลัยเชียงใหม่ คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="my-2">
          <Badge variant="default">Hobbies</Badge>
          &nbsp;อ่านหนังสือ เรียนภาษา เล่นปิงปอง ว่ายน้ำ
        </p>
        <p className="my-2">
          <Badge variant="default">Email</Badge>
           &nbsp;jirattikan_pk@cmu.ac.th
        </p>
        <p className="my-2">
          <Badge variant="default">Social</Badge>
          &nbsp;https://www.instagram.com/jirattikan_pk/
        </p>
      </CardContent>

      <CardFooter>
        รหัสนักศึกษา: 680610663
      </CardFooter>
    </Card>
        </div>

        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
    </div>
  );
}
