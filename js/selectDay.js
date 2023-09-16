const btn1 = document.getElementById("1st");
const btn2 = document.getElementById("2nd");
const btn3 = document.getElementById("3rd");
const btn4 = document.getElementById("4th");

document.getElementById("2nd").addEventListener("click", (event) => {
  if (btn1.classList.contains("active")) {
    btn1.classList.remove("active");
    document.getElementById("logo1st").classList.remove("imgActive");
    document.getElementById("day1st").classList.remove("dayActive");
    document.getElementById("temp1st").classList.remove("tempActive");
  } else if (btn3.classList.contains("active")) {
    btn3.classList.remove("active");
    document.getElementById("logo3rd").classList.remove("imgActive");
    document.getElementById("day3rd").classList.remove("dayActive");
    document.getElementById("temp3rd").classList.remove("tempActive");
  } else if (btn4.classList.contains("active")) {
    btn4.classList.remove("active");
    document.getElementById("logo4th").classList.remove("imgActive");
    document.getElementById("day4th").classList.remove("dayActive");
    document.getElementById("temp4th").classList.remove("tempActive");
  }
  btn2.classList.add("active");
  document.getElementById("logo2nd").classList.add("imgActive");
  document.getElementById("day2nd").classList.add("dayActive");
  document.getElementById("temp2nd").classList.add("tempActive");
});

document.getElementById("3rd").addEventListener("click", (event) => {
  if (btn1.classList.contains("active")) {
    btn1.classList.remove("active");
    document.getElementById("logo1st").classList.remove("imgActive");
    document.getElementById("day1st").classList.remove("dayActive");
    document.getElementById("temp1st").classList.remove("tempActive");
  } else if (btn2.classList.contains("active")) {
    btn2.classList.remove("active");
    document.getElementById("logo2nd").classList.remove("imgActive");
    document.getElementById("day2nd").classList.remove("dayActive");
    document.getElementById("temp2nd").classList.remove("tempActive");
  } else if (btn4.classList.contains("active")) {
    btn4.classList.remove("active");
    document.getElementById("logo4th").classList.remove("imgActive");
    document.getElementById("day4th").classList.remove("dayActive");
    document.getElementById("temp4th").classList.remove("tempActive");
  }
  btn3.classList.add("active");
  document.getElementById("logo3rd").classList.add("imgActive");
  document.getElementById("day3rd").classList.add("dayActive");
  document.getElementById("temp3rd").classList.add("tempActive");
});

document.getElementById("4th").addEventListener("click", (event) => {
  if (btn1.classList.contains("active")) {
    btn1.classList.remove("active");
    document.getElementById("logo1st").classList.remove("imgActive");
    document.getElementById("day1st").classList.remove("dayActive");
    document.getElementById("temp1st").classList.remove("tempActive");
  } else if (btn2.classList.contains("active")) {
    btn2.classList.remove("active");
    document.getElementById("logo2nd").classList.remove("imgActive");
    document.getElementById("day2nd").classList.remove("dayActive");
    document.getElementById("temp2nd").classList.remove("tempActive");
  } else if (btn3.classList.contains("active")) {
    btn3.classList.remove("active");
    document.getElementById("logo3rd").classList.remove("imgActive");
    document.getElementById("day3rd").classList.remove("dayActive");
    document.getElementById("temp3rd").classList.remove("tempActive");
  }
  btn4.classList.add("active");
  document.getElementById("logo4th").classList.add("imgActive");
  document.getElementById("day4th").classList.add("dayActive");
  document.getElementById("temp4th").classList.add("tempActive");
});

document.getElementById("1st").addEventListener("click", (event) => {
  if (btn2.classList.contains("active")) {
    btn2.classList.remove("active");
    document.getElementById("logo2nd").classList.remove("imgActive");
    document.getElementById("day2nd").classList.remove("dayActive");
    document.getElementById("temp2nd").classList.remove("tempActive");
  } else if (btn3.classList.contains("active")) {
    btn3.classList.remove("active");
    document.getElementById("logo3rd").classList.remove("imgActive");
    document.getElementById("day3rd").classList.remove("dayActive");
    document.getElementById("temp3rd").classList.remove("tempActive");
  } else if (btn4.classList.contains("active")) {
    btn4.classList.remove("active");
    document.getElementById("logo4th").classList.remove("imgActive");
    document.getElementById("day4th").classList.remove("dayActive");
    document.getElementById("temp4th").classList.remove("tempActive");
  }
  btn1.classList.add("active");
  document.getElementById("logo1st").classList.add("imgActive");
  document.getElementById("day1st").classList.add("dayActive");
  document.getElementById("temp1st").classList.add("tempActive");
});
