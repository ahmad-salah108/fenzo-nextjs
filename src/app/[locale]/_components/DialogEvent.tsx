import { DatePicker } from "@/app/_components/DatePicker";
import { SelectInput } from "@/app/_components/Select";
import { azeretMono } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type Props = {
  locale: string;
  t: (key: string, values?: Record<string, any>) => string;
};

const eventTypes = [
  {
    title: "A",
    value: "A",
  },
  {
    title: "B",
    value: "B",
  },
  {
    title: "C",
    value: "C",
  },
];

export function DialogEvent({ locale, t }: Props) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <button
            className={`w-fit mt-16 inline-flex items-center gap-2 rounded-full border border-[rgba(89,89,89,1)] 
                   text-[rgba(89,89,89,1)] text-[0.9rem] px-6 py-3 hover:bg-gray-100 cursor-pointer ${azeretMono.className} uppercase`}
          >
            {t("design_your_event")}
            <img
              src="/assets/icons/arrow-filled.svg"
              alt="arrow"
              className={`w-6 ${locale === "ar" ? "rotate-180" : ""}`}
            />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="font-bold text-3xl md:text-4xl uppercase text-start">
              Describe your <span className="text-main">Event</span>
            </DialogTitle>
            <DialogDescription className="text-[1rem] text-start">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-3">
            <div className="grid gap-3">
              <Label className="text-muted-foreground">
                {t("event_type")}*
              </Label>
              <SelectInput
                placeholder={t("select_event_type")}
                options={eventTypes}
              />
            </div>
            <div className="grid gap-3">
              <Label className="text-muted-foreground">
                {t("event_date")}*
              </Label>
              <DatePicker />
            </div>
            <div className="grid gap-3">
              <Label className="text-muted-foreground">{t("place")}*</Label>
              <SelectInput
                placeholder={t("select_event_place")}
                options={eventTypes}
              />
            </div>
          </div>
          <DialogFooter className="mt-5 flex flex-row ms-auto">
            <DialogClose asChild>
              <Button variant="outline" className="text-muted-foreground w-fit">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-main hover:bg-main-100 w-fit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
