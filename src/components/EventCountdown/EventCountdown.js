import { useEffect, useState } from 'react';
import './EventCountdown.scss';

function pad(number) {
  var result = "" + number;
  if (result.length < 2) {
      result = "0" + result;
  }

  return result;
}

function EventCountdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const ms = new Date('2023/07/07 10:00') - new Date();
      const d = Math.floor(ms / (24*60*60*1000));
      const daysms = ms % (24*60*60*1000);
      const h = Math.floor(daysms / (60*60*1000));
      const hoursms = ms % (60*60*1000);
      const m = Math.floor(hoursms / (60*1000));
      const minutesms = ms % (60*1000);
      const s = Math.floor(minutesms / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);
  }, [])


  return (
    <div className='EventCountdown'>
        <div className='main'>
          <div className='countdown'>
            <div className='days'>
              <span className='label'>days</span>
              <span className='value'>{pad(days)}</span>
            </div>
            <div className='hours'>
              <span className='label'>hours</span>
              <span className='value'>{pad(hours)}</span>
            </div>
            <div className='minutes'>
              <span className='label'>minutes</span>
              <span className='value'>{pad(minutes)}</span>
            </div>
            <div className='seconds'>
              <span className='label'>seconds</span>
              <span className='value'>{pad(seconds)}</span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default EventCountdown;
