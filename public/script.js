// public/script.js
document.addEventListener("DOMContentLoaded", function() {
  const arrayContainer = document.getElementById("array-container");

  // 各个排序按钮
  const bubbleSortBtn = document.getElementById("bubble-sort-btn");
  const insertionSortBtn = document.getElementById("insertion-sort-btn");

  let array = [];
  let isSorting = false; // 判断是否正在排序

  // 随机生成数组
  function generateArray() {
    array = [];
    for (let i = 0; i < 50; i++) {
      array.push(Math.floor(Math.random() * 100) + 10);
    }
    renderArray();
  }

  // 渲染数组
  function renderArray() {
    arrayContainer.innerHTML = "";
    array.forEach(value => {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${value}px`;
      arrayContainer.appendChild(bar);
    });
  }

  // 执行冒泡排序并可视化
  async function bubbleSort() {
    if (isSorting) return; // 如果正在排序，直接返回
    isSorting = true; // 设置排序状态为 true

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        const bars = document.querySelectorAll(".bar");
        bars[j].style.backgroundColor = "#e74c3c";
        bars[j + 1].style.backgroundColor = "#e74c3c";

        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];  // Swap
          renderArray();
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        bars[j].style.backgroundColor = "#3498db";
        bars[j + 1].style.backgroundColor = "#3498db";
      }
    }

    isSorting = false; // 排序完成，重置排序状态
  }

  // 执行插入排序并可视化
  async function insertionSort() {
    if (isSorting) return; // 如果正在排序，直接返回
    isSorting = true; // 设置排序状态为 true

    for (let i = 1; i < array.length; i++) {
      let j = i;
      while (j > 0 && array[j] < array[j - 1]) {
        const bars = document.querySelectorAll(".bar");
        bars[j].style.backgroundColor = "#e74c3c";
        bars[j - 1].style.backgroundColor = "#e74c3c";

        [array[j], array[j - 1]] = [array[j - 1], array[j]]; // Swap
        renderArray();
        await new Promise(resolve => setTimeout(resolve, 100));

        bars[j].style.backgroundColor = "#3498db";
        bars[j - 1].style.backgroundColor = "#3498db";
        j--;
      }
    }

    isSorting = false; // 排序完成，重置排序状态
  }

  // 事件监听
  bubbleSortBtn.addEventListener("click", function() {
    bubbleSort();
  });

  insertionSortBtn.addEventListener("click", function() {
    insertionSort();
  });

  generateArray(); // 页面加载时生成一个新数组
});
