
const app = new Vue({
  el: '#app',
  data: {},
  computed : {
    Health(){
        return '<icon></icon><svg v-html="Health" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.875rem" cy="1.875rem" r="1.688rem"/><path d="M30 57C37.0988 57 43.9121 54.2043 48.9649 49.218C54.0177 44.2318 56.9035 37.4562 56.9976 30.358C57.0917 23.2598 54.3866 16.41 49.4678 11.2916C44.549 6.17309 37.8122 3.19771 30.7159 3.00949C23.6195 2.82127 16.7346 5.43536 11.5513 10.2859C6.36808 15.1364 3.30364 21.8331 3.02136 28.9263C2.73907 36.0196 5.26165 42.9386 10.043 48.1857C14.8244 53.4328 21.4799 56.5857 28.5687 56.962"/></svg>'
    },
    Armor(){
      return '<icon></icon><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.875rem" cy="1.875rem" r="1.688rem"/><path d="M30 57C37.0988 57 43.9121 54.2043 48.9649 49.218C54.0177 44.2318 56.9035 37.4562 56.9976 30.358C57.0917 23.2598 54.3866 16.41 49.4678 11.2916C44.549 6.17309 37.8122 3.19771 30.7159 3.00949C23.6195 2.82127 16.7346 5.43536 11.5513 10.2859C6.36808 15.1364 3.30364 21.8331 3.02136 28.9263C2.73907 36.0196 5.26165 42.9386 10.043 48.1857C14.8244 53.4328 21.4799 56.5857 28.5687 56.962"/></svg>'
    },
    Water(){
      return '<icon></icon><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.875rem" cy="1.875rem" r="1.688rem"/><path d="M30 57C37.0988 57 43.9121 54.2043 48.9649 49.218C54.0177 44.2318 56.9035 37.4562 56.9976 30.358C57.0917 23.2598 54.3866 16.41 49.4678 11.2916C44.549 6.17309 37.8122 3.19771 30.7159 3.00949C23.6195 2.82127 16.7346 5.43536 11.5513 10.2859C6.36808 15.1364 3.30364 21.8331 3.02136 28.9263C2.73907 36.0196 5.26165 42.9386 10.043 48.1857C14.8244 53.4328 21.4799 56.5857 28.5687 56.962"/></svg>'
    },
    Hunger(){
      return '<icon></icon><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.875rem" cy="1.875rem" r="1.688rem"/><path d="M30 57C37.0988 57 43.9121 54.2043 48.9649 49.218C54.0177 44.2318 56.9035 37.4562 56.9976 30.358C57.0917 23.2598 54.3866 16.41 49.4678 11.2916C44.549 6.17309 37.8122 3.19771 30.7159 3.00949C23.6195 2.82127 16.7346 5.43536 11.5513 10.2859C6.36808 15.1364 3.30364 21.8331 3.02136 28.9263C2.73907 36.0196 5.26165 42.9386 10.043 48.1857C14.8244 53.4328 21.4799 56.5857 28.5687 56.962"/></svg>'
    }
},
})

function position(type) {
  if (type) { 
  $('.hud').css('top', '51rem');
  }else { 
  $('.hud').css('top', '63rem');
  }
}

window.addEventListener("message", function (event) {
  var item = event.data;
  let health = document.querySelector('.hud health path');
  let armor = document.querySelector('.hud armor path');
  let thirst = document.querySelector('.hud water path');
  let hunger = document.querySelector('.hud hunger path');
  switch (item.action) {
    case "health":
      health.style.strokeDasharray = (item.health) * 1.7 + ' 1200'
      armor.style.strokeDasharray = (item.armor) * 1.7 + ' 1200'
    break
    case "status":
      thirst.style.strokeDasharray = (item.thirst).toFixed(0) * 1.7 + ' 1200'
      hunger.style.strokeDasharray = (item.hunger).toFixed(0) * 1.7 + ' 1200'
    break
    case "hunger":
      hunger.style.strokeDasharray = (item.hunger).toFixed(0) * 1.7 + ' 1200' 
    break
    case "thirst":
      thirst.style.strokeDasharray = (item.thirst).toFixed(0) * 1.7 + ' 1200'
    break
    case "vehicle":
    position('vehicle')
    break
    case "notvehicle":
    position()
    break
  }
})