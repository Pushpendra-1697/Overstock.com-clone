
// popup//
let popup = document.querySelector('.pop-up')
let closeBtn = document.querySelector('.close-btn') 
document.querySelector(".first").addEventListener("click",PopupFunc);
    function PopupFunc(){
      popup.style.display = "block"; 
    }

    // closing of popup
closeBtn.addEventListener('click',()=>{
  popup.style.display = "none";
});



let popup1= document.querySelector('.pop-up1')
let closeBtn1 = document.querySelector('.close-btn1')
  document.querySelector(".random").addEventListener("click",RandomFunc);
    function RandomFunc(){
          popup1.style.display="block";
   }
   closeBtn1.addEventListener('click',()=>{
    popup1.style.display = "none";
  });

  document.querySelector(".image5").addEventListener("click",cartFunct);
  document.querySelector(".cart").addEventListener("click",cartFunct);
  function cartFunct(){
    window.location.href="product.html";
  }

 

  let Data=[
    {image:"https://ak1.ostkcdn.com/images/products/17813700/Layla-Outdoor-Wicker-Hanging-Basket-Chair-with-Cushions-by-Christopher-Knight-Home-e3568e3c-a41b-405d-b04c-a7b1174d9e78_600.jpg?imwidth=3840", span:"Sale $76.04",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/0a97164046a601de3001ed229efbf46f537c9c69/Weller-10-Ft.-Offset-Cantilever-Hanging-Patio-Umbrella.jpg?imwidth=3840",span:"Sale Starts at $126.39" ,para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/9722cf736820de69de4e225b95f06f501613e157/Outsunny-3-Person-Patio-Swing-Chair-Bench-Hammock-Outdoor-with-Convertible-Canopy%2C-Cushion%2C-Pillows-for-Porch-Backyard-Garden.jpg?imwidth=3840",span:"Sale Starts at $152.34",para:"Corvus Vera 10-foot Offset Cantilever Hanging Canopy Outdoor Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/ed2d9cb64b791e9c701b5422792cc629acb455c8/Kylie-Outdoor-Wicker-Hanging-Basket-Chair-by-Christopher-Knight-Home.jpg?imwidth=3840",span:"Sale $86.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},{image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f91b1f0d552924a7cd0d82fd3477293c82df2ce4/Corvus-Vera-10-foot-Offset-Cantilever-Hanging-Canopy-Outdoor-Patio-Umbrella.jpg?imwidth=3840",span:"Sale $760.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},{image:"https://ak1.ostkcdn.com/images/products/is/images/direct/74a6cce26cc2744ea14486280aa04e48268a2441/Cayuse-Teardrop-Hang-Chair-%28Stand-Not-Included%29.jpg?imwidth=3840",span:"Sale $7600.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/fc129d338b242d527247398b1abf1fec8b05930c/Pro-Heavy-Duty-Patio-Umbrella-Cross-Brace-Stand.jpg?imwidth=256",span:"Sale $768.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/f654ea83fa9833ed3cf67a2616d76c31a3d9b78e/Outsunny-Outdoor-Patio-Porch-Swing-Bench-with-Included-Adjustable-Shade-Awning-%26-Comfort-Padded-Seating-for-Three-People.jpg?imwidth=256",span:"Sale $786.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/22c600305a5278f6ed2d7bf092b359ebbe5ea6da/Outsunny-3-Person-Porch-Patio-Swing-with-Adjustable-Weather-Fighting-Tilt-Canopy-%26-Comfortable-Bench-Style-Seat.jpg?imwidth=256",span:"Sale $769.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
];

  let RightBtn=document.getElementById("right-btn");
  let LeftBtn=document.getElementById("left-btn");
  Data.map(function(ele){
    let div=document.createElement("div");
    let image=document.createElement('img');
    image.setAttribute("src",ele.image);
    let span=document.createElement("span");
    span.innerText=ele.span;
    let para=document.createElement("p");
     para.innerText=ele.para;
     let star=document.createElement('img');
     star.setAttribute("src",ele.star);
      div.append(image,span,para,star);
      document.querySelector("#container").append(div);
  });

  let Data3=[
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_5_Blackout_Curtains.jpg?imwidth=1920", heading:"Blackout Curtains",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_4_Expandable_Dining_Room_Sets.jpg?imwidth=1920", heading:"Expandable Dining Room Sets",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_3_Boho_Outdoor_Rugs.jpg?imwidth=1920", heading:"Swivel Living Room Chairs",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_6_Swivel_Living_Room_Chairs.jpg?imwidth=1920", heading:"Wood Plateform Ceds",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_7_Wood_Platform_Beds.jpg?imwidth=1920", heading:"Outdoor Bistro Sets",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_1_Outdoor_Bistro_Sets.jpg?imwidth=1920", heading:"Outdoor Ceiling Fans",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_8_Outdoor_Ceiling_Fans.jpg?imwidth=1920", heading:"Storage Sofas",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"},
    {image:"https://ak1.ostkcdn.com/img/mxc/07112022_2_Storage_Sofas.jpg?imwidth=1920", heading:"Boho Outdoor Rugs",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand"}
];
let RightBtn3=document.getElementById("right-btn");
  let LeftBtn3=document.getElementById("left-btn");
  Data3.map(function(ele){
    let div=document.createElement("div");
    let image=document.createElement('img');
    image.setAttribute("src",ele.image);
    let heading=document.createElement("h3");
    heading.innerText=ele.heading;
    let para=document.createElement("p");
     para.innerText=ele.para;
      div.append(image,heading,para);
      document.querySelector("#navbar2").append(div);
  });





let Data1=[
      {image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Furniture.png?imwidth=1920",heading:"Furniture"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-AreaRugs.png?imwidth=1920",heading:"Area Rugs"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-BedBath.png?imwidth=1920",heading:"Bedding"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Decor.png?imwidth=1920",heading:"Home Decor"},
      {image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-Window-040721.jpg?imwidth=1920",heading:"Window Treatement"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Kitchen.png?imwidth=1920",heading:"Kitchen"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11192021-CatSilo-Outdoor.png?imwidth=1920",heading:"Outdoor"},
      {image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-HomeImp.jpg?imwidth=1920",heading:"Home Improvement"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Storage.png?imwidth=1920",heading:"Storage"},
      {image:"https://ak1.ostkcdn.com/img/mxc/01112021-CatSilo-Mattresses.jpg?imwidth=1920",heading:"Mattresses"},
      {image:"https://ak1.ostkcdn.com/img/mxc/11152021-CatSilo-Lighting.png?imwidth=1920",heading:"Lighting"},
      {image:"https://ak1.ostkcdn.com/img/mxc/CatSilo-AllDeals-040721.jpg?imwidth=1920",heading:"Shop All Deals"},
];
Data1.map(function(ele,index){
    let div=document.createElement("div");
   let image= document.createElement("img");
   image.setAttribute("src",ele.image);
   let heading=document.createElement("h3");
   heading.innerText=ele.heading;
   div.append(image,heading);
   document.querySelector("#navbar1").append(div);
});
  
//top imageLinks//
let imageLink=
["https://ak1.ostkcdn.com/img/mxc/A4-DSK_7.19_SummerHomeSavings.jpg","https://ak1.ostkcdn.com/img/mxc/07132022-HP-A1-US-805x447_DesktopA1.jpg","https://ak1.ostkcdn.com/img/mxc/A2-MBL_7.19_SummerHomeSavings.jpg","https://ak1.ostkcdn.com/img/mxc/A3-DSK_7.19_SummerHomeSavings.jpg"];
let IMAGE=document.querySelector(".crauser");
let leftBtn2=document.getElementById("left-btn");
let rightBtn2=document.getElementById("right-btn");
let count=0;
rightBtn2.addEventListener("click",function(){
    count++;
    if(count===imageLink.length){
        count=0;
    }
    IMAGE.setAttribute("src",imageLink[count]);
});

leftBtn2.addEventListener("click",function(){
    count--;
    if(count<0){
        count=imageLink.length-1;
    }
    IMAGE.setAttribute("src",imageLink[count]);
});

let Data2=[
    {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/9a1b9d546637cacafa6b9b7700a690a2768bd4a7/Prospect-2-Piece-Upholstered-Fabric-Armchair-Set.jpg?imwidth=256", span:"Sale $76.04",para:"Hilford Cantilever 4-piece Heavy Duty Fillable Patio Umbrella Weighted Base Stand",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/26a0fe606ebd1ba7cc9b90a8543af30e60939292/Correia-Contemporary-Tufted-Fabric-Club-Chair-and-Ottoman-Set-by-Christopher-Knight-Home.jpg?imwidth=256",span:"Sale Starts at $126.39" ,para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/ea82c692247bd927879266f279b6a2398499e67d/Delicia-3-Piece-Living-Room-Set-with-Golden-Legs.jpg?imwidth=256",span:"Sale Starts at $152.34",para:"Corvus Vera 10-foot Offset Cantilever Hanging Canopy Outdoor Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/10e61b7c6caa04acd4675e3884301185d2790c60/SAFAVIEH-Adriana-Rattan-Accent-Chairs-%28Set-of-2%29.jpg?imwidth=256",span:"Sale $86.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},{image:"https://ak1.ostkcdn.com/images/products/12684699/Rockwell-Mid-Century-Modern-Chair-with-Ottoman-efac282b-53a8-49f9-87ca-2e7fa370fcf6_320.jpg?imwidth=256",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},{image:"https://ak1.ostkcdn.com/images/products/is/images/direct/8fb98407ccab7790c4d35341f987591afc1ae15e/Brandon-Distressed-Whiskey-Italian-Leather-Sofa-and-Chair.jpg?imwidth=256",span:"Sale $7600.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/is/images/direct/025d85159036b0f2c1e2da84f84987c8ebc17a96/SavaHome-Armoni-Living-Room-Set-%283-3-1-1%29.jpg?imwidth=256",span:"Sale $768.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/27415227/P32590620.jpg?imwidth=256",span:"Sale $786.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
  {image:"https://ak1.ostkcdn.com/images/products/27981706/Nicole-Miller-Akeno-Velvet-Club-Chair-or-Sofa-Channel-Tufted-8b943fd2-f39e-4230-aee4-856689ad51cb_320.jpg?imwidth=256",span:"Sale $769.04",para:"Weller 10 Ft. Offset Cantilever Hanging Patio Umbrella",star:"https://ak1.ostkcdn.com/img/mxc/20200227_rating-star-full.svg"},
];

  let rightBtn=document.getElementById("right-btn");
  let leftBTn=document.getElementById("left-btn");
  Data2.map(function(ele){
    let div=document.createElement("div");
    let image=document.createElement('img');
    image.setAttribute("src",ele.image);
    let span=document.createElement("span");
    span.innerText=ele.span;
    let para=document.createElement("p");
     para.innerText=ele.para;
     let star=document.createElement('img');
     star.setAttribute("src",ele.star);
      div.append(image,span,para,star);
      document.querySelector("#navbar6").append(div);
  });




 //middle imageLinks//
 let imageLink1=
 ["https://ak1.ostkcdn.com/img/mxc/A4-DSK_7.19_SummerHomeSavings.jpg","https://ak1.ostkcdn.com/img/mxc/07132022-HP-A1-US-805x447_DesktopA1.jpg","https://ak1.ostkcdn.com/img/mxc/A2-MBL_7.19_SummerHomeSavings.jpg","https://ak1.ostkcdn.com/img/mxc/A3-DSK_7.19_SummerHomeSavings.jpg"];

    let IMAGE1=document.querySelector(".crauser");
let leftBtn1=document.getElementById("left-btn");
let rightBtn1=document.getElementById("right-btn");
let count1=0;
rightBtn1.addEventListener("click",function(event){
    count1++;
    if(count1===imageLink1.length){
        count1=0;
    }
    IMAGE1.setAttribute("src",imageLink1[count]);
});

leftBtn1.addEventListener("click",function(event){
    count1--;
    if(count1<0){
        count1=imageLink1.length-1;
    }
    IMAGE1.setAttribute("src",imageLink1[count1]);
});
