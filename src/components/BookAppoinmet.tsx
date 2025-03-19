
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appoinmetSchema, AppoinmetValues } from "@/lib/vallidation";
import { appoinmet } from "./actions";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "./LodingButton";
// ✅ Props type define kiya
interface BookAppoinmetProps {
  isOpen: boolean; // ✅ Boolean state
  onClose: () => void; // ✅ Close function
}

export default function BookAppoinmet({ isOpen, onClose }: BookAppoinmetProps) {
  const [ispending, startTransation] = useTransition();
  const form = useForm<AppoinmetValues>({
    resolver: zodResolver(appoinmetSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      country: "",
    },
  });

  async function onSubmit(value: AppoinmetValues) {
    startTransation(async () => {
      const { error, success } = await appoinmet(value);
      if (success) {
        toast.success(success);
        form.reset();
        onClose();
      }

      if (error) toast.error(error);
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book an Appointment with an Expert</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone No.</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Country" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton
              loading={ispending}
              type="submit"
              className="w-full cursor-pointer"
            >
             Request A Call Back
            </LoadingButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
