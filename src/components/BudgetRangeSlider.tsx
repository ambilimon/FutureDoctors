import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BudgetRangeSliderProps {
  minValue: number;
  maxValue: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  currency?: string;
  onCurrencyChange?: (currency: string) => void;
}

export function BudgetRangeSlider({
  minValue,
  maxValue,
  step,
  value,
  onChange,
  currency = "$",
  onCurrencyChange
}: BudgetRangeSliderProps) {
  const [localValue, setLocalValue] = useState(value);
  const [minInput, setMinInput] = useState(value[0].toString());
  const [maxInput, setMaxInput] = useState(value[1].toString());

  useEffect(() => {
    setLocalValue(value);
    setMinInput(value[0].toString());
    setMaxInput(value[1].toString());
  }, [value]);

  const handleSliderChange = (newValue: number[]) => {
    const typedValue = newValue as [number, number];
    setLocalValue(typedValue);
    setMinInput(typedValue[0].toString());
    setMaxInput(typedValue[1].toString());
    onChange(typedValue);
  };

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = e.target.value;
    setMinInput(newMin);
    
    if (newMin === "") return;
    
    const numValue = Math.max(minValue, Math.min(parseInt(newMin), localValue[1]));
    const newValue: [number, number] = [numValue, localValue[1]];
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = e.target.value;
    setMaxInput(newMax);
    
    if (newMax === "") return;
    
    const numValue = Math.min(maxValue, Math.max(parseInt(newMax), localValue[0]));
    const newValue: [number, number] = [localValue[0], numValue];
    setLocalValue(newValue);
    onChange(newValue);
  };

  const formatCurrency = (value: number) => {
    return `${currency}${value.toLocaleString()}`;
  };

  const handleCurrencyChange = (newCurrency: string) => {
    if (onCurrencyChange) {
      onCurrencyChange(newCurrency);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-2 mb-2">
        <Label>Currency</Label>
        <Select 
          value={currency} 
          onValueChange={handleCurrencyChange}
        >
          <SelectTrigger className="w-24">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="$">$ USD</SelectItem>
            <SelectItem value="€">€ EUR</SelectItem>
            <SelectItem value="£">£ GBP</SelectItem>
            <SelectItem value="₹">₹ INR</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="py-1">
        <div className="flex justify-between mb-2 text-sm">
          <span>{formatCurrency(localValue[0])}</span>
          <span>{formatCurrency(localValue[1])}</span>
        </div>
        <Slider
          value={localValue}
          min={minValue}
          max={maxValue}
          step={step}
          onValueChange={handleSliderChange}
          className="my-4"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="min-budget">Min</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {currency}
            </span>
            <Input
              id="min-budget"
              type="number"
              value={minInput}
              onChange={handleMinInputChange}
              min={minValue}
              max={maxValue}
              step={step}
              className="pl-7"
            />
          </div>
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="max-budget">Max</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {currency}
            </span>
            <Input
              id="max-budget"
              type="number"
              value={maxInput}
              onChange={handleMaxInputChange}
              min={minValue}
              max={maxValue}
              step={step}
              className="pl-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
