function updateDateTime() {
    const options = {
      timeZone: 'Asia/Manila', // Philippines time zone
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    const currentDate = new Date().toLocaleString('en-US', options);
    const [time, date] = currentDate.split(', ');
  
    document.getElementById('time').innerText = time;
    document.getElementById('date').innerText = date;
  }
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Initial update
  updateDateTime();
  