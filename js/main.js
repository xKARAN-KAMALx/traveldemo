const PHONE='919876543210';const $=s=>document.querySelector(s);
document.addEventListener('DOMContentLoaded',()=>{
 const menu=$('.menu'),links=$('.links');if(menu)menu.onclick=()=>links.classList.toggle('show');
 const form=$('#bookingForm');
 if(form){const calc=()=>{let km=Number($('#distance').value||0),rate=Number($('#vehicle').selectedOptions[0].dataset.rate||12),mult=$('#trip').value==='Round Trip'?2:1,total=km*rate*mult+( $('#allowance').checked?500:0);$('#total').textContent='₹'+Math.round(total).toLocaleString('en-IN');$('#breakdown').textContent=`${km} km × ₹${rate}/km × ${mult}${mult===2?' round trip':' one way'}${$('#allowance').checked?' + ₹500 allowance':''}`;return total};
 ['distance','vehicle','trip','allowance'].forEach(id=>$('#'+id).addEventListener('input',calc));const q=new URLSearchParams(location.search);if(q.get('to'))$('#to').value=q.get('to');if(q.get('vehicle'))$('#vehicle').value=q.get('vehicle');calc();
 form.onsubmit=e=>{e.preventDefault();let d=new FormData(form),msg=`XYZ TRAVELS DEMO ENQUIRY\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nFrom: ${d.get('from')}\nTo: ${d.get('to')}\nDate: ${d.get('date')}\nTime: ${d.get('time')}\nVehicle: ${d.get('vehicle')}\nTrip: ${d.get('trip')}\nPassengers: ${d.get('passengers')}\nDistance: ${d.get('distance')} km\nEstimated demo fare: ${$('#total').textContent}\nPlease confirm actual fare and availability.`;window.open('https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg),'_blank')}}
 const cf=$('#contactForm');if(cf)cf.onsubmit=e=>{e.preventDefault();let d=new FormData(cf),msg=`XYZ TRAVELS ENQUIRY\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')}\nMessage: ${d.get('message')}`;window.open('https://wa.me/'+PHONE+'?text='+encodeURIComponent(msg),'_blank')};
 document.querySelectorAll('.gallery img').forEach(im=>im.onclick=()=>{let w=$('#lightbox');if(w){$('#lightboxImg').src=im.src;w.style.display='grid'}});
 const close=$('#lightbox');if(close)close.onclick=()=>close.style.display='none';
});
