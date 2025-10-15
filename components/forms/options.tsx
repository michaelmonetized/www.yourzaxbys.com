import { SelectItem, SelectContent } from "@/components/ui/select";

export const states = [
  { label: "Alabama", value: "AL" },
  { label: "Alaska", value: "AK" },
  { label: "Arizona", value: "AZ" },
  { label: "Arkansas", value: "AR" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "Delaware", value: "DE" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Hawaii", value: "HI" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Iowa", value: "IA" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Maine", value: "ME" },
  { label: "Maryland", value: "MD" },
  { label: "Massachusetts", value: "MA" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Mississippi", value: "MS" },
  { label: "Missouri", value: "MO" },
  { label: "Montana", value: "MT" },
  { label: "Nebraska", value: "NE" },
  { label: "Nevada", value: "NV" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "New York", value: "NY" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregon", value: "OR" },
  { label: "Pennsylvania", value: "PA" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Texas", value: "TX" },
  { label: "Utah", value: "UT" },
  { label: "Vermont", value: "VT" },
  { label: "Virginia", value: "VA" },
  { label: "Washington", value: "WA" },
  { label: "West Virginia", value: "WV" },
  { label: "Wisconsin", value: "WI" },
  { label: "Wyoming", value: "WY" },
  { label: "Washington DC", value: "DC" },
];

export function StateOptions() {
  return (
    <SelectContent>
      {states.map((state) => (
        <SelectItem key={state.value} value={state.value}>
          {state.label}
        </SelectItem>
      ))}
    </SelectContent>
  );
}

export const positions = [
  { label: "Cashier", value: "cashier" },
  { label: "Cook", value: "cook" },
  { label: "Trainer", value: "trainer" },
  { label: "Shift Leader", value: "shift leader" },
  { label: "GM", value: "gm" },
  { label: "Above Store", value: "above store" },
];

export function PositionOptions() {
  return (
    <SelectContent>
      {positions.map((position) => (
        <SelectItem key={position.value} value={position.value}>
          {position.label}
        </SelectItem>
      ))}
    </SelectContent>
  );
}

export const statuses = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
  { label: "Terminated", value: "terminated" },
];

export function StatusOptions() {
  return (
    <SelectContent>
      {statuses.map((status) => (
        <SelectItem key={status.value} value={status.value}>
          {status.label}
        </SelectItem>
      ))}
    </SelectContent>
  );
}

export const payTypes = [
  { label: "Salary", value: "salary" },
  { label: "Hourly", value: "hourly" },
];

export function PayTypeOptions() {
  return (
    <SelectContent>
      {payTypes.map((payType) => (
        <SelectItem key={payType.value} value={payType.value}>
          {payType.label}
        </SelectItem>
      ))}
    </SelectContent>
  );
}
