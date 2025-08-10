document.addEventListener('DOMContentLoaded', function () {
  const resultsList = document.getElementById('results');
  if (!resultsList) return;

  const showInFirst = new Set(['firstname', 'lastname']);
  const showInSecond = new Set([
    'email','age','date','phoneNumber','username','preference','faveDay','password','opinion','webUrl','favecolor','Winter','Summer'
  ]);
  const skipAlways = new Set(['sessionId']);

  new URLSearchParams(window.location.search).forEach(function (value, key) {
    const v = String(value || '').trim();
    if (!v) return;
    if (!showInFirst.has(key)) return;           
    resultsList.append(`${v} is the ${key}`);
    resultsList.append(document.createElement('br'));
  });

  new URLSearchParams(window.location.search).forEach(function (value, key) {
    const v = String(value || '').trim();
    if (!v) return;
    if (skipAlways.has(key)) return;             
    if (!showInSecond.has(key)) return;          
    if (key === 'favecolor' && v.toLowerCase() === '#000000') return; 
    resultsList.append(`${v}: ${key}`);
    resultsList.append(document.createElement('br'));
  });
});