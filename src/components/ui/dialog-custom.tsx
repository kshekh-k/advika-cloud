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
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
>(({ open, onOpenChange, children, title }, ref) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideClose>
        <DialogHeader className="hidden">
          <DialogTitle>{title || "App title here"}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
});

DialogCustom.displayName = "DialogCustom";

export default DialogCustom;
