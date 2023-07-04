// $(document).ready(function(){
//     $('#loading').fadeOut(2000,function(){
//         $('body').css('overflow','visible')
//     })
// })

let nums = document.querySelectorAll(".num") ;
let section = document.querySelector('.clientt');



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetCount = parseInt(entry.target.getAttribute('data-count'));
        let count = 0;
        const nums = setInterval(() => {
          if (count <= targetCount) {
            entry.target.textContent = count;
            count++;
          } else {
            clearInterval(nums);
          }
        }, 10);
      }
    });
  });
  
  // Observe each nums element
  nums.forEach(nums => {
    observer.observe(nums);
  });

  
// nums.forEach((num)=> startCount(num))
// function startCount(el) {
//     let goal = el.dataset.goal;
//     let count = setInterval(()=>{
//         el.textContent;
//         if(el.textContent == goal){
//            return 0
//         }
//     },100)
// }

// startCount(document.querySelectorAll(".num")[0]);