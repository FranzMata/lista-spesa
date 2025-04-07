function addItem() {
  const input = document.getElementById('itemInput');
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement('li');
    li.textContent = value;
    li.onclick = () => li.remove();
    document.getElementById('itemList').appendChild(li);
    input.value = "";
  }
}
