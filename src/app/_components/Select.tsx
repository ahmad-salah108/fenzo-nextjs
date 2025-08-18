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
  width?: string
};

export function SelectInput({ placeholder, options, width }: Props) {
  return (
    <Select>
      <SelectTrigger className={`${width ? width : "w-[180px]"}`}>
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
