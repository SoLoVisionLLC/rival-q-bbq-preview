export interface HoursStatus {
  isOpen: boolean;
  statusText: string;
  statusColor: 'green' | 'amber' | 'neutral' | 'red';
  badgeLabel: string;
  currentTimeEastern: string;
  nextStopDetails: string;
}

export function getCurrentEasternTime(): Date {
  // Convert current date to America/New_York string then parse
  const nyDateString = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
  return new Date(nyDateString);
}

export function getHoursStatus(): HoursStatus {
  const eastern = getCurrentEasternTime();
  const day = eastern.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat
  const hour = eastern.getHours();
  const minutes = eastern.getMinutes();
  const timeNum = hour + minutes / 60;

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const timeFormatted = timeFormatter.format(new Date());

  // Active pop-up schedule check:
  // Friday (5): 11:00 AM - 6:00 PM (11 to 18)
  // Saturday (6): 12:00 PM - 7:00 PM (12 to 19)
  // Wednesday (3): 11:30 AM - 3:30 PM (11.5 to 15.5)

  let isOpen = false;
  let statusText = 'Closed — Smoker Fired Up & Prepping';
  let statusColor: 'green' | 'amber' | 'neutral' | 'red' = 'neutral';
  let badgeLabel = 'Prepping Pit';
  let nextStopDetails = 'Next Stop: Friday 11:00 AM @ 121 S. Countyline St, Fostoria';

  if (day === 5) {
    // Friday
    if (timeNum >= 8 && timeNum < 11) {
      isOpen = false;
      statusText = 'Pit Fired Up — Opening at 11:00 AM';
      statusColor = 'amber';
      badgeLabel = 'Opening at 11 AM';
      nextStopDetails = 'Downtown Fostoria (121 S. Countyline St) today!';
    } else if (timeNum >= 11 && timeNum < 17.5) {
      isOpen = true;
      statusText = 'Live at the Truck — Serving Now (Until Sold Out)';
      statusColor = 'green';
      badgeLabel = 'Serving Now';
      nextStopDetails = '121 S. Countyline St, Fostoria • Serving until sold out';
    } else if (timeNum >= 17.5 && timeNum < 18.5) {
      isOpen = true;
      statusText = 'Closing Soon / Limited Cuts Remaining';
      statusColor = 'amber';
      badgeLabel = 'Closing Soon';
      nextStopDetails = 'Final orders at 121 S. Countyline St';
    } else {
      isOpen = false;
      statusText = 'Sold Out / Closed for Friday';
      statusColor = 'neutral';
      badgeLabel = 'Sold Out';
      nextStopDetails = 'Next Stop: Saturday 12:00 PM in Findlay';
    }
  } else if (day === 6) {
    // Saturday
    if (timeNum >= 9 && timeNum < 12) {
      isOpen = false;
      statusText = 'Smoker Running — Opening at 12:00 PM in Findlay';
      statusColor = 'amber';
      badgeLabel = 'Opening at 12 PM';
      nextStopDetails = 'Findlay Rally (Main St & 2nd St)';
    } else if (timeNum >= 12 && timeNum < 18.5) {
      isOpen = true;
      statusText = 'Live at Findlay Rally — Hot Food Rolling';
      statusColor = 'green';
      badgeLabel = 'Serving Now';
      nextStopDetails = 'Main St & 2nd St, Findlay • Get in line early!';
    } else if (timeNum >= 18.5 && timeNum < 19.5) {
      isOpen = true;
      statusText = 'Late Evening / Last Call Before Sellout';
      statusColor = 'amber';
      badgeLabel = 'Last Call';
      nextStopDetails = 'Wrapping up Saturday night';
    } else {
      isOpen = false;
      statusText = 'Closed for Saturday Night';
      statusColor = 'neutral';
      badgeLabel = 'Closed';
      nextStopDetails = 'Catering Orders & Inquiries Open 24/7 Online';
    }
  } else if (day === 3) {
    // Wednesday
    if (timeNum >= 11.5 && timeNum < 15.5) {
      isOpen = true;
      statusText = 'Industrial Park Lunch Stop — Open Now';
      statusColor = 'green';
      badgeLabel = 'Open for Lunch';
      nextStopDetails = 'County Rd 23, Fostoria until 3:30 PM';
    } else {
      isOpen = false;
      statusText = 'Smoker Prep & Catering Booking';
      statusColor = 'neutral';
      badgeLabel = 'Prepping';
      nextStopDetails = 'Next Public Stop: Friday 11:00 AM';
    }
  } else {
    // Other days
    isOpen = false;
    statusText = 'Smoker Rest & Private Catering Production';
    statusColor = 'neutral';
    badgeLabel = 'Private Catering Active';
    nextStopDetails = 'Next Stop: Friday 11:00 AM @ Downtown Fostoria';
  }

  return {
    isOpen,
    statusText,
    statusColor,
    badgeLabel,
    currentTimeEastern: `${timeFormatted} ET`,
    nextStopDetails
  };
}
