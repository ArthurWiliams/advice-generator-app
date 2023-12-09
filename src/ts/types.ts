export interface IAdvice {
  id: number;
  advice: string;
}

export interface ISlip {
  slip: IAdvice;
}

export interface IClasses {
  toAdd?: string[];
  toRemove?: string[];
}
