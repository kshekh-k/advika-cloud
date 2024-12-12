import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
// import { Dialog as RadixDialog } from "@radix-ui/react-dialog";

const DialogCustom = React.forwardRef<
  React.ElementRef<typeof Dialog>,
  React.ComponentPropsWithoutRef<typeof Dialog> & {
    title?: string;
    className?: string;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ open, onOpenChange, children, title, className }, ref) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideClose className={className}>
        <DialogHeader className="pb-5">
          <DialogTitle className=" text-2xl text-white font-semibold tracking-wider uppercase">{title || "App title here"}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
});

DialogCustom.displayName = "DialogCustom";

export default DialogCustom;
