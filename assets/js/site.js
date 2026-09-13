const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
const root=document.documentElement;
const saved=localStorage.getItem("theme");
if(saved==="dark" || (!saved && matchMedia("(prefers-color-scheme: dark)").matches)) root.classList.add("dark");

function updateThemeButton(){
  const b=$("#themeToggle");
  if(!b) return;
  const dark=root.classList.contains("dark");
  b.textContent=dark?"☀":"☾";
  b.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
}

function markBrokenImage(img){
  if(img.dataset.errorHandled) return;
  img.dataset.errorHandled="true";
  img.classList.add("image-error");
  img.alt=`Image unavailable: ${img.alt || "team image"}`;
}

document.addEventListener("DOMContentLoaded",()=>{
  updateThemeButton();
  $("#themeToggle")?.addEventListener("click",()=>{
    root.classList.toggle("dark");
    localStorage.setItem("theme",root.classList.contains("dark")?"dark":"light");
    updateThemeButton();
  });

  $("#menuToggle")?.addEventListener("click",()=>{
    const nav=$("#navLinks");
    nav?.classList.toggle("open");
    const open=nav?.classList.contains("open");
    $("#menuToggle")?.setAttribute("aria-label",open?"Close menu":"Open menu");
  });

  const page=document.body.dataset.page;
  $$("#navLinks a").forEach(a=>{if(a.dataset.page===page)a.classList.add("active")});
  $$(".year").forEach(e=>e.textContent=new Date().getFullYear());
  $$("img").forEach(img=>img.addEventListener("error",()=>markBrokenImage(img),{once:true}));
});
