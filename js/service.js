const cards =document.querySelectorAll(".card1");

function handleMouseOver(event) {
 const icon =event.currentTarget.querySelector(".card-body");
  icon.style.backgroundColor="#007D6C";

  const icon1 =event.currentTarget.querySelector(".icon");
    icon1.style.marginLeft="60px";
    icon1.style.backgroundColor="#ffff";
    icon1.style.color="#007D6C";
}
function handleMouseOut(event){
  const icon =event.currentTarget.querySelector(".card-body");
  icon.style.backgroundColor="#ffff";
  
  const icon1 =event.currentTarget.querySelector(".icon");
    icon1.style.marginLeft="20px";
    icon1.style.backgroundColor="#007D6C";
    icon1.style.color="#ffff";
     };

cards.forEach(card=>{
  card.addEventListener("mouseover",handleMouseOver );
  card.addEventListener("mouseout", handleMouseOut);
});