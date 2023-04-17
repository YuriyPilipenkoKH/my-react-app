import { format,formatDistanceStrict } from 'date-fns';

export const formatEventStart = start => {
  return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
}; 