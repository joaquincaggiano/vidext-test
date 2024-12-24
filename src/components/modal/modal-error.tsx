"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const ModalError = ({
  message,
  open,
  setOpen,
}: {
  message: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="bg-white" style={{ borderRadius: "10px" }}>
        <DialogHeader>
          <DialogTitle className="text-black text-center text-xl font-medium">
            Error
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-black text-center text-sm font-normal">
          {message}
        </DialogDescription>
        <DialogFooter>
          <button
            className="bg-red-500 py-2 px-5 rounded-[20px] border-2 border-red-500 hover:bg-[#FFFF] text-white text-sm font-medium hover:text-red-500 transition-all duration-200"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalError;
