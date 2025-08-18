import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  placeholder: string;
  options: { value: string; title: string }[];
};

export function SelectInput({ placeholder, options }: Props) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Event Type</SelectLabel> */}
          {options?.map((i) => (
            <SelectItem key={i?.value} value={i?.value}>{i?.title}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
