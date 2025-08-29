
export interface Event {
  id: string;
  name: string;
  date: string; // Storing as ISO string e.g., "YYYY-MM-DDTHH:mm"
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
