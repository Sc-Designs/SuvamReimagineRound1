  var swiper = new Swiper(".mySwiper", {
    speed: 500,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var arr = [
  {
    Spath:
      "M1320.4 1339.32C1200.08 1474.78 1021.08 1531.87 846.451 1544.06C675.14 1556.01 513.684 1506.3 382.368 1404.78C239.778 1294.55 112.436 1151.68 98.9294 966.183C84.8377 772.65 181.745 584.855 311.454 430.864C446.607 270.411 619.121 139.981 820.651 109.357C1034.79 76.816 1272.51 107.115 1409.53 264.001C1539.25 412.521 1482.22 642.516 1465.24 847.373C1450.74 1022.23 1440.02 1204.64 1320.4 1339.32Z",
  },
  {
    Spath:
      "M967 106.937C1167.98 139.674 1271.36 326.479 1405.17 467.74C1523.77 592.94 1677.86 703.776 1689.1 869.241C1700.83 1042.04 1596.4 1201.12 1463.32 1324.03C1329.66 1447.47 1156.09 1521.37 967 1536.13C758.132 1552.43 538.931 1532.09 378.259 1408.72C205.13 1275.78 105.69 1076.11 98.4743 869.241C91.0324 655.889 171.15 441.799 339.381 294.143C504.551 149.173 741.814 70.2588 967 106.937Z",
  },
  {
    Spath:
      "M832.701 99.5888C1018.2 84.0739 1197.85 183.892 1321.73 324.507C1439.39 458.052 1468.24 640.581 1466.96 819.509C1465.69 996.798 1430.32 1174.21 1314.69 1307.38C1191.55 1449.19 1019.2 1552.95 832.701 1549.94C648.431 1546.96 497.289 1422.82 365.861 1292.05C232.927 1159.78 87.5191 1007.86 98.5958 819.509C109.373 636.253 288.06 527.807 418.318 400.066C545.179 275.657 656.665 114.312 832.701 99.5888Z",
  },
  {
    Spath:
      "M700.28 99.4861C871.044 110.494 1016.84 213.698 1132 341.461C1241.02 462.407 1296.96 614.407 1311.25 777.296C1327.28 960.02 1343.44 1167.17 1215.92 1297.85C1087.97 1428.96 882.594 1402.79 700.28 1403.38C517.061 1403.98 307.349 1435.46 181.32 1301.2C56.5413 1168.27 107.47 960.355 112.561 777.296C117.424 602.407 95.5124 413.652 209.662 282.005C329 144.373 519.462 87.8303 700.28 99.4861Z",
  },
  {
    Spath:
      "M813.993 99.0844C1032.75 87.5126 1269.39 168.602 1392.8 340.01C1505.8 496.952 1394.47 698.479 1382.06 888.06C1371.04 1056.53 1441.26 1243.99 1325.28 1372.18C1205.04 1505.08 998.064 1531.7 813.993 1515.95C645.661 1501.55 511.277 1400.86 387.465 1291.92C256.957 1177.09 117.496 1055.97 100.398 888.06C81.9914 707.311 171.69 535.929 296.435 398.007C433.083 246.925 604.243 110.18 813.993 99.0844Z",
  },
  {
    Spath:
      "M800.506 98.0024C982.687 98.4625 1153.72 172.411 1289.27 298.276C1433.38 432.092 1552.39 603.561 1560.44 803.663C1568.78 1010.71 1483.17 1217.22 1331.72 1352.94C1188.67 1481.14 989.262 1499.47 800.506 1484.68C628.024 1471.16 470.29 1397.92 344.131 1275.56C213.13 1148.5 104.969 989.261 98.3798 803.663C91.5844 612.26 176.519 429.298 309.346 295.801C440.322 164.167 617.856 97.5411 800.506 98.0024Z",
  },
  {
    Spath:
      "M928.234 102.581C1126.97 118.353 1305.4 207.096 1442.09 340.026C1574.24 468.537 1651.9 633.756 1655.84 810.165C1659.86 990.456 1589.61 1161.31 1463.52 1299.91C1323.07 1454.29 1147.09 1625.8 928.234 1609.98C714.479 1594.53 618.332 1371.02 471.327 1228.2C332.191 1093.03 134.012 993.929 104.955 810.165C72.849 607.117 153.331 391.188 316.767 250.719C476.523 113.414 709.865 85.2514 928.234 102.581Z",
  },
  {
    Spath:
      "M784.756 98.2016C964.655 91.7591 1093.61 241.019 1215.99 360.576C1331.9 473.805 1442.92 596.902 1452.98 751.011C1463.57 913.452 1391.18 1070.18 1270.12 1190.45C1142.92 1316.85 973.603 1412.49 784.756 1414.95C593.658 1417.44 415.538 1329.85 285.232 1203.27C159.465 1081.1 80.6343 916.969 101.273 751.011C120.267 598.278 269.547 501.834 386.335 390.287C508.548 273.559 607.248 104.558 784.756 98.2016Z",
  },
  {
    Spath:
      "M903.659 99.1777C1132.99 79.9252 1296.75 300.691 1443.88 470.914C1573.92 621.362 1656.84 795.379 1673.9 990.307C1692.88 1207.01 1711.99 1460.41 1543.2 1605.19C1377.37 1747.43 1125.86 1654.39 903.659 1650.99C687.731 1647.69 447.472 1721.77 284.134 1585.94C115.409 1445.64 75.0217 1202.26 109.141 990.307C139.214 803.495 322.238 697.856 450.2 554.334C598.041 388.516 677.358 118.176 903.659 99.1777Z",
  },
]
setInterval(function () {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var new_spath = arr[randomIndex].Spath;
  gsap.to("#svg path", {
    attr: {
      d: new_spath,
    },
    duration: 4,
  });
}, 4000);
var overlay = document.querySelector("#overlay");
var menu = document.querySelector("#icon");
var menuItem = document.querySelector("#side-nav");
var close = document.querySelector("#close");
menu.addEventListener('click', function () {
   menuItem.style.left = "0%";
   overlay.style.display = "block";
   gsap.from(".menu-item",{
     x:-600,
     stagger:0.19,
   })
 });
overlay.addEventListener("click", function(){
  menuItem.style.left = "-100%";
  overlay.style.display = "none";
});
close.addEventListener("click", function(){
  menuItem.style.left = "-100%";
  overlay.style.display = "none";
});
document.querySelectorAll(".section").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    end: "bottom 50%",
    onEnter: function () {
      document.body.setAttribute("theme", elem.dataset.color);
    },
    onEnterBack: function () {
      document.body.setAttribute("theme", elem.dataset.color);
    },
  });
});
var flower_array = [
  {
    Flower_Name: "White Rose",
    Flower_Description:
      "White Rose offers premium, eco-friendly products for a sustainable lifestyle, including organic skincare, eco-home goods, and ethical fashion.",
    Flower_img: "images/flowers/slide-1-removebg.png",
    Flower_Comment_Number: "20095",
    Flower_Price: "20.99$",
  },
  {
    Flower_Name: "Doritis",
    Flower_Description:
      "Doritis, a small orchid genus, is popular in e-commerce for its vibrant flowers and ease of cultivation.",
    Flower_img: "images/flowers/slide-2-removebg.png",
    Flower_Comment_Number: "10065",
    Flower_Price: "15.99$",
  },
  {
    Flower_Name: "Jasmine",
    Flower_Description:
      "Jasmine is a flexible, scalable e-commerce platform offering customizable solutions, user-friendly interfaces, and robust security for online businesses.",
    Flower_img: "images/flowers/slide-3-removebg.png",
    Flower_Comment_Number: "5065",
    Flower_Price: "18.99$",
  },
  {
    Flower_Name: "Red Rose",
    Flower_Description:"A red rose symbolizes love and passion, making it a perfect gift for romantic occasions and special celebrations.",
    Flower_img: "images/flowers/slide-4-removebg.png",
    Flower_Comment_Number: "21065",
    Flower_Price: "25.99$",
  },
];

flower_array.forEach(function(item){
  document.querySelector(".swiper-wrapper").innerHTML += `
  <div class="swiper-slide flex-col flex lg:flex-row">
        <div class="h-full w-full flex justify-center items-center">
          <img class="h-5/6 object-cover -mt-20" src="${item.Flower_img}" alt="">
        </div>
        <div class="h-full w-full flex flex-col gap-y-5 items-center justify-center -mt-28 lg:mt-0">
          <h1 class="text-5xl border-b-4 pb-2 uppercase font-['Maitree']">${item.Flower_Name}</h1>
          <p class="px-5 text-justify leading-6 lg:px-24 lg:leading-9 lg:text-2xl font-semibold font-['Genos']">${item.Flower_Description}</p>
          <div class="flex flex-col -gap-y-7">
            <div class="w-full h-14 lg:h-20 flex items-center justify-center text-4xl gap-x-2">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-fill"></i>
            </div>
            <div class="w-full h-14 flex items-center justify-center -mt-5 lg:-mt-9">( - ${item.Flower_Comment_Number} - )</div>
          </div>
          <div class="-mt-6">
            <h1 class="font-semibold text-2xl">Price:- ${item.Flower_Price}</h1>
          </div>
          <div class="w-full h-14 flex items-center justify-center -mt-5 lg:-mt-2 gap-x-5">
          <a href="#" class="hero1 border-2 border-blue-600 text-lg uppercase rounded-full"><span class="hover px-5 py-2 inline-block">Buy Now</span></a>
          <a href="#" class="hero2 border-2 border-sky-800 text-lg uppercase rounded-full"><span class="hover px-5 py-2 inline-block">Add To Cart</span></a>
          </div>
        </div>
      </div>
  `;
})

var faq = [
  {
    question: "What is the best way to buy flowers?",
    answer:
      "The best way to buy flowers is by visiting a local flower shop. You can also buy flowers online, such as on Amazon.",
  },
  {
    question: "What types of flowers do you offer?",
    answer:
      "We offer a wide variety of flowers including roses, lilies, tulips, daisies, orchids, and many more. Our selection also includes seasonal flowers and special arrangements for various occasions.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order directly on our website by browsing our catalog, selecting your desired flowers, and following the checkout process. You can also place an order by calling our customer service team.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer:
      "Yes, we offer same-day delivery for orders placed before a certain cutoff time. Please check our delivery information page for specific details and cutoff times.",
  },
  {
    question: "Can I customize my flower arrangement?",
    answer:
      " Absolutely! We offer custom flower arrangements. You can specify your preferences for flower types, colors, and arrangement style when placing your order.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver to a wide range of areas including [list of cities/regions]. You can check if we deliver to your location by entering your zip code on our delivery information page.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery charges vary based on the delivery location and the type of service selected. Standard delivery rates are provided during the checkout process.",
  },
  {
    question: "Can I schedule a delivery for a specific date and time?",
    answer:
      " Yes, you can schedule a delivery for a specific date. While we cannot guarantee exact times, you can choose a preferred delivery window during the checkout process.",
  },
  {
    question: " What if the recipient is not home at the time of delivery?",
    answer:
      "If the recipient is not home, our delivery person will leave the flowers in a safe location or with a neighbor. We will also notify the recipient of the delivery.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      " We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment options. All payments are processed through secure servers.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use industry-standard encryption and security measures to ensure that your payment information is safe and secure.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After placing your order, you will receive a confirmation email with a tracking link. You can use this link to monitor the status of your delivery.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "If you need to change or cancel your order, please contact our customer service team as soon as possible. Changes and cancellations may not be possible if the order has already been processed or dispatched.",
  },
  {
    question: "What should I do if there is a problem with my order?",
    answer:
      "If there is an issue with your order, such as damaged flowers or incorrect items, please contact our customer service team immediately. We will work with you to resolve the issue and ensure your satisfaction.",
  },
  {
    question: "Do you offer subscriptions for regular flower deliveries?",
    answer:
      "Yes, we offer flower subscription services for regular deliveries on a weekly, bi-weekly, or monthly basis. You can sign up for a subscription plan on our website.",
  },
];
faq.forEach(function(faq){
  document.querySelector("#faq").innerHTML += `
  <details class="cursor-none mt-5">
          <summary class="font-semibold font-mono ml-5 text-lg lg:text-xl">${faq.question}</summary>
          <p class="text-lg font-semibold lg:text-xl font-['Genos']">Ans:- ${faq.answer}</p>
        </details>
        <div class="w-full h-[2px] bg-white mt-2"></div>
  `;
})
Shery.makeMagnet(".logo");

document.body.addEventListener("mousemove", function(dets){
  gsap.to("#mouse",{
    x: dets.x,
    y: dets.y,
    duration: 0.5,
    ease: "power4"
  })
})